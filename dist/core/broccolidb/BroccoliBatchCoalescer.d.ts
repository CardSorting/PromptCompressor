/**
 * GALXAI BroccoliDB Batch Coalescer & Single-Flight Stampede Shield
 *
 * Delivers two massive structural spend reduction capabilities:
 * 1. Single-Flight Request Coalescing: When concurrent clients ask identical queries
 *    within a short time window, executes only 1 upstream inference call and fans out
 *    the result to all concurrent listeners in sub-microsecond memory (90%+ savings during spikes).
 * 2. OpenAI Batch API Micro-Coalescer: Buffers non-latency-critical background jobs
 *    in BroccoliDB hot tables and multiplexes them for OpenAI's 50% flat batch discount.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface QueuedBatchItem {
    id: string;
    department: string;
    costCenter: string;
    model: string;
    promptText: string;
    maxTokens: number;
    grossRetailUsd: number;
    discountedBatchUsd: number;
    avoidedDiscountUsd: number;
    enqueuedAtMs: number;
    status: 'QUEUED' | 'DISPATCHED' | 'COMPLETED';
}
export declare class BroccoliBatchCoalescer {
    private static instance;
    readonly batchTable: BroccoliDbTable<QueuedBatchItem>;
    private readonly inFlightPromises;
    private constructor();
    static getInstance(): BroccoliBatchCoalescer;
    /**
     * Single-Flight Request Coalescing (Stampede Shield)
     * Collapses concurrent identical requests into a single upstream invocation
     */
    static executeSingleFlight(queryText: string, model: string, fetcher: () => Promise<string>): Promise<{
        result: string;
        wasCoalesced: boolean;
    }>;
    /**
     * Enqueues a non-latency-critical background request to the 50% discount batch buffer
     */
    static enqueueBatch(params: {
        id: string;
        department: string;
        costCenter: string;
        model: string;
        promptText: string;
        maxTokens: number;
        retailCostUsd: number;
    }): QueuedBatchItem;
    /**
     * Flushes queued batch items into a single multiplexed OpenAI Batch payload
     */
    static flushBatch(): {
        flushedCount: number;
        totalGrossRetailUsd: number;
        totalDiscountedBatchUsd: number;
        totalSavingsUsd: number;
        batchItems: QueuedBatchItem[];
    };
    /**
     * Clears all queue tables
     */
    static clear(): void;
}
//# sourceMappingURL=BroccoliBatchCoalescer.d.ts.map