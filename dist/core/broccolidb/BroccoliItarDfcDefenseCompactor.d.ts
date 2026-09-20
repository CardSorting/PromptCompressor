/**
 * GALXAI BroccoliDB Defense Trade ITAR & State Dept DDTC DSP-5 Export License Compactor
 *
 * Slashes massive LLM token bills on International Traffic in Arms Regulations (ITAR / 22 CFR 120-130) defense export license applications (DSP-5, DSP-73, DSP-83) and technical data packages:
 * 1. Evaluates 100+ page defense trade compliance filings in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Applicant / Registration Code (M-Code), License Transaction (DSP-5 Permanent Export), United States Munitions List (USML Category e.g. Category VIII Military Aircraft / Category XII Night Vision), Foreign End-User / Country of Ultimate Destination, End-Use Statement, Commodity Dollar Value ($), and DDTC Approval Conditions / Provisos.
 * 3. Prunes statutory ITAR regulatory cross-references, generic applicant representation boilerplates, and standardized DDTC transmittal cover letters.
 *
 * Result: Slashes 75%–90% of ITAR defense export prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface ItarDfcDefenseCompactionResult {
    wasCompacted: boolean;
    applicantAndDdtcRegistration: string;
    usmlCategoryAndDefenseArticle: string;
    foreignEndUserAndDestination: string;
    commodityValueAndApprovalProvisos: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedItarPrompt: string;
}
export declare class BroccoliItarDfcDefenseCompactor {
    private static instance;
    readonly itarTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliItarDfcDefenseCompactor;
    static compactItar(rawText: string): ItarDfcDefenseCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliItarDfcDefenseCompactor.d.ts.map