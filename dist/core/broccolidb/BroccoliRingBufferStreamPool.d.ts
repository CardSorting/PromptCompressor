/**
 * GALXAI BroccoliDB High-Throughput Ring Buffer Stream Pool
 *
 * Bounded, pre-allocated circular slot pool for same-thread stream ingestion:
 * 1. Pre-allocates fixed-capacity slot records (default 128 slots).
 * 2. Maintains circular head/tail pointers and explicit overwrite accounting.
 * 3. Returns snapshots so reused slots cannot mutate data held by consumers.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface StreamSlot {
    slotId: number;
    sequenceNumber: number;
    isOccupied: boolean;
    timestampMs: number;
    chunkSize: number;
    payload: string;
    anomalyScore: number;
    metadata?: Record<string, any>;
}
export declare class BroccoliRingBufferStreamPool {
    private static instance;
    private readonly slots;
    private readonly capacity;
    private headIndex;
    private tailIndex;
    private activeCount;
    private totalEnqueued;
    private totalDequeued;
    private totalOverwritten;
    readonly poolAuditTable: BroccoliDbTable<{
        id: string;
        totalEnqueued: number;
        totalDequeued: number;
        totalOverwritten: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(capacity?: number): BroccoliRingBufferStreamPool;
    /**
     * Creates an isolated pool. Prefer this for request- or stream-scoped ingestion;
     * getInstance() remains available for the process-wide telemetry pool.
     */
    static create(capacity?: number): BroccoliRingBufferStreamPool;
    /**
     * Enqueues a stream chunk into the circular ring buffer
     */
    push(payload: string, anomalyScore?: number, metadata?: Record<string, any>): StreamSlot;
    /**
     * Dequeues the oldest available chunk from the ring buffer
     */
    pop(): StreamSlot | null;
    /**
     * Drains all currently active slots in chronological sequence
     */
    drainAll(): StreamSlot[];
    /**
     * Returns current buffer utilization statistics
     */
    getStats(): {
        capacity: number;
        activeCount: number;
        totalEnqueued: number;
        totalDequeued: number;
        totalOverwritten: number;
        headIndex: number;
        tailIndex: number;
    };
    clear(): void;
    private snapshot;
}
//# sourceMappingURL=BroccoliRingBufferStreamPool.d.ts.map