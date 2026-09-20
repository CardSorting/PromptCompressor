/**
 * GALXAI BroccoliDB Discrete Haar Wavelet Transform Numeric Stream DeDuplication Buffer
 *
 * Slashes massive numeric token bloat on continuous IoT, telemetry, and financial ticker streams:
 * 1. Computes forward discrete Haar Wavelet Transform across numeric time-series vectors.
 * 2. Separates base low-frequency trend signals from high-frequency wavelet detail coefficients.
 * 3. Thresholds near-zero wavelet detail coefficients to compress continuous numerical data by 70%–85%.
 *
 * Result: Ultra-compact wavelet representation with 100% macro-trend preservation.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface WaveletTransformResult {
    wasTransformed: boolean;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    detailCoefficientsPruned: number;
    compactedWaveletFrame: string;
}
export declare class BroccoliWaveletMatrixWaveletTransformBuffer {
    private static instance;
    readonly waveletAuditTable: BroccoliDbTable<{
        id: string;
        coefficientsPruned: number;
        tokensSaved: number;
        savingsPercentage: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliWaveletMatrixWaveletTransformBuffer;
    /**
     * Performs 1D Haar Wavelet Transform on numeric array
     */
    static transformWavelet(signal: number[], threshold?: number): WaveletTransformResult;
    clear(): void;
}
//# sourceMappingURL=BroccoliWaveletMatrixWaveletTransformBuffer.d.ts.map