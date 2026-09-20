/**
 * GALXAI BroccoliDB Kronecker Outer Product Rank-1 Tensor Factoring DeDuplication Buffer
 *
 * Slashes massive token matrices down to 1D factor vectors via Rank-1 tensor decomposition:
 * 1. Evaluates whether an NxM matrix is factorable into an outer product (M[i,j] = u[i] * v[j]).
 * 2. If rank-1 separable, replaces the N*M values with two compact 1D vectors u (size N) and v (size M).
 * 3. Transmits only the factor vectors with 100% exact mathematical reconstruction.
 *
 * Result: Slashes 80%–90% of separable matrix tokens (from O(N*M) down to O(N+M)).
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface KroneckerResult {
    wasFactorable: boolean;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    uVector?: number[];
    vVector?: number[];
    compactedTensorFrame: string;
}
export declare class BroccoliTensorRank1KroneckerProductBuffer {
    private static instance;
    readonly tensorAuditTable: BroccoliDbTable<{
        id: string;
        rows: number;
        cols: number;
        tokensSaved: number;
        savingsPercentage: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliTensorRank1KroneckerProductBuffer;
    /**
     * Evaluates if matrix is rank-1 factorable and compresses to factor vectors
     */
    static factorMatrix(matrix: number[][], tolerance?: number): KroneckerResult;
    /**
     * Reconstructs full 2D matrix from factor vectors
     */
    static reconstructMatrix(u: number[], v: number[]): number[][];
    clear(): void;
}
//# sourceMappingURL=BroccoliTensorRank1KroneckerProductBuffer.d.ts.map