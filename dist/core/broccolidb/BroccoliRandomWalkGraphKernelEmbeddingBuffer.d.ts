/**
 * GALXAI BroccoliDB K-Step Random Walk Graph Kernel DeDuplication Buffer
 *
 * Computes topological graph embeddings to deduplicate distributed trace & microservice call graphs:
 * 1. Simulates K-step random walks across directed call graph vertices.
 * 2. Generates a fixed-dimensional random walk sequence distribution vector (graph kernel embedding).
 * 3. Measures inner-product kernel similarity in O(K * |E|) time to deduplicate execution topologies.
 *
 * Result: Slashes 60%–80% of distributed trace topology tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface TraceGraph {
    nodes: string[];
    edges: Array<[string, string]>;
}
export interface GraphKernelResult {
    isDuplicate: boolean;
    kernelSimilarity: number;
    matchedGraphId?: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedGraphFrame: string;
}
export declare class BroccoliRandomWalkGraphKernelEmbeddingBuffer {
    private static instance;
    private readonly indexedGraphs;
    private readonly threshold;
    readonly kernelAuditTable: BroccoliDbTable<{
        id: string;
        graphsIndexed: number;
        tokensSaved: number;
        savingsPercentage: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(threshold?: number): BroccoliRandomWalkGraphKernelEmbeddingBuffer;
    /**
     * Computes a 16-dimensional random walk graph kernel embedding
     */
    computeEmbedding(graph: TraceGraph, walkSteps?: number): Float32Array;
    /**
     * Ingests graph, computes kernel similarity, and deduplicates identical topologies
     */
    ingestGraph(graphId: string, graph: TraceGraph): GraphKernelResult;
    clear(): void;
}
//# sourceMappingURL=BroccoliRandomWalkGraphKernelEmbeddingBuffer.d.ts.map