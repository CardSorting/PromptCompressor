import { TokenCostCalculator } from '../pricing/TokenCostCalculator.js';
import { ModelCatalog } from '../router/ModelCatalog.js';
import { PromptPrefixRestructurer } from './PromptPrefixRestructurer.js';
import { AgentCircuitBreaker } from './AgentCircuitBreaker.js';
const LOW_RISK_WORKLOADS = new Set([
    'classification',
    'data_extraction',
    'entity_extraction',
    'formatting',
    'intent_routing',
    'moderation',
    'tagging'
]);
const DEFAULT_POLICY = {
    mode: 'observe',
    minimumEvaluationSamples: 200,
    maximumQualityRegression: 0.01,
    circuitBreakerMaxTurns: 12,
    dynamicPrefixCacheEnabled: true,
    approvedRoutes: []
};
/**
 * Deterministic request policy evaluator.
 *
 * It intentionally does not infer "quality" from prompt entropy alone. A request is
 * routed only when the customer names the workload and an unexpired evaluation
 * record proves that the exact requested -> target route meets its quality gate.
 */
export class GalxSpendGovernanceEngine {
    static evaluate(request, context = {}, inputPolicy = DEFAULT_POLICY) {
        const policy = {
            ...DEFAULT_POLICY,
            ...inputPolicy,
            approvedRoutes: inputPolicy.approvedRoutes || []
        };
        const requested = ModelCatalog.resolveModel(request.model);
        const workload = normalizeWorkload(context.workload);
        const estimatedPromptTokens = estimatePromptTokens(request);
        const requestedMaximumCost = estimateMaximumCost(requested, request, estimatedPromptTokens);
        const reasonCodes = [];
        // 1. Evaluate Agent Circuit Breaker
        if (context.sessionId && request.messages) {
            const circuitEvaluation = AgentCircuitBreaker.evaluateSession(context.sessionId, request.messages, policy.circuitBreakerMaxTurns || 12);
            if (circuitEvaluation.shouldHalt) {
                reasonCodes.push(circuitEvaluation.reason || 'AGENT_CIRCUIT_BREAKER_TRIPPED');
                if (policy.mode === 'enforce') {
                    return {
                        mode: policy.mode,
                        action: 'block',
                        requestedModel: requested.id,
                        effectiveModel: requested.id,
                        workload,
                        estimatedPromptTokens,
                        estimatedMaximumCostUsd: requestedMaximumCost,
                        reasonCodes,
                        requiresApproval: false
                    };
                }
            }
        }
        // 2. Evaluate Dynamic Prefix Restructuring (75% Cache Hit Optimization)
        let prefixRestructuring;
        if (policy.dynamicPrefixCacheEnabled && request.messages && request.messages.length > 0) {
            const firstContent = typeof request.messages[0].content === 'string' ? request.messages[0].content : '';
            if (firstContent) {
                prefixRestructuring = PromptPrefixRestructurer.restructure(firstContent);
                if (prefixRestructuring.wasRestructured) {
                    reasonCodes.push('DYNAMIC_PREFIX_RESTRUCTURED');
                }
            }
        }
        // 3. Evaluate Deterministic Limits
        const deterministicBlock = this.evaluateDeterministicLimits(request, requested, context, policy, requestedMaximumCost, reasonCodes);
        if (deterministicBlock && policy.mode === 'enforce') {
            return {
                mode: policy.mode,
                action: 'block',
                requestedModel: requested.id,
                effectiveModel: requested.id,
                workload,
                estimatedPromptTokens,
                estimatedMaximumCostUsd: requestedMaximumCost,
                reasonCodes,
                requiresApproval: false,
                prefixRestructuring
            };
        }
        // 4. Candidate Model Resolution
        const candidate = this.findLowerCostCandidate(requested, request, workload);
        if (!candidate) {
            reasonCodes.push(workload ? 'NO_SAFE_LOWER_COST_CANDIDATE' : 'WORKLOAD_ATTRIBUTION_MISSING');
            return {
                mode: policy.mode,
                action: 'allow',
                requestedModel: requested.id,
                effectiveModel: requested.id,
                workload,
                estimatedPromptTokens,
                estimatedMaximumCostUsd: requestedMaximumCost,
                reasonCodes,
                requiresApproval: false,
                prefixRestructuring
            };
        }
        // 5. Evidence Verification
        const evidence = this.findPassingEvidence(requested, candidate, workload, policy, reasonCodes);
        if (!evidence) {
            reasonCodes.push('QUALITY_EVIDENCE_REQUIRED');
            return {
                mode: policy.mode,
                action: 'allow',
                requestedModel: requested.id,
                effectiveModel: requested.id,
                recommendedModel: candidate.id,
                workload,
                estimatedPromptTokens,
                estimatedMaximumCostUsd: requestedMaximumCost,
                reasonCodes,
                requiresApproval: true,
                prefixRestructuring
            };
        }
        if (policy.mode !== 'enforce') {
            reasonCodes.push(policy.mode === 'observe' ? 'SHADOW_ELIGIBLE' : 'ROUTE_RECOMMENDED');
            return {
                mode: policy.mode,
                action: 'allow',
                requestedModel: requested.id,
                effectiveModel: requested.id,
                recommendedModel: candidate.id,
                workload,
                estimatedPromptTokens,
                estimatedMaximumCostUsd: requestedMaximumCost,
                routeEvidenceId: evidence.id,
                reasonCodes,
                requiresApproval: false,
                prefixRestructuring
            };
        }
        reasonCodes.push('QUALITY_GATE_PASSED');
        return {
            mode: policy.mode,
            action: 'route',
            requestedModel: requested.id,
            effectiveModel: candidate.id,
            recommendedModel: candidate.id,
            workload,
            estimatedPromptTokens,
            estimatedMaximumCostUsd: estimateMaximumCost(candidate, request, estimatedPromptTokens),
            routeEvidenceId: evidence.id,
            reasonCodes,
            requiresApproval: false,
            prefixRestructuring
        };
    }
    static parsePolicy(rawPolicy, fallbackMode) {
        const mode = isGovernanceMode(fallbackMode) ? fallbackMode : DEFAULT_POLICY.mode;
        if (!rawPolicy)
            return { ...DEFAULT_POLICY, mode };
        try {
            const parsed = JSON.parse(rawPolicy);
            return {
                ...DEFAULT_POLICY,
                ...parsed,
                mode: isGovernanceMode(parsed.mode) ? parsed.mode : mode,
                approvedRoutes: Array.isArray(parsed.approvedRoutes) ? parsed.approvedRoutes : []
            };
        }
        catch {
            return { ...DEFAULT_POLICY, mode };
        }
    }
    static evaluateDeterministicLimits(request, requested, context, policy, estimatedMaximumCostUsd, reasonCodes) {
        let shouldBlock = false;
        if (policy.allowedModels?.length && !policy.allowedModels.includes(requested.id)) {
            reasonCodes.push('MODEL_NOT_ALLOWED');
            shouldBlock = true;
        }
        const requestedOutputTokens = request.max_completion_tokens ?? request.max_tokens ?? 2_048;
        if (policy.maxOutputTokens !== undefined && requestedOutputTokens > policy.maxOutputTokens) {
            reasonCodes.push('OUTPUT_TOKEN_LIMIT_EXCEEDED');
            shouldBlock = true;
        }
        if (policy.maxEstimatedRequestCostUsd !== undefined &&
            estimatedMaximumCostUsd > policy.maxEstimatedRequestCostUsd) {
            reasonCodes.push('ESTIMATED_REQUEST_COST_EXCEEDED');
            shouldBlock = true;
        }
        if (policy.requireAttribution && (!context.workload || !context.department)) {
            reasonCodes.push('REQUIRED_ATTRIBUTION_MISSING');
            shouldBlock = true;
        }
        return shouldBlock;
    }
    static findLowerCostCandidate(requested, request, workload) {
        if (!workload || !LOW_RISK_WORKLOADS.has(workload))
            return null;
        if (requested.id === 'gpt-5.6-luna')
            return null;
        if ((request.tools?.length || 0) > 0)
            return null;
        if (containsImageInput(request))
            return null;
        const candidate = ModelCatalog.resolveModel('gpt-5.6-luna');
        const requestedBlendedRate = requested.inputPricePer1M + requested.outputPricePer1M;
        const candidateBlendedRate = candidate.inputPricePer1M + candidate.outputPricePer1M;
        return candidateBlendedRate < requestedBlendedRate ? candidate : null;
    }
    static findPassingEvidence(requested, candidate, workload, policy, reasonCodes) {
        const evidence = policy.approvedRoutes?.find(route => route.requestedModel === requested.id &&
            route.targetModel === candidate.id &&
            normalizeWorkload(route.workload) === workload);
        if (!evidence || evidence.status !== 'approved')
            return null;
        if (evidence.expiresAt && Date.parse(evidence.expiresAt) <= Date.now()) {
            reasonCodes.push('QUALITY_EVIDENCE_EXPIRED');
            return null;
        }
        const minimumSamples = policy.minimumEvaluationSamples ?? DEFAULT_POLICY.minimumEvaluationSamples;
        if (evidence.sampleSize < minimumSamples) {
            reasonCodes.push('QUALITY_SAMPLE_TOO_SMALL');
            return null;
        }
        const maximumRegression = policy.maximumQualityRegression ?? DEFAULT_POLICY.maximumQualityRegression;
        if (evidence.lowerBoundQualityDelta < -maximumRegression) {
            reasonCodes.push('QUALITY_CONFIDENCE_GATE_FAILED');
            return null;
        }
        if (evidence.candidateSuccessRate - evidence.baselineSuccessRate < -maximumRegression) {
            reasonCodes.push('QUALITY_REGRESSION_GATE_FAILED');
            return null;
        }
        return evidence;
    }
}
function estimatePromptTokens(request) {
    const serialized = JSON.stringify({
        system: request.system,
        messages: request.messages,
        tools: request.tools,
        response_format: request.response_format
    });
    return TokenCostCalculator.estimateTokensFromText(serialized, 'json');
}
function estimateMaximumCost(model, request, promptTokens) {
    const completionTokens = Math.max(0, request.max_completion_tokens ?? request.max_tokens ?? 2_048);
    return TokenCostCalculator.calculateCost(model, { promptTokens, completionTokens }).netCostUsd;
}
function normalizeWorkload(workload) {
    if (!workload)
        return undefined;
    const normalized = workload.trim().toLowerCase().replace(/[\s-]+/g, '_');
    return normalized || undefined;
}
function containsImageInput(request) {
    return request.messages.some(message => Array.isArray(message.content) &&
        message.content.some(part => part.type === 'image_url' || Boolean(part.image_url)));
}
function isGovernanceMode(value) {
    return value === 'observe' || value === 'recommend' || value === 'enforce';
}
//# sourceMappingURL=GalxSpendGovernanceEngine.js.map