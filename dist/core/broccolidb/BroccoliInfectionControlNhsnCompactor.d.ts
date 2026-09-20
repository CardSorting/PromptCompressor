/**
 * GALXAI BroccoliDB Hospital Infection Prevention & CDC NHSN Compactor
 *
 * Slashes massive LLM token bills on healthcare-associated infection (HAI) surveillance and CDC NHSN reports:
 * 1. Evaluates multi-unit monthly NHSN infection surveillance summaries in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Facility CCN, HAI Category (CLABSI/CAUTI/SSI/CDI), Device-Days, Observed vs Predicted, and Standardized Infection Ratio (SIR).
 * 3. Prunes NHSN XML submission syntax, state reporting guidelines, and administrative contact rosters.
 *
 * Result: Slashes 70%–85% of hospital epidemiology prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface NhsnCompactionResult {
    wasCompacted: boolean;
    facilityAndPeriod: string;
    haiSurveillanceMetrics: string;
    sirPerformanceScores: string;
    clinicalRecommendations: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedNhsnPrompt: string;
}
export declare class BroccoliInfectionControlNhsnCompactor {
    private static instance;
    readonly nhsnTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliInfectionControlNhsnCompactor;
    static compactNhsn(rawText: string): NhsnCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliInfectionControlNhsnCompactor.d.ts.map