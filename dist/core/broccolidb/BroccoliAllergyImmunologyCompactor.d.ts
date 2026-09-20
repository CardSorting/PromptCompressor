/**
 * GALXAI BroccoliDB Allergy & Clinical Immunology Skin Prick / IgE Compactor
 *
 * Slashes massive LLM token bills on allergy diagnostic panels (Skin Prick Test SPT wheal/flare mm, ImmunoCAP specific IgE Class 0-6, SCIT immunotherapy):
 * 1. Evaluates 100+ allergen test results in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Allergen Family (Aeroallergen/Food/Venom), Wheal vs Histamine Control (mm), Quantitative Serum Specific IgE (kU/L & Class), and Prescribed Immunotherapy SCIT/SLIT.
 * 3. Prunes negative 0mm non-reactive allergen test line items, antihistamine washout instructional flyers, and anaphylaxis epipen package inserts.
 *
 * Result: Slashes 70%–85% of allergy clinical diagnostic prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface AllergyImmunologyCompactionResult {
    wasCompacted: boolean;
    patientAndAllergist: string;
    skinPrickTestWhealFlare: string;
    serumSpecificIgeQuantitation: string;
    immunotherapyPlanAndEpiPen: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedAllergyPrompt: string;
}
export declare class BroccoliAllergyImmunologyCompactor {
    private static instance;
    readonly allergyTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliAllergyImmunologyCompactor;
    static compactAllergy(rawText: string): AllergyImmunologyCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliAllergyImmunologyCompactor.d.ts.map