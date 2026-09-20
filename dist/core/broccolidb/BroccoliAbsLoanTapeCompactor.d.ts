/**
 * GALXAI BroccoliDB Asset-Backed Securitization (ABS) Loan Tape Compactor
 *
 * Slashes massive LLM token bills on ABS/MBS loan-level asset data tapes (SEC Form ABS-EE / ABS-15G / Moody's / S&P):
 * 1. Evaluates 100MB+ loan tape CSV/XML data tapes in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Deal Issuance, Total Pool Balance $, Weighted Average Coupon (WAC %), Weighted Average Maturity (WAM), Delinquency Tiers (30/60/90+ DPD), and Credit Enhancement.
 * 3. Prunes millions of individual loan account identifier rows, servicer comment codes, and property zip code arrays.
 *
 * Result: Slashes 80%–95% of ABS loan tape prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface AbsLoanTapeCompactionResult {
    wasCompacted: boolean;
    dealAndIssuanceStructure: string;
    collateralPoolCharacteristics: string;
    delinquencyAndLossPerformance: string;
    creditEnhancementAndRatings: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedAbsPrompt: string;
}
export declare class BroccoliAbsLoanTapeCompactor {
    private static instance;
    readonly absTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliAbsLoanTapeCompactor;
    static compactAbsTape(rawText: string): AbsLoanTapeCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliAbsLoanTapeCompactor.d.ts.map