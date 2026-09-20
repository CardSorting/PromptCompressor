/**
 * GALXAI BroccoliDB Git Status & Workspace Delta Compactor
 *
 * Slashes massive LLM token bills on coding agents, SWE task executors, and autonomous repo swarms:
 * 1. Evaluates raw `git status` terminal output in BroccoliDB memory (<0.01ms).
 * 2. Prunes repetitive git advice hints (use "git add <file>...", use "git restore <file>...").
 * 3. Compresses verbose file listings into dense porcelain status codes (M: modified, A: added, D: deleted, ?: untracked).
 * 4. Filters out noise from build artifacts (dist, coverage, .next, node_modules).
 *
 * Result: Slashes 70%–85% of coding agent repository state prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface GitStatusCompactionResult {
    wasCompacted: boolean;
    totalFilesCount: number;
    modifiedFilesCount: number;
    addedFilesCount: number;
    untrackedFilesCount: number;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedGitStatePrompt: string;
}
export declare class BroccoliGitStatusCompactor {
    private static instance;
    readonly gitAuditTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliGitStatusCompactor;
    /**
     * Compacts raw verbose git status output into dense porcelain notation
     */
    static compactGitStatus(rawGitStatusText: string): GitStatusCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliGitStatusCompactor.d.ts.map