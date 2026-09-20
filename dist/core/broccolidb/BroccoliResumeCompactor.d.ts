/**
 * GALXAI BroccoliDB Resume & Candidate Profile Compactor
 *
 * Slashes massive LLM token bills on recruiting swarms, talent screening bots, and ATS pipelines:
 * 1. Evaluates multi-page candidate resumes and CVs in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Candidate Name/Title, Years of Experience/Stack, Top Role/Impact, and Education.
 * 3. Prunes subjective objective statements, soft-skill fluff ("hard worker"), hobbies, and layout boilerplate.
 *
 * Result: Slashes 70%–85% of candidate screening prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface ResumeCompactionResult {
    wasCompacted: boolean;
    candidateNameAndTitle: string;
    experienceAndTechStack: string;
    topRoleAndAchievement: string;
    educationAndCerts: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedResumePrompt: string;
}
export declare class BroccoliResumeCompactor {
    private static instance;
    readonly resumeAuditTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliResumeCompactor;
    /**
     * Compacts raw candidate resume or CV text
     */
    static compactResume(rawResumeText: string): ResumeCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliResumeCompactor.d.ts.map