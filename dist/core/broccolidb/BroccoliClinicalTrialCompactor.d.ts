/**
 * GALXAI BroccoliDB Clinical Trial Protocol & Adverse Event (MedDRA) Compactor
 *
 * Slashes massive LLM token bills on pharma R&D, clinical trial matching, and pharmacovigilance swarms:
 * 1. Evaluates 50–100 page FDA trial protocols and MedDRA toxicity tables in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Phase/Dosing, Key Eligibility Criteria, Primary Endpoints, and Grade 3/4 SAEs.
 * 3. Prunes clinical site address directories, investigator biographies, and statistical power formulas.
 *
 * Result: Slashes 75%–90% of clinical trial and pharmacovigilance prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface ClinicalTrialCompactionResult {
    wasCompacted: boolean;
    trialIdAndPhase: string;
    eligibilitySummary: string;
    primaryEndpoints: string;
    adverseEventsGrade34: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedTrialPrompt: string;
}
export declare class BroccoliClinicalTrialCompactor {
    private static instance;
    readonly trialAuditTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliClinicalTrialCompactor;
    /**
     * Compacts raw clinical trial protocol or pharmacovigilance report
     */
    static compactClinicalTrial(rawTrialText: string): ClinicalTrialCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliClinicalTrialCompactor.d.ts.map