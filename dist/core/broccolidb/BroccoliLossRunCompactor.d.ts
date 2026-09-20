/**
 * GALXAI BroccoliDB Commercial Insurance Loss Run & Claims Experience Compactor
 *
 * Slashes massive LLM token bills on 5-year commercial insurance loss runs (General Liability, Workers' Comp, Commercial Auto, Property):
 * 1. Evaluates 100+ page loss run schedules from Travelers, Chubb, Liberty Mutual, Hartford in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Insured Policyholder, Line of Coverage, 5-Year Incurred Losses $, Paid vs Outstanding Reserves, Total Claim Count, and Shock Losses (> $50k).
 * 3. Prunes micro-claim closed record without payment lines ($0 records), adjuster internal claim diary notes, and carrier marketing inserts.
 *
 * Result: Slashes 75%–90% of commercial underwriting loss run prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface LossRunCompactionResult {
    wasCompacted: boolean;
    insuredAndCoverageLine: string;
    fiveYearLossSummaryAndIncurred: string;
    shockLossesAndSevereClaims: string;
    lossRatioAndUnderwritingImpression: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedLossRunPrompt: string;
}
export declare class BroccoliLossRunCompactor {
    private static instance;
    readonly lossRunTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliLossRunCompactor;
    static compactLossRun(rawText: string): LossRunCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliLossRunCompactor.d.ts.map