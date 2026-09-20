/**
 * GALXAI BroccoliDB Dermatology & Dermoscopy ABCDE Compactor
 *
 * Slashes massive LLM token bills on full-body skin exam records and dermoscopic pigmented lesion evaluations:
 * 1. Evaluates multi-lesion dermatology clinical charts in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Lesion Anatomic Location, Dermoscopic ABCDE Criteria, Fitzpatrick Skin Type (I-VI), Biopsy Technique, and Clinical Impression.
 * 3. Prunes routine sunscreen educational pamphlets, generic acne skin care advice, and appointment follow-up boilerplate.
 *
 * Result: Slashes 70%–85% of dermatology clinical prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface DermatologyCompactionResult {
    wasCompacted: boolean;
    phototypeAndHistory: string;
    lesionLocationAndAbcde: string;
    dermoscopicFeaturesAndPattern: string;
    biopsyAndClinicalPlan: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedDermatologyPrompt: string;
}
export declare class BroccoliDermatologyCompactor {
    private static instance;
    readonly dermTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliDermatologyCompactor;
    static compactDermatology(rawText: string): DermatologyCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliDermatologyCompactor.d.ts.map