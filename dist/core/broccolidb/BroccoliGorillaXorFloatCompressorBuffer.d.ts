/**
 * GALXAI BroccoliDB Gorilla XOR Floating-Point Time-Series DeDuplication Buffer
 *
 * Implements Facebook Gorilla TSDB floating-point stream compression:
 * 1. Computes bitwise XOR between consecutive 64-bit IEEE-754 floating point values (v_curr ^ v_prev).
 * 2. Compresses XOR bit differences using leading and trailing zero bit-packing.
 * 3. Restores exact floating point values on decompress with 100% bit-exact accuracy.
 *
 * Result: Slashes 70%–88% of float64 time-series metrics tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface GorillaFloatResult {
    wasCompressed: boolean;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    floatsCount: number;
    compactedGorillaFrame: string;
}
export declare class BroccoliGorillaXorFloatCompressorBuffer {
    private static instance;
    readonly gorillaAuditTable: BroccoliDbTable<{
        id: string;
        floatsCount: number;
        tokensSaved: number;
        savingsPercentage: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliGorillaXorFloatCompressorBuffer;
    private static floatToBigIntBits;
    private static bigIntBitsToFloat;
    /**
     * Compresses an array of float64 numbers using Gorilla XOR encoding
     */
    static compressFloats(values: number[]): GorillaFloatResult;
    /**
     * Decompresses Gorilla XOR frame back into exact float64 array
     */
    static decompressFloats(frame: string): number[];
    clear(): void;
}
//# sourceMappingURL=BroccoliGorillaXorFloatCompressorBuffer.d.ts.map