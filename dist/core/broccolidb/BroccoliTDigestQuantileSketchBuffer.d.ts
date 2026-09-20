/**
 * GALXAI BroccoliDB T-Digest Streaming Quantile Centroid Sketch DeDuplication Buffer
 *
 * Compresses millions of latency, telemetry, and financial distribution points into bounded centroids:
 * 1. Merges continuous data points into a bounded array of weighted centroids (mean, count).
 * 2. Computes arbitrary percentiles (P50, P90, P99, P99.9) with high accuracy in extreme tails.
 * 3. Replaces multi-megabyte distribution logs with a 50-byte T-Digest sketch frame.
 *
 * Result: Slashes 95%+ of latency distribution and telemetry profile tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface Centroid {
    mean: number;
    count: number;
}
export interface TDigestResult {
    wasCompacted: boolean;
    totalPoints: number;
    centroidsCount: number;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    p50: number;
    p90: number;
    p99: number;
    compactedSketchFrame: string;
}
export declare class BroccoliTDigestQuantileSketchBuffer {
    private static instance;
    private readonly centroids;
    private readonly maxCentroids;
    readonly tdigestAuditTable: BroccoliDbTable<{
        id: string;
        totalPoints: number;
        tokensSaved: number;
        savingsPercentage: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliTDigestQuantileSketchBuffer;
    /**
     * Adds an array of data points into the T-Digest sketch
     */
    addPoints(values: number[]): void;
    /**
     * Computes approximate percentile (0..1) from T-Digest centroids
     */
    quantile(q: number): number;
    /**
     * Ingests distribution array and returns compact T-Digest summary frame
     */
    static digest(values: number[]): TDigestResult;
    clear(): void;
}
//# sourceMappingURL=BroccoliTDigestQuantileSketchBuffer.d.ts.map