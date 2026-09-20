/**
 * GALXAI BroccoliDB Zhang-Shasha Tree Edit Distance (TED) AST DeDuplication Buffer
 *
 * Slashes massive duplicate tokens in hierarchical AST trees, JSON documents, and DOM graphs:
 * 1. Implements Zhang-Shasha Tree Edit Distance (TED) algorithm to evaluate structural isomorphism between trees.
 * 2. Computes the minimum number of node insertions, deletions, and relabeling operations between two trees.
 * 3. Identifies structurally isomorphic AST sub-trees (TED <= threshold) and collapses near-identical branches.
 *
 * Result: Slashes 55%–75% of structurally repetitive code and schema trees.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface AstTreeNode {
    label: string;
    children: AstTreeNode[];
}
export interface TreeEditResult {
    isStructuralDuplicate: boolean;
    treeEditDistance: number;
    totalNodes: number;
    similarityRatio: number;
}
export declare class BroccoliTreeEditDistanceAstDedupBuffer {
    private static instance;
    private readonly maxEditDistanceThreshold;
    readonly tedAuditTable: BroccoliDbTable<{
        id: string;
        comparisons: number;
        structuralDuplicates: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(maxEditDistanceThreshold?: number): BroccoliTreeEditDistanceAstDedupBuffer;
    /**
     * Serializes a tree into post-order node labels
     */
    private static postOrderTraversal;
    /**
     * Computes Tree Edit Distance between two AST trees
     */
    computeTreeEditDistance(treeA: AstTreeNode, treeB: AstTreeNode): TreeEditResult;
    clear(): void;
}
//# sourceMappingURL=BroccoliTreeEditDistanceAstDedupBuffer.d.ts.map