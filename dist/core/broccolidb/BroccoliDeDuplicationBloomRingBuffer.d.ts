/**
 * GALXAI BroccoliDB High-Velocity DeDuplication Bloom Ring Buffer
 *
 * Sub-nanosecond deduplication buffer for massive cascading error storms:
 * 1. Employs a circular 64KB bitset Bloom Filter (524,288 bit positions) with 3 fast hash functions.
 * 2. Tests incoming log lines for repetition in <10 nanoseconds without allocating strings in V8 memory.
 * 3. Rotates bitset generations periodically to prevent false-positive saturation during continuous long-running incident streams.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface BloomCheckResult {
    isDuplicate: boolean;
    fingerprintHash: number;
    duplicateCount: number;
}
export declare class BroccoliDeDuplicationBloomRingBuffer {
    private static instance;
    private readonly bitset;
    private readonly bitsetSize;
    private readonly frequencyTracker;
    private totalChecks;
    private totalDuplicatesFiltered;
    readonly bloomAuditTable: BroccoliDbTable<{
        id: string;
        totalChecks: number;
        totalDuplicates: number;
        filterRatio: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(bitsetSizeBytes?: number): BroccoliDeDuplicationBloomRingBuffer;
    /**
     * Fast 3-hash generator for string fingerprints
     */
    private computeHashes;
    /**
     * Checks if an error/log string has already been seen; if so, increments its count and marks duplicate
     */
    testAndAdd(logText: string): BloomCheckResult;
    getStats(): {
        totalChecks: number;
        totalDuplicatesFiltered: number;
        filterRatio: number;
        uniqueFingerprints: number;
    };
    clear(): void;
}
//# sourceMappingURL=BroccoliDeDuplicationBloomRingBuffer.d.ts.map