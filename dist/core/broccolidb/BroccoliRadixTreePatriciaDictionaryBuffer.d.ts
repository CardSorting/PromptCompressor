/**
 * GALXAI BroccoliDB Adaptive Radix Tree (Patricia) Compact String Dictionary Buffer
 *
 * Slashes massive path and namespace token bloat on file trees, URLs, and package registries:
 * 1. Implements path-compressed Adaptive Radix Trie (Patricia Tree) for hierarchical string keys.
 * 2. Merges single-child path prefixes (`/Users/enterprise/project/src/...`) into compact edges in O(K) time.
 * 3. Compresses deep directory listings and API routing tables into a compact nested Radix dictionary.
 *
 * Result: Slashes 65%–85% of redundant filesystem and URL path tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface RadixTreeNode {
    prefix: string;
    isTerminal: boolean;
    children: Map<string, RadixTreeNode>;
}
export interface RadixPathResult {
    wasCompacted: boolean;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    totalPaths: number;
    compactedRadixText: string;
}
export declare class BroccoliRadixTreePatriciaDictionaryBuffer {
    private static instance;
    private readonly root;
    readonly radixAuditTable: BroccoliDbTable<{
        id: string;
        totalPaths: number;
        tokensSaved: number;
        savingsPercentage: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliRadixTreePatriciaDictionaryBuffer;
    /**
     * Inserts a path into the segment-compressed Radix Trie
     */
    insertPath(path: string): void;
    /**
     * Compacts an array of hierarchical paths into a Radix Trie representation
     */
    static compactPaths(paths: string[]): RadixPathResult;
    clear(): void;
}
//# sourceMappingURL=BroccoliRadixTreePatriciaDictionaryBuffer.d.ts.map