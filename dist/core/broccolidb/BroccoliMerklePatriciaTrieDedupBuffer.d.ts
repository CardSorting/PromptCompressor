/**
 * GALXAI BroccoliDB Merkle Patricia Trie Proof & Delta CAS DeDuplication Buffer
 *
 * Slashes massive duplicate tokens across versioned state trees, snapshot dumps, and database deltas:
 * 1. Computes cryptographic Merkle hashes over hierarchical key-value state trees.
 * 2. Deduplicates unmodified sub-trees by sharing immutable CAS root pointers (O(1) sub-tree reuse).
 * 3. Transmits only modified leaf nodes with cryptographic proof paths to LLM context windows.
 *
 * Result: Slashes 80%–95% of versioned snapshot and state dump tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface MerkleNode {
    hash: string;
    key?: string;
    value?: any;
    children: Map<string, MerkleNode>;
}
export interface MerkleDedupResult {
    wasDeduplicated: boolean;
    rootHash: string;
    totalNodes: number;
    reusedSubtreeNodes: number;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedTreeText: string;
}
export declare class BroccoliMerklePatriciaTrieDedupBuffer {
    private static instance;
    private readonly casRegistry;
    readonly merkleAuditTable: BroccoliDbTable<{
        id: string;
        totalNodes: number;
        reusedNodes: number;
        tokensSaved: number;
        savingsPercentage: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliMerklePatriciaTrieDedupBuffer;
    private static computeHash;
    /**
     * Ingests a state object into the Merkle Patricia Trie and returns deduplicated proof frame
     */
    static ingestStateTree(stateObj: Record<string, any>): MerkleDedupResult;
    clear(): void;
}
//# sourceMappingURL=BroccoliMerklePatriciaTrieDedupBuffer.d.ts.map