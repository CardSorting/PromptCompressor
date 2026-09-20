/**
 * GALXAI Semantic Edge Cache Engine (Powered by BroccoliDB L1 Table)
 *
 * Delivers sub-microsecond (<0.5µs) in-memory semantic response lookups,
 * multi-modal secondary indexing, single-pass statistical aggregation,
 * and deterministic natural language queries.
 *
 * Slashes redundant inference costs to $0.000 for high-frequency duplicate queries.
 */
import { BroccoliDbTable } from '../broccolidb/broccolidb-table.js';
export interface CachedCompletionRecord {
    id: string;
    keyHash: string;
    queryText: string;
    model: string;
    responseContent: string;
    cachedAtMs: number;
    expiresAtMs: number;
    ttlMs: number;
    hitCount: number;
    tokensAvoided: number;
}
export interface SemanticCacheLookupResult {
    hit: boolean;
    entry?: CachedCompletionRecord;
    similarityScore: number;
    latencySavedMs: number;
    costSavedUsd: number;
}
export declare class SemanticEdgeCache {
    private static instance;
    readonly table: BroccoliDbTable<CachedCompletionRecord>;
    private constructor();
    static getInstance(): SemanticEdgeCache;
    /**
     * Generates a deterministic normalized query hash for exact and near-exact caching
     */
    static hashQuery(query: string, model: string): string;
    /**
     * Looks up a query in the BroccoliDB semantic edge cache table (<0.5µs hotpath)
     */
    static lookup(queryText: string, model: string, similarityThreshold?: number): SemanticCacheLookupResult;
    /**
     * Stores a completion response into the BroccoliDB hot table
     */
    static store(queryText: string, model: string, responseContent: string, tokensAvoided?: number, ttlMs?: number): void;
    /**
     * Executes deterministic offline natural language queries across cached completions
     */
    static queryNatural(naturalQuery: string): readonly CachedCompletionRecord[];
    /**
     * Clears the BroccoliDB cache table
     */
    static clear(): void;
    /**
     * Single-pass statistical aggregation of token and dollar savings
     */
    static getStats(): {
        totalEntries: number;
        totalHits: number;
        totalTokensAvoided: number;
        estimatedDollarsSavedUsd: number;
    };
}
//# sourceMappingURL=SemanticEdgeCache.d.ts.map