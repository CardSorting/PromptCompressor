/**
 * GALXAI BroccoliDB Construction & Architecture Submittal / RFI (AEC) Compactor
 *
 * Slashes massive LLM token bills on commercial architecture, engineering & construction (AEC) submittal packages (Procore, Autodesk Construction Cloud, Newforma):
 * 1. Evaluates 100+ page contractor product data submittals and Requests for Information (RFI) in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Submittal/RFI Number, CSI MasterFormat Division (e.g. 03 30 00 Cast-in-Place Concrete / 23 00 00 HVAC), Contractor / Subcontractor, Architect/Engineer Stamp (Approved / Approved as Noted / Revise & Resubmit), and Variance Schedule.
 * 3. Prunes manufacturer product catalog marketing fluff, SDS chemical hazards, and boilerplate AIA contract general condition pages.
 *
 * Result: Slashes 75%–90% of AEC construction submittal prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface AecSubmittalCompactionResult {
    wasCompacted: boolean;
    submittalAndCsiDivision: string;
    contractorAndSubcontractor: string;
    productDataAndDeviations: string;
    architectEngineerDisposition: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedAecPrompt: string;
}
export declare class BroccoliAecSubmittalCompactor {
    private static instance;
    private static readonly SUB_REGEX;
    private static readonly CSI_REGEX;
    private static readonly GC_REGEX;
    private static readonly SUBC_REGEX;
    private static readonly STAMP_REGEX;
    readonly aecTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliAecSubmittalCompactor;
    static compactAec(rawText: string): AecSubmittalCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliAecSubmittalCompactor.d.ts.map