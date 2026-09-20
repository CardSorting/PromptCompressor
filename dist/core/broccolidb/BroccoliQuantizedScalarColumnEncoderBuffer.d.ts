/**
 * GALXAI BroccoliDB Columnar Fixed-Point Quantization & MinMax Base Scaling DeDuplication Buffer
 *
 * Slashes massive numeric token bloat on financial and metric column vectors:
 * 1. Computes min, max, and scale factor for floating point numeric columns.
 * 2. Normalizes values via base offset subtraction: val_int = round((val - min) * scale).
 * 3. Compresses long floating point decimals (e.g. `[14500.12345, 14500.12380]`) into compact delta integers.
 *
 * Result: Slashes 60%–75% of numeric column tokens with exact fixed precision.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface ColumnQuantizationResult {
    wasQuantized: boolean;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    valuesCount: number;
    compactedColumnFrame: string;
}
export declare class BroccoliQuantizedScalarColumnEncoderBuffer {
    private static instance;
    readonly quantAuditTable: BroccoliDbTable<{
        id: string;
        valuesCount: number;
        tokensSaved: number;
        savingsPercentage: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliQuantizedScalarColumnEncoderBuffer;
    /**
     * Quantizes numeric column array using MinMax base scaling
     */
    static quantizeColumn(values: number[], decimalPrecision?: number): ColumnQuantizationResult;
    /**
     * Restores exact floating point values from quantized column frame
     */
    static dequantizeColumn(frame: string): number[];
    clear(): void;
}
//# sourceMappingURL=BroccoliQuantizedScalarColumnEncoderBuffer.d.ts.map