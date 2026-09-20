/**
 * GALXAI BroccoliDB Temporal Microsecond Timestamp Quantization DeDuplication Buffer
 *
 * Slashes massive numeric token bloat on high-frequency trading (HFT) and eBPF kernel trace streams:
 * 1. Collects repetitive absolute microsecond timestamps (e.g. `1724832000.123450`, `1724832000.123455`, `1724832000.123460`).
 * 2. Establishes a common second-level epoch base (`1724832000.000000`).
 * 3. Quantizes sub-second offsets into compact microsecond deltas (`+123450µs`, `+123455µs`).
 *
 * Result: Slashes 75%–90% of microsecond timestamp tokens in high-frequency event dumps.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface TimestampQuantizationResult {
    wasQuantized: boolean;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    timestampsCount: number;
    compactedQuantizedFrame: string;
}
export declare class BroccoliTemporalSlidingEventQuantizerBuffer {
    private static instance;
    readonly timeAuditTable: BroccoliDbTable<{
        id: string;
        timestampsCount: number;
        tokensSaved: number;
        savingsPercentage: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliTemporalSlidingEventQuantizerBuffer;
    /**
     * Quantizes an array of absolute microsecond timestamps
     */
    static quantizeTimestamps(timestamps: number[]): TimestampQuantizationResult;
    /**
     * Restores absolute microsecond timestamps from quantized frame
     */
    static dequantizeTimestamps(quantizedFrame: string): number[];
    clear(): void;
}
//# sourceMappingURL=BroccoliTemporalSlidingEventQuantizerBuffer.d.ts.map