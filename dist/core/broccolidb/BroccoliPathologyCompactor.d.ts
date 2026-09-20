/**
 * GALXAI BroccoliDB Surgical Pathology & Biopsy Staging Compactor
 *
 * Slashes massive LLM token bills on surgical pathology, oncology biopsy, and histology reports:
 * 1. Evaluates 10+ page surgical pathology reports in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Patient ID/Specimen, Final Histologic Diagnosis, AJCC TNM Pathologic Stage, Margin Status (mm), and Biomarker IHC/FISH.
 * 3. Prunes gross physical specimen dimensions, jar labeling descriptions, and laboratory equipment QA boilerplate.
 *
 * Result: Slashes 65%–80% of pathology prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface PathologyCompactionResult {
    wasCompacted: boolean;
    specimenAndPatient: string;
    histologicDiagnosis: string;
    tnmStagingAndMargins: string;
    biomarkersIhcFish: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedPathologyPrompt: string;
}
export declare class BroccoliPathologyCompactor {
    private static instance;
    readonly pathologyTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliPathologyCompactor;
    static compactPathology(rawText: string): PathologyCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliPathologyCompactor.d.ts.map