/**
 * GALXAI BroccoliDB Knowledge Graph & Entity Adjacency Matrix DeDuplication Buffer
 *
 * Slashes massive duplicate tokens in Knowledge Graph (KG) dumps, RDF triples, and entity links:
 * 1. Collects repetitive subject-predicate triples (`(EntityA, HAS_PERM, Action1), (EntityA, HAS_PERM, Action2)`).
 * 2. Consolidates multi-edge links into an Adjacency Matrix (`EntityA -> HAS_PERM: [Action1, Action2, Action3]`).
 * 3. Preserves graph connectivity and relationship semantics with 100% graph fidelity.
 *
 * Result: Slashes 60%–80% of knowledge graph and entity relationship tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface GraphEdge {
    subject: string;
    predicate: string;
    object: string;
}
export interface GraphAdjacencyDedupResult {
    wasDeduplicated: boolean;
    totalTriples: number;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    distinctSubjectsCount: number;
    compactedGraphText: string;
}
export declare class BroccoliGraphEdgeAdjacencyDedupBuffer {
    private static instance;
    readonly graphAuditTable: BroccoliDbTable<{
        id: string;
        totalTriples: number;
        tokensSaved: number;
        savingsPercentage: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliGraphEdgeAdjacencyDedupBuffer;
    /**
     * Deduplicates RDF/Graph triples into an adjacency map
     */
    static deduplicateGraphEdges(triples: GraphEdge[]): GraphAdjacencyDedupResult;
    clear(): void;
}
//# sourceMappingURL=BroccoliGraphEdgeAdjacencyDedupBuffer.d.ts.map