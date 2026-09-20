import type { ChatCompletionRequest } from '../contracts/GalxContracts.js';
import { PrefixRestructureResult } from './PromptPrefixRestructurer.js';
export type GovernanceMode = 'observe' | 'recommend' | 'enforce';
export interface GovernanceRequestContext {
    workspaceId?: string;
    projectId?: string;
    department?: string;
    costCenter?: string;
    environment?: string;
    workload?: string;
    sessionId?: string;
}
/**
 * Evidence produced by an offline regression set plus a production shadow run.
 * The lower-bound delta is deliberately required: a point estimate alone is not
 * enough evidence to make a cheaper model the production default.
 */
export interface ModelRouteEvidence {
    id: string;
    requestedModel: string;
    targetModel: string;
    workload: string;
    status: 'draft' | 'approved' | 'revoked';
    sampleSize: number;
    baselineSuccessRate: number;
    candidateSuccessRate: number;
    lowerBoundQualityDelta: number;
    evaluatedAt: string;
    expiresAt?: string;
}
export interface SpendGovernancePolicy {
    mode: GovernanceMode;
    allowedModels?: string[];
    maxOutputTokens?: number;
    maxEstimatedRequestCostUsd?: number;
    requireAttribution?: boolean;
    minimumEvaluationSamples?: number;
    maximumQualityRegression?: number;
    circuitBreakerMaxTurns?: number;
    dynamicPrefixCacheEnabled?: boolean;
    approvedRoutes?: ModelRouteEvidence[];
}
export type GovernanceAction = 'allow' | 'block' | 'route';
export interface GovernanceDecision {
    mode: GovernanceMode;
    action: GovernanceAction;
    requestedModel: string;
    effectiveModel: string;
    recommendedModel?: string;
    workload?: string;
    estimatedPromptTokens: number;
    estimatedMaximumCostUsd: number;
    routeEvidenceId?: string;
    reasonCodes: string[];
    requiresApproval: boolean;
    prefixRestructuring?: PrefixRestructureResult;
}
/**
 * Deterministic request policy evaluator.
 *
 * It intentionally does not infer "quality" from prompt entropy alone. A request is
 * routed only when the customer names the workload and an unexpired evaluation
 * record proves that the exact requested -> target route meets its quality gate.
 */
export declare class GalxSpendGovernanceEngine {
    static evaluate(request: ChatCompletionRequest, context?: GovernanceRequestContext, inputPolicy?: Partial<SpendGovernancePolicy>): GovernanceDecision;
    static parsePolicy(rawPolicy: string | undefined, fallbackMode: string | undefined): SpendGovernancePolicy;
    private static evaluateDeterministicLimits;
    private static findLowerCostCandidate;
    private static findPassingEvidence;
}
//# sourceMappingURL=GalxSpendGovernanceEngine.d.ts.map