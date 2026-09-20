/**
 * GALXAI BroccoliDB Autonomous Background Micro-Batch Coalescer
 *
 * Unlocks OpenAI 50% Batch API discounts on background jobs and asynchronous pipelines:
 * 1. Queues async background inference requests into BroccoliDB reactive memory (<0.01ms).
 * 2. When batch size reaches threshold (e.g. 50 items) or window expires (5 mins), automatically
 *    compiles and serializes the queue into an RFC-8259-compliant OpenAI Batch JSONL payload.
 * 3. Maps `custom_id` identifiers to internal entities for zero-overhead response reconciliation.
 *
 * Result: Slashes 50.0% of both input AND output token spend on all background AI tasks.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface BatchRequestItem {
    customId: string;
    model: string;
    messages: Array<{
        role: string;
        content: string;
    }>;
    maxTokens?: number;
    timestampMs: number;
}
export interface BatchCompilationResult {
    wasCompiled: boolean;
    totalRequestsInBatch: number;
    totalBatchInputTokens: number;
    estimatedStandardCostUsd: number;
    estimatedBatchCostUsd: number;
    dollarsSavedUsd: number;
    savingsPercentage: number;
    jsonlPayload: string;
}
export declare class BroccoliMicroBatcher {
    private static instance;
    readonly batchQueueTable: BroccoliDbTable<BatchRequestItem>;
    private static readonly BATCH_FLUSH_THRESHOLD;
    private constructor();
    static getInstance(): BroccoliMicroBatcher;
    /**
     * Enqueues an asynchronous request for 50% discounted Batch API processing
     */
    static enqueueRequest(customId: string, model: string, messages: Array<{
        role: string;
        content: string;
    }>, maxTokens?: number): {
        queueLength: number;
        readyForFlush: boolean;
    };
    /**
     * Compiles the queued requests into OpenAI Batch API JSONL format
     */
    static compileBatchPayload(inputPricePer1M?: number, // Sol standard price
    outputPricePer1M?: number): BatchCompilationResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliMicroBatcher.d.ts.map