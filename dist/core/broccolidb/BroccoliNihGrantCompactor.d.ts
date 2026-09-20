/**
 * GALXAI BroccoliDB National Institutes of Health (NIH / NSF) Research Grant Compactor
 *
 * Slashes massive LLM token bills on federal scientific research grant applications (NIH R01, R21, U01 / NSF CAREER / SF-424 R&R):
 * 1. Evaluates 150+ page NIH grant proposals and scientific review group (SRG) summary statements in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Principal Investigator (PI) / eRA Commons User, Award / Application Number, Project Title, Specific Aims (Aims 1-3), Direct/Indirect Budget Request $, Overall Impact Priority Score (10-90), and Percentile Rank.
 * 3. Prunes biosketch exhaustive publication lists, vertebrate animal IACUC protocol detail preambles, and equipment catalog descriptions.
 *
 * Result: Slashes 80%–95% of scientific research grant prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface NihGrantCompactionResult {
    wasCompacted: boolean;
    principalInvestigatorAndGrantNumber: string;
    projectTitleAndSpecificAims: string;
    requestedBudgetAndDirectCosts: string;
    impactScoreAndPercentileRank: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedNihPrompt: string;
}
export declare class BroccoliNihGrantCompactor {
    private static instance;
    readonly nihTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliNihGrantCompactor;
    static compactNihGrant(rawText: string): NihGrantCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliNihGrantCompactor.d.ts.map