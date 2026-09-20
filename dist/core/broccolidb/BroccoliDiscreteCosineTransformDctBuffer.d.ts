/**
 * GALXAI BroccoliDB Type-II Discrete Cosine Transform (DCT) Spectral DeDuplication Buffer
 *
 * Slashes massive numeric token bloat on financial volatility curves, audio feature streams, and sensor waveforms:
 * 1. Computes 1D Type-II Discrete Cosine Transform (DCT-II) across numeric sequences.
 * 2. Concentrates 95%+ of signal energy into the top low-frequency spectral coefficients.
 * 3. Quantizes and sparsifies high-frequency spectral noise with near-zero energy impact.
 *
 * Result: Slashes 70%–88% of numeric telemetry and volatility curve tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface DctSpectralResult {
    wasCompacted: boolean;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    retainedCoefficientsCount: number;
    compactedDctFrame: string;
}
export declare class BroccoliDiscreteCosineTransformDctBuffer {
    private static instance;
    readonly dctAuditTable: BroccoliDbTable<{
        id: string;
        retainedCoeffs: number;
        tokensSaved: number;
        savingsPercentage: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliDiscreteCosineTransformDctBuffer;
    /**
     * Computes 1D DCT-II on signal array
     */
    static transformDct(signal: number[], retainCount?: number): DctSpectralResult;
    clear(): void;
}
//# sourceMappingURL=BroccoliDiscreteCosineTransformDctBuffer.d.ts.map