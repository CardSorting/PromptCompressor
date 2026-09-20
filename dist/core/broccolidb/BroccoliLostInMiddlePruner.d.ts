/**
 * GALXAI BroccoliDB Lost-in-the-Middle Context Pruner & U-Shaped Attention Re-Ranker
 *
 * Slashes massive RAG context token bloat while maximizing LLM attention recall:
 * 1. Evaluates multi-chunk retrieval contexts in BroccoliDB (<0.05ms).
 * 2. Prunes low-density chunks (score < threshold) that dilute attention in the middle of prompt windows.
 * 3. Re-orders retained chunks into an optimal U-shaped attention distribution:
 *    - Rank #1 -> Beginning of Context (High Attention Primacy)
 *    - Rank #2 -> End of Context (High Attention Recency)
 *    - Remaining Ranks -> Middle
 *
 * Result: Slashes 40%–60% of context tokens while eliminating the "Lost-in-the-Middle" retrieval penalty.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface RetrievedChunk {
    id: string;
    relevanceScore: number;
    text: string;
}
export interface ContextOptimizationResult {
    wasOptimized: boolean;
    originalChunkCount: number;
    retainedChunkCount: number;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    orderedContextText: string;
}
export declare class BroccoliLostInMiddlePruner {
    private static instance;
    readonly prunerAuditTable: BroccoliDbTable<{
        id: string;
        originalTokens: number;
        compactedTokens: number;
        tokensSaved: number;
        costSavedUsd: number;
        timestampMs: number;
    }>;
    private static readonly RELEVANCE_CUTOFF_THRESHOLD;
    private constructor();
    static getInstance(): BroccoliLostInMiddlePruner;
    /**
     * Prunes low-confidence noise chunks and organizes retained chunks into a U-shaped attention curve
     */
    static optimizeContextChunks(chunks: RetrievedChunk[], maxChunksRetained?: number, inputPricePer1M?: number): ContextOptimizationResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliLostInMiddlePruner.d.ts.map