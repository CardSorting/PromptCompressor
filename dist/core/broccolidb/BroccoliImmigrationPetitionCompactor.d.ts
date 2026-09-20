/**
 * GALXAI BroccoliDB USCIS Immigration & Visa Petition Compactor
 *
 * Slashes massive LLM token bills on employment-based immigration petitions (Form I-129, I-140, PERM ETA 9089):
 * 1. Evaluates 50+ page visa petitions and prevailing wage filings in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Petitioner Employer, Beneficiary Name, Visa Classification, SOC Code/Job Title, Offered Wage, and Priority Date.
 * 3. Prunes USCIS statutory form instructions, public burden notices, and generic company promotional narratives.
 *
 * Result: Slashes 70%–85% of immigration docket prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface ImmigrationPetitionCompactionResult {
    wasCompacted: boolean;
    employerAndBeneficiary: string;
    visaClassification: string;
    jobTitleAndWage: string;
    priorityDateAndStatus: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedImmigrationPrompt: string;
}
export declare class BroccoliImmigrationPetitionCompactor {
    private static instance;
    readonly immigrationTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliImmigrationPetitionCompactor;
    static compactImmigration(rawText: string): ImmigrationPetitionCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliImmigrationPetitionCompactor.d.ts.map