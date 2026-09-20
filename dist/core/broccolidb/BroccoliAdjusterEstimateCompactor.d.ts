/**
 * GALXAI BroccoliDB Property Insurance Xactimate Adjuster Estimate Compactor
 *
 * Slashes massive LLM token bills on property insurance damage appraisals and Xactimate line-item repair estimates:
 * 1. Evaluates 50+ page Xactimate property claims estimates in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Claim Number/Insured, Peril/Date of Loss, Replacement Cost Value (RCV $), Actual Cash Value (ACV $), Depreciation, and Deductible.
 * 3. Prunes micro-line items (e.g., individual 2x4 framing studs, nail boxes, paint gallons), overhead & profit calculation formulas, and price-list code glossaries.
 *
 * Result: Slashes 75%–90% of property insurance adjuster prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface AdjusterEstimateCompactionResult {
    wasCompacted: boolean;
    claimAndLossInformation: string;
    rcvAndDepreciationSettlement: string;
    roomByRoomDamageSummary: string;
    netClaimPayableAndDeductible: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedAdjusterPrompt: string;
}
export declare class BroccoliAdjusterEstimateCompactor {
    private static instance;
    readonly adjusterTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliAdjusterEstimateCompactor;
    static compactAdjusterEstimate(rawText: string): AdjusterEstimateCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliAdjusterEstimateCompactor.d.ts.map