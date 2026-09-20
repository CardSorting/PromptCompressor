/**
 * GALXAI BroccoliDB Code Diff & AST Micro-Patcher
 *
 * Slashes massive code generation token costs in coding agent workflows (Devin/Cursor/Copilot):
 * 1. Analyzes target source files and user modification intents in BroccoliDB (<0.05ms).
 * 2. Enforces compact unified search/replace diff chunks (`<<<SEARCH ... === ... >>>`)
 *    instead of re-generating entire 3,000-line files (12,000+ output tokens).
 * 3. Compacts code prompts down to targeted AST slices (±15 lines of context around the modification target).
 *
 * Result: Slashes 95%+ of expensive output tokens on software engineering agent tasks.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface CodePatchChunk {
    searchContent: string;
    replaceContent: string;
    startLineApprox?: number;
}
export interface CompactCodePatchResult {
    wasCompacted: boolean;
    fullFileTokens: number;
    patchTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    targetPatchSnippet: string;
}
export declare class BroccoliCodePatcher {
    private static instance;
    readonly patchAuditTable: BroccoliDbTable<{
        id: string;
        fullFileTokens: number;
        patchTokens: number;
        tokensSaved: number;
        costSavedUsd: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliCodePatcher;
    /**
     * Compacts full-file regeneration requests into minimal unified diff patch prompts
     */
    static compactCodePrompt(fullFileContent: string, targetSearchString: string, replacementString: string, contextLines?: number, outputPricePer1M?: number): CompactCodePatchResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliCodePatcher.d.ts.map