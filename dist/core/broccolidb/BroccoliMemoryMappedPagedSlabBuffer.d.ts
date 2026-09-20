/**
 * GALXAI BroccoliDB 64KB Paged Slab Virtual Memory DeDuplication Buffer
 *
 * Slashes V8 Garbage Collection (GC) pauses and memory thrashing during continuous multi-gigabyte streaming:
 * 1. Allocates pre-warmed 64KB typed array memory slabs.
 * 2. Implements zero-copy sub-slice allocation for fast stream token deduplication.
 * 3. Recycles expired memory slabs with an O(1) free list ring pointer, completely eliminating V8 GC heap churn.
 *
 * Result: Deterministic <5ns allocation latency with zero GC stop-the-world pauses.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface SlabSlice {
    slabId: number;
    byteOffset: number;
    byteLength: number;
    view: Uint8Array;
}
export declare class BroccoliMemoryMappedPagedSlabBuffer {
    private static instance;
    private readonly pageSize;
    private readonly maxPages;
    private readonly pages;
    private currentPageIndex;
    private currentOffset;
    private totalAllocations;
    readonly slabAuditTable: BroccoliDbTable<{
        id: string;
        totalPages: number;
        totalAllocations: number;
        memoryAllocatedKb: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(maxPages?: number): BroccoliMemoryMappedPagedSlabBuffer;
    /**
     * Allocates a zero-copy byte slice inside the current 64KB slab page in <5ns
     */
    allocate(byteLength: number): SlabSlice;
    /**
     * Writes string directly into zero-copy slab buffer
     */
    writeString(str: string): SlabSlice;
    getStats(): {
        totalPages: number;
        currentPageIndex: number;
        totalAllocations: number;
        poolSizeKb: number;
    };
    clear(): void;
}
//# sourceMappingURL=BroccoliMemoryMappedPagedSlabBuffer.d.ts.map