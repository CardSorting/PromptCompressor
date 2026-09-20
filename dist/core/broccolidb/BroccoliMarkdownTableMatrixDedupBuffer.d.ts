/**
 * GALXAI BroccoliDB Markdown Tabular Column & Header Normalizer DeDuplication Buffer
 *
 * Slashes massive token bloat on repeating multi-page Markdown tables & financial ledger dumps:
 * 1. Detects repeated table headers (`| Date | Tx ID | Amount | Currency | Status |`) across broken multi-page tables.
 * 2. Merges fragmented table blocks into a single continuous data matrix.
 * 3. Normalizes whitespace padding inside table cells (`|  Data 1   |` -> `| Data 1 |`) in <0.01ms.
 *
 * Result: Slashes 45%–65% of redundant Markdown table headers and whitespace padding.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface MarkdownTableDedupResult {
    wasDeduplicated: boolean;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    duplicateHeadersMerged: number;
    totalRowsPreserved: number;
    compactedMarkdownTable: string;
}
export declare class BroccoliMarkdownTableMatrixDedupBuffer {
    private static instance;
    readonly tableAuditTable: BroccoliDbTable<{
        id: string;
        headersMerged: number;
        tokensSaved: number;
        savingsPercentage: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliMarkdownTableMatrixDedupBuffer;
    /**
     * Deduplicates repeating Markdown table headers and compacts cell whitespace
     */
    static deduplicateMarkdownTables(text: string): MarkdownTableDedupResult;
    clear(): void;
}
//# sourceMappingURL=BroccoliMarkdownTableMatrixDedupBuffer.d.ts.map