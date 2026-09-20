/**
 * GALXAI BroccoliDB Zero-Allocation Byte Stream Buffer
 *
 * Reusable low-level TypedArray byte buffer for bounded stream slices:
 * 1. Pre-allocates a reusable Uint8Array slab and uses TextEncoder.encodeInto for UTF-8 writes.
 * 2. Scans line delimiters (ASCII 10 `\n` and 13 `\r`) directly in native memory.
 * 3. Extracts byte slices and computes rolling FNV-1a checksums over raw bytes.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface ByteSlice {
    offset: number;
    length: number;
    hash: number;
    hasNewline: boolean;
}
export declare class BroccoliZeroAllocationByteStreamBuffer {
    private static instance;
    private readonly bufferSlab;
    private readonly slabCapacity;
    private readonly encoder;
    private readonly decoder;
    private writeOffset;
    private totalBytesProcessed;
    readonly byteBufferTable: BroccoliDbTable<{
        id: string;
        totalBytes: number;
        writeOffset: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(capacityBytes?: number): BroccoliZeroAllocationByteStreamBuffer;
    /** Creates an isolated slab with an explicit capacity. */
    static create(capacityBytes?: number): BroccoliZeroAllocationByteStreamBuffer;
    /**
     * Appends text bytes into the reusable memory slab without allocating intermediate objects
     */
    appendString(str: string): {
        offset: number;
        bytesWritten: number;
    };
    /** Appends bytes without text transcoding or intermediate payload allocation. */
    appendBytes(bytes: Uint8Array): {
        offset: number;
        bytesWritten: number;
    };
    /**
     * Scans line boundaries and returns structured byte slices directly from memory
     */
    scanLines(offset: number, length: number): ByteSlice[];
    /**
     * Converts a memory slice back to string on demand
     */
    decodeSlice(offset: number, length: number): string;
    getStats(): {
        slabCapacity: number;
        writeOffset: number;
        totalBytesProcessed: number;
    };
    clear(): void;
    private assertValidSlice;
}
//# sourceMappingURL=BroccoliZeroAllocationByteStreamBuffer.d.ts.map