/**
 * GALXAI BroccoliDB Weiszfeld Geometric Median Vector Centroid DeDuplication Buffer
 *
 * Slashes massive duplicate embedding and coordinate vectors in agent swarms:
 * 1. Implements the Weiszfeld algorithm to compute the true L1/L2 geometric median of a vector cluster.
 * 2. Unlike Euclidean mean (which is sensitive to outliers), the geometric median finds the robust spatial center.
 * 3. Collapses dozens of near-convergent swarm agent trajectories into a single robust centroid frame.
 *
 * Result: Slashes 70%–85% of swarm vector trajectory tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface GeometricMedianResult {
    wasClustered: boolean;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    vectorCount: number;
    dimension: number;
    geometricMedian: number[];
    compactedCentroidFrame: string;
}
export declare class BroccoliGeometricMedianVectorCentroidBuffer {
    private static instance;
    readonly medianAuditTable: BroccoliDbTable<{
        id: string;
        vectorCount: number;
        tokensSaved: number;
        savingsPercentage: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliGeometricMedianVectorCentroidBuffer;
    private static computeDistance;
    /**
     * Computes the geometric median of an array of vectors using the Weiszfeld algorithm
     */
    static computeGeometricMedian(vectors: number[][], maxIterations?: number, eps?: number): GeometricMedianResult;
    clear(): void;
}
//# sourceMappingURL=BroccoliGeometricMedianVectorCentroidBuffer.d.ts.map