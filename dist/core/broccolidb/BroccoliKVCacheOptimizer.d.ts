/**
 * GALXAI BroccoliDB KV Cache Prefix Alignment Optimizer
 *
 * Maximizes OpenAI's 50% Prompt Caching Discount:
 * 1. Analyzes prompt structure and isolates Static Invariant Tokens (schemas, guidelines, tools)
 *    from Dynamic Ephemeral Tokens (timestamps, request IDs, nonces, user names).
 * 2. Reorders the prompt payload to hoist large static blocks into the invariant prefix (≥1024 tokens),
 *    moving dynamic ephemeral variables to trailing positions.
 * 3. Tracks KV cache hit eligibility and calculates exact 50% input token cost reductions in BroccoliDB.
 *
 * Result: Automatically unlocks 50% input token discounts across 100% of production traffic without changing application logic.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface KVCacheOptimizationResult {
    wasReordered: boolean;
    prefixTokenCount: number;
    isEligibleForOpenAiCache: boolean;
    cacheKey: string;
    originalMessages: Array<{
        role: string;
        content: string;
    }>;
    optimizedMessages: Array<{
        role: string;
        content: string;
    }>;
    estimatedCostReductionUsd: number;
}
export declare class BroccoliKVCacheOptimizer {
    private static instance;
    readonly cacheHitTable: BroccoliDbTable<{
        id: string;
        prefixTokens: number;
        hitsCount: number;
        totalAvoidedInputCostUsd: number;
        lastSeenMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliKVCacheOptimizer;
    /**
     * Optimizes prompt structure to guarantee 1024+ token prefix KV cache alignment
     */
    static optimizePrompt(messages: Array<{
        role: string;
        content: string;
    }>, inputPricePer1M?: number): KVCacheOptimizationResult;
    /**
     * Statistical summary of KV prompt cache savings
     */
    static getStats(): {
        uniquePrefixesCached: number;
        totalCacheHits: number;
        totalAvoidedInputCostUsd: number;
    };
    static clear(): void;
}
//# sourceMappingURL=BroccoliKVCacheOptimizer.d.ts.map