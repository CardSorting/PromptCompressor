/**
 * BroccoliDB Inference Boundary Empirical Benchmarking Harness (OpenAI Models)
 *
 * Implements the Senior Architect's head-to-head empirical testing protocol:
 * same task -> same model (OpenAI) -> same provider -> Baseline vs GALX -> measure what changed at the inference boundary.
 *
 * Supports:
 * 1. LIVE OPENAI API MODE: Direct live HTTP calls to `https://api.openai.com/v1/chat/completions`
 *    capturing actual `response.usage` fields, cached prefix tokens, reasoning tokens, and wall-clock latency.
 * 2. CALIBRATED OFFLINE REPLAY MODE: High-fidelity model-differentiated tokenization & latency simulation
 *    when running in CI or without an active API key.
 *
 * Calculates:
 * - Exact OpenAI Billed Cost ($ USD) based on official published rate cards.
 * - Effective Cost Per Successful Task ($ / success).
 * - Latency reduction and token/dollar correlation.
 */
import { BenchmarkTaskDefinition } from './OpenAiTaskSuite.js';
export interface TaskExecutionResult {
    taskId: string;
    taskName: string;
    category: string;
    modelId: string;
    executionMode: 'LIVE_OPENAI_API' | 'CALIBRATED_OFFLINE_SIMULATION';
    baseline: {
        inputTokens: number;
        outputTokens: number;
        cachedTokens: number;
        reasoningTokens?: number;
        billedCostUSD: number;
        latencyMs: number;
        passed: boolean;
        qualityScore: number;
        evaluationReasons: string[];
        costPerSuccessfulTaskUSD: number;
        rawResponseSnippet?: string;
    };
    galx: {
        inputTokens: number;
        outputTokens: number;
        cachedTokens: number;
        reasoningTokens?: number;
        billedCostUSD: number;
        latencyMs: number;
        passed: boolean;
        qualityScore: number;
        evaluationReasons: string[];
        costPerSuccessfulTaskUSD: number;
        rawResponseSnippet?: string;
    };
    deltas: {
        tokensSaved: number;
        tokenSavingsPercentage: number;
        billedCostSavedUSD: number;
        billedCostSavingsPercentage: number;
        latencyReductionMs: number;
        qualityPreserved: boolean;
    };
}
export interface MeasurementProvenanceMetadata {
    provenanceCategory: 'OBSERVED_AT_PROVIDER_BOUNDARY' | 'CALIBRATED_OFFLINE_SIMULATION';
    provider: 'OpenAI';
    modelId: string;
    usageMeasurementSource: 'response.usage (live HTTP payload)' | 'tiktoken_o200k_base_approximation';
    reasoningTokenAccounting: 'response.usage.completion_tokens_details.reasoning_tokens' | 'modeled_cot_distribution';
    latencyMeasurementSource: 'performance.now() wall-clock round-trip' | 'calibrated_model_synthetic_curve';
    billedCostFormula: 'observed_usage * published_rate_card (with 50% prompt-cache discount)' | 'modeled_usage * published_rate_card';
    evaluatorType: 'deterministic_objective_domain_rules';
}
export interface BenchmarkSuiteReport {
    timestamp: string;
    modelId: string;
    executionMode: 'LIVE_OPENAI_API' | 'CALIBRATED_OFFLINE_SIMULATION';
    provenance: MeasurementProvenanceMetadata;
    totalTasksEvaluated: number;
    baselineTotalBilledCostUSD: number;
    galxTotalBilledCostUSD: number;
    totalDollarsSavedUSD: number;
    overallBilledCostReductionPercentage: number;
    baselineSuccessRatePercentage: number;
    galxSuccessRatePercentage: number;
    baselineCostPerSuccessfulTaskUSD: number;
    galxCostPerSuccessfulTaskUSD: number;
    effectiveRoiMultiplier: number;
    averageBaselineLatencyMs: number;
    averageGalxLatencyMs: number;
    compressibleCostSavingsPercentage: number;
    irreducibleCostFloorUSD: number;
    narrativeVerdict: string;
    taskResults: TaskExecutionResult[];
}
export interface BenchmarkRunOptions {
    modelId?: string;
    apiKey?: string;
    forceOffline?: boolean;
    tasks?: BenchmarkTaskDefinition[];
}
export declare class BroccoliInferenceBoundaryBenchmarker {
    /**
     * Executes the full benchmark suite against a specified OpenAI model.
     */
    static runSuite(options?: BenchmarkRunOptions): Promise<BenchmarkSuiteReport>;
    /**
     * Evaluates a single task head-to-head: Baseline vs GALX.
     */
    static evaluateTask(task: BenchmarkTaskDefinition, modelId: string, apiKey?: string): Promise<TaskExecutionResult>;
    /**
     * Dispatches a live HTTP request to OpenAI API and parses exact provider usage fields.
     */
    private static callLiveOpenAi;
    /**
     * Accurate model-differentiated offline simulation for CI and headless testing.
     */
    private static simulateModelExecution;
    /**
     * Classifies observed spend reduction into empirical information regimes.
     */
    static classifyEmpiricalRegime(savingsPercentage: number): string;
    /**
     * Executes a Randomized Branch-Blinded A/B Evaluation where branch assignments are randomized
     * to decouple execution and objective grading from branch identity before post-hoc unblinding.
     */
    static evaluateBlindedWorkload(task: BenchmarkTaskDefinition, modelId?: string, apiKey?: string): Promise<{
        taskId: string;
        taskName: string;
        modelId: string;
        isGalxBranchAlpha: boolean;
        branchAlpha: {
            inputTokens: number;
            outputTokens: number;
            latencyMs: number;
            qualityScore: number;
            passed: boolean;
        };
        branchBeta: {
            inputTokens: number;
            outputTokens: number;
            latencyMs: number;
            qualityScore: number;
            passed: boolean;
        };
        unblinded: {
            baselineBranch: 'Alpha' | 'Beta';
            galxBranch: 'Alpha' | 'Beta';
            inputSavingsPercentage: number;
            billedCostSavedUSD: number;
            billedCostSavingsPercentage: number;
            empiricalRegime: string;
        };
    }>;
}
//# sourceMappingURL=BroccoliInferenceBoundaryBenchmarker.d.ts.map