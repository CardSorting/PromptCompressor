/**
 * GALXAI BroccoliDB Cascading Memory-to-Disk Spillover Buffer
 *
 * Bounds partition-payload memory during large incident ingestion:
 * 1. Tracks UTF-8 payload bytes against a configurable 64MB default watermark.
 * 2. Evicts lower-salience payloads to mode-0600 files in a private temporary directory.
 * 3. Hydrates spilled payloads on demand and releases accounting/files on overwrite or clear.
 * Metadata and caller-owned source strings remain ordinary heap allocations, so this class
 * must not be described as a blanket OOM guarantee for the entire process.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface SpilledPartition {
    partitionId: string;
    sequence: number;
    byteSize: number;
    isSpilledToTransientStore: boolean;
    salienceWeight: number;
    inMemoryPayload?: string;
    transientStorageKey?: string;
    timestampMs: number;
}
export interface SpilloverBufferOptions {
    memoryThresholdBytes?: number;
    spillDirectory?: string;
}
export declare class BroccoliCascadingSpilloverBuffer {
    private static instance;
    private readonly partitions;
    private readonly memoryThresholdBytes;
    private readonly spillDirectory;
    private currentInMemoryBytes;
    private currentSpilledBytes;
    readonly spillAuditTable: BroccoliDbTable<{
        id: string;
        totalPartitions: number;
        spilledCount: number;
        currentMemoryMb: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(memoryThresholdBytes?: number): BroccoliCascadingSpilloverBuffer;
    /** Creates an isolated spillover buffer with its own bounded state. */
    static create(options?: SpilloverBufferOptions | number): BroccoliCascadingSpilloverBuffer;
    /**
     * Stores a partition with automatic RAM headroom protection & spillover
     */
    storePartition(partitionId: string, sequence: number, payload: string, salienceWeight: number): SpilledPartition;
    /**
     * Retrieves partition payload with transparent on-demand hydration
     */
    getPartitionPayload(partitionId: string): string | null;
    /**
     * Returns stats on memory and spillover distribution
     */
    getStats(): {
        totalPartitions: number;
        inMemoryPartitions: number;
        spilledPartitions: number;
        inMemoryMb: number;
        thresholdMb: number;
        inMemoryBytes: number;
        spilledBytes: number;
        spillDirectory: string;
    };
    deletePartition(partitionId: string): boolean;
    clear(): void;
    private evictToFit;
    private spillInMemoryPartition;
    private writeSpillFile;
    private deleteSpillFile;
}
//# sourceMappingURL=BroccoliCascadingSpilloverBuffer.d.ts.map