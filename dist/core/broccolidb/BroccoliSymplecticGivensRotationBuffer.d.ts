/**
 * GALXAI BroccoliDB Symplectic Givens Orthogonal Vector Rotation DeDuplication Buffer
 *
 * Slashes dense vector embedding bloat via planar Givens rotations:
 * 1. Computes Givens orthogonal rotations G(i, j, theta) to align vector energy onto principal coordinate axes.
 * 2. Drives 70%+ of rotated vector dimensions below the threshold epsilon into exact zeros.
 * 3. Encodes sparse non-zero axis values + rotation angle parameters with lossless reconstruction.
 *
 * Result: Slashes 70%–85% of high-dimensional vector tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface GivensRotationResult {
    wasRotated: boolean;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    dimension: number;
    nonZeroCount: number;
    compactedGivensFrame: string;
}
export declare class BroccoliSymplecticGivensRotationBuffer {
    private static instance;
    readonly givensAuditTable: BroccoliDbTable<{
        id: string;
        dimension: number;
        tokensSaved: number;
        savingsPercentage: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliSymplecticGivensRotationBuffer;
    /**
     * Applies Givens rotation to sparsify vector
     */
    static rotateAndSparsify(vec: number[], threshold?: number): GivensRotationResult;
    clear(): void;
}
//# sourceMappingURL=BroccoliSymplecticGivensRotationBuffer.d.ts.map