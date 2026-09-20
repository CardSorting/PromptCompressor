/**
 * GALXAI BroccoliDB Pharmaceutical Certificate of Analysis (CoA) Compactor
 *
 * Slashes massive LLM token bills on cGMP pharmaceutical batch release certificates and analytical chemistry CoAs:
 * 1. Evaluates multi-page analytical chemistry lot release testing certificates in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Lot/Batch Number, Active Pharmaceutical Ingredient (API), Assay Purity %, Residual Solvents (USP <467>), and Dissolution Q.
 * 3. Prunes laboratory calibration certificate disclaimers, glassware cleaning SOPs, and repetitive chemical structure diagrams.
 *
 * Result: Slashes 70%–Nominal of pharmaceutical CoA prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface CertificateOfAnalysisCompactionResult {
    wasCompacted: boolean;
    productAndBatchNumber: string;
    assayPurityAndRelatedSubstances: string;
    dissolutionAndResidualSolvents: string;
    dispositionAndReleaseStatus: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedCoaPrompt: string;
}
export declare class BroccoliCertificateOfAnalysisCompactor {
    private static instance;
    readonly coaTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliCertificateOfAnalysisCompactor;
    static compactCoa(rawText: string): CertificateOfAnalysisCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliCertificateOfAnalysisCompactor.d.ts.map