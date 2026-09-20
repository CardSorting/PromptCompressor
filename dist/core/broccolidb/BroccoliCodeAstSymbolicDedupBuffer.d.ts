/**
 * GALXAI BroccoliDB Code & AST Symbolic DeDuplication Buffer
 *
 * Slashes massive duplicate tokens across multi-file codebases and multi-agent coding prompts:
 * 1. Hoists and consolidates identical package import statements (`import ... from '...'`) across multiple files into a single unified header.
 * 2. Prunes duplicate copyright/license preambles (`/* Copyright (c) ... *\/`).
 * 3. Deduplicates shared utility function declarations and type interfaces across code prompts.
 *
 * Result: Slashes 50%–75% of redundant imports, license boilerplate, and utility repetitions.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface CodeDedupResult {
    wasDeduplicated: boolean;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    duplicateImportsHoisted: number;
    licenseHeadersPruned: number;
    compactedCode: string;
}
export declare class BroccoliCodeAstSymbolicDedupBuffer {
    private static instance;
    readonly codeAuditTable: BroccoliDbTable<{
        id: string;
        importsHoisted: number;
        tokensSaved: number;
        savingsPercentage: number;
        timestampMs: number;
    }>;
    private static readonly LICENSE_HEADER_REGEX;
    private static readonly IMPORT_STATEMENT_REGEX;
    private constructor();
    static getInstance(): BroccoliCodeAstSymbolicDedupBuffer;
    /**
     * Deduplicates code by consolidating imports and stripping repeated license headers
     */
    static deduplicateCode(codeText: string): CodeDedupResult;
    clear(): void;
}
//# sourceMappingURL=BroccoliCodeAstSymbolicDedupBuffer.d.ts.map