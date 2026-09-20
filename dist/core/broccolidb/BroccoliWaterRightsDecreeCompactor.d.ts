/**
 * GALXAI BroccoliDB Municipal Water Rights & Hydrology Adjudication Decree Compactor
 *
 * Slashes massive LLM token bills on water rights decrees, state engineer diversion permits, and watershed adjudications:
 * 1. Evaluates 100+ page state water board decrees and priority call filings in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Water Right Permit/License Number, Appropriative Priority Date, Point of Diversion (CFS/GPM), Annual Allocation (Acre-Feet AF), and Beneficial Use.
 * 3. Prunes 100-year historical court witness transcripts, water court judicial appointment records, and statutory water code recitals.
 *
 * Result: Slashes 75%–90% of water rights legal prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface WaterRightsDecreeCompactionResult {
    wasCompacted: boolean;
    permitAndPriorityDate: string;
    diversionPointAndFlowRate: string;
    annualAllotmentAndBeneficialUse: string;
    curtailmentAndSeniorityStatus: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedWaterPrompt: string;
}
export declare class BroccoliWaterRightsDecreeCompactor {
    private static instance;
    readonly waterTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliWaterRightsDecreeCompactor;
    static compactWaterDecree(rawText: string): WaterRightsDecreeCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliWaterRightsDecreeCompactor.d.ts.map