/**
 * GALXAI Quality Equivalence & Tier Cascading Evaluation Harness
 *
 * Provides rigorous statistical evaluation and cryptographic attestation to prove that
 * downgrading low-entropy workloads from flagship models (gpt-5.6-sol) to high-velocity tiers
 * (gpt-5.6-luna / gpt-5.6-terra) meets strict enterprise quality gates (Δ ≥ -0.005).
 */
import type { ModelRouteEvidence } from '../governance/GalxSpendGovernanceEngine.js';
export type EvalWorkloadType = 'classification' | 'data_extraction' | 'intent_routing' | 'formatting' | 'entity_extraction' | 'moderation';
export interface EvalSample {
    id: string;
    workload: EvalWorkloadType;
    input: string;
    expectedOutput: string | Record<string, unknown>;
    tolerance?: 'exact' | 'semantic' | 'json_subset';
}
export interface EvalRunResult {
    evidence: ModelRouteEvidence;
    sampleCount: number;
    workload: EvalWorkloadType;
    baselineModel: string;
    candidateModel: string;
    baselinePassCount: number;
    candidatePassCount: number;
    baselineAccuracy: number;
    candidateAccuracy: number;
    qualityDelta: number;
    standardError: number;
    confidenceInterval95: [number, number];
    isApprovedForAutonomousRouting: boolean;
    costReductionPercentage: number;
    attestationDigest: string;
    executedAt: string;
}
export declare class TierCascadingEvalHarness {
    /**
     * Evaluates candidate model accuracy against baseline across a benchmark suite
     */
    static evaluateWorkload(workload: EvalWorkloadType, samples: EvalSample[], baselineModel?: string, candidateModel?: string): EvalRunResult;
    /**
     * Formats a formal markdown attestation report ready for architecture & compliance reviews
     */
    static generateAttestationReport(result: EvalRunResult): string;
    private static scoreSample;
}
//# sourceMappingURL=TierCascadingEvalHarness.d.ts.map