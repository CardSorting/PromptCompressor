/**
 * GALXAI BroccoliDB State Bar Exam Moral Character & Fitness (NCBE / CalBar) Compactor
 *
 * Slashes massive LLM token bills on legal bar admissions moral character applications and NCBE character & fitness background files:
 * 1. Evaluates 100+ page bar applicant disclosure packages and character investigation files in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Bar Applicant Name / NCBE Number, Admitting Jurisdiction (State Bar of California / NY BLE), Disclosed Items (Academic Honor Code / Civil Litigation / Traffic / Arrests), Character References, and Committee Determination Status (Positive Moral Character Determination).
 * 3. Prunes 10-year residential address history lookup lists, past employer human resources phone directory trees, and generic state bar rules of admission text.
 *
 * Result: Slashes 75%–90% of state bar moral character prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface StateBarMoralCharacterCompactionResult {
    wasCompacted: boolean;
    applicantAndJurisdiction: string;
    disclosuresAndIncidentResolutions: string;
    employmentAndAcademicHistory: string;
    moralCharacterDetermination: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedBarPrompt: string;
}
export declare class BroccoliStateBarMoralCharacterCompactor {
    private static instance;
    readonly barTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliStateBarMoralCharacterCompactor;
    static compactMoralCharacter(rawText: string): StateBarMoralCharacterCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliStateBarMoralCharacterCompactor.d.ts.map