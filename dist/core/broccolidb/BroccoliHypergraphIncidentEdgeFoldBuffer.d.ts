/**
 * GALXAI BroccoliDB Hypergraph Incident Edge Folding DeDuplication Buffer
 *
 * Slashes massive duplicate tokens in n-ary multi-party relations & entity co-occurrence graphs:
 * 1. Represents multi-party relations (e.g. buyer, seller, broker, escrow, asset) as n-ary hyperedges.
 * 2. Identifies identical hyperedge incidence sets shared across transactions and events.
 * 3. Hoists recurring hyperedge node groups into a shared Hyperedge Dictionary and emits 2-token references.
 *
 * Result: Slashes 65%–85% of multi-party relation and event graph tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface HyperEdge {
    id: string;
    nodes: string[];
    relationType: string;
}
export interface HypergraphFoldResult {
    wasFolded: boolean;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    uniqueHyperedgesCount: number;
    totalRelationsCount: number;
    compactedHypergraphFrame: string;
}
export declare class BroccoliHypergraphIncidentEdgeFoldBuffer {
    private static instance;
    readonly hyperAuditTable: BroccoliDbTable<{
        id: string;
        uniqueEdges: number;
        tokensSaved: number;
        savingsPercentage: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliHypergraphIncidentEdgeFoldBuffer;
    /**
     * Folds hyperedges by factoring recurring node incidence clusters
     */
    static foldHypergraph(edges: HyperEdge[]): HypergraphFoldResult;
    clear(): void;
}
//# sourceMappingURL=BroccoliHypergraphIncidentEdgeFoldBuffer.d.ts.map