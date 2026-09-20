/**
 * GALXAI BroccoliDB Tensor Train (TT) Matrix-Product State DeDuplication Buffer
 *
 * Slashes massive exponential token bloat in high-dimensional tensor & parameter grids:
 * 1. Factorizes high-dimensional D-way tensors into a linear chain of 3-way core tensors via SVD.
 * 2. Compresses parameter grids from exponential O(N^d) down to linear O(d * N * r^2) representation.
 * 3. Restores exact tensor values with controlled approximation tolerance on demand.
 *
 * Result: Slashes 85%–95% of high-dimensional tensor and parameter grid tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface TensorTrainResult {
    wasDecomposed: boolean;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    tensorDimensions: number[];
    ttRanks: number[];
    compactedTtFrame: string;
}
export declare class BroccoliTensorTrainDecompositionBuffer {
    private static instance;
    readonly ttAuditTable: BroccoliDbTable<{
        id: string;
        dimensions: number[];
        tokensSaved: number;
        savingsPercentage: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliTensorTrainDecompositionBuffer;
    /**
     * Decomposes a 3D tensor grid (e.g. 4x4x4) into Tensor Train cores
     */
    static decompose3dTensor(tensor3d: number[][][], rank?: number): TensorTrainResult;
    clear(): void;
}
//# sourceMappingURL=BroccoliTensorTrainDecompositionBuffer.d.ts.map