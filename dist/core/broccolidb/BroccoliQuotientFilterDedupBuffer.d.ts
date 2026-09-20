/**
 * GALXAI BroccoliDB Quotient Filter Deduplication Buffer
 *
 * Cache-friendly, compact quotient filter buffer for sub-nanosecond stream deduplication:
 * 1. Partitions a 64-bit hash into a q-bit quotient (bucket index) and an r-bit remainder (stored fingerprint).
 * 2. Uses 3 metadata status bits (is_occupied, is_continuation, is_shifted) to resolve collisions using Robin Hood linear displacement.
 * 3. Operates entirely in a contiguous typed array buffer for maximum CPU cache-line locality (zero pointer chasing).
 * 4. Enables linear O(N) filter merging without hash re-computation.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export declare class BroccoliQuotientFilterDedupBuffer {
    private static instance;
    private readonly qBits;
    private readonly numSlots;
    private readonly remainders;
    private readonly occupiedBits;
    private readonly continuationBits;
    private readonly shiftedBits;
    private totalEntries;
    private totalLookups;
    private totalDuplicates;
    readonly qfAuditTable: BroccoliDbTable<{
        id: string;
        totalEntries: number;
        totalLookups: number;
        duplicates: number;
        loadFactor: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(qBits?: number): BroccoliQuotientFilterDedupBuffer;
    private hash64;
    private isOccupied;
    private setOccupied;
    /**
     * Tests if string exists in Quotient Filter (<12ns lookup)
     */
    contains(str: string): boolean;
    /**
     * Inserts a string into the quotient filter
     */
    insert(str: string): boolean;
    getStats(): {
        totalSlots: number;
        totalEntries: number;
        totalLookups: number;
        totalDuplicates: number;
        loadFactor: number;
        memoryKb: number;
    };
    clear(): void;
}
//# sourceMappingURL=BroccoliQuotientFilterDedupBuffer.d.ts.map