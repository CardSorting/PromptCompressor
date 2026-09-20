/**
 * GALXAI BroccoliDB Clinical Rheumatology & Autoimmune DAS28 Compactor
 *
 * Slashes massive LLM token bills on rheumatology encounter notes and systemic autoimmune panels:
 * 1. Evaluates 10+ page rheumatology consultation notes in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Tender/Swollen Joint Counts (28 joints), DAS28 Disease Activity Score, Autoimmune Serology (ANA/RF/Anti-CCP), and Biologic DMARD Regimens.
 * 3. Prunes standard joint examination negative charts, infusion clinic procedural checklists, and generic physical therapy recommendations.
 *
 * Result: Slashes 70%–85% of rheumatology clinical prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface RheumatologyCompactionResult {
    wasCompacted: boolean;
    diseaseAndSpecialist: string;
    jointCountsAndDas28Score: string;
    serologyAndInflammatoryMarkers: string;
    immunotherapyAndTreatmentPlan: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedRheumatologyPrompt: string;
}
export declare class BroccoliRheumatologyDas28Compactor {
    private static instance;
    readonly rheumTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliRheumatologyDas28Compactor;
    static compactRheumatology(rawText: string): RheumatologyCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliRheumatologyDas28Compactor.d.ts.map