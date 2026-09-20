/**
 * GALXAI BroccoliDB Compressed Sparse Row (CSR) Matrix DeDuplication Buffer
 *
 * Slashes massive zero-padding token waste in sparse attention masks, graph embeddings, and transition matrices:
 * 1. Scans 2D matrices containing 85%+ zero values.
 * 2. Compresses matrices into 3 flat 1D CSR arrays: nonZeroValues, columnIndices, and rowPointers.
 * 3. Restores exact full matrix on demand with zero data loss.
 *
 * Result: Slashes 85%–95% of sparse 2D matrix tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface CsrMatrixResult {
    wasCompacted: boolean;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    nonZeroCount: number;
    sparsityRatio: number;
    compactedCsrFrame: string;
}
export declare class BroccoliCsrSparseMatrixCompressionBuffer {
    private static instance;
    readonly csrAuditTable: BroccoliDbTable<{
        id: string;
        nonZeros: number;
        tokensSaved: number;
        savingsPercentage: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliCsrSparseMatrixCompressionBuffer;
    /**
     * Compresses 2D sparse matrix into Compressed Sparse Row (CSR) format
     */
    static compressMatrix(matrix: number[][]): CsrMatrixResult;
    /**
     * Decompresses CSR frame back into full 2D matrix
     */
    static decompressMatrix(frame: string): number[][];
    clear(): void;
}
//# sourceMappingURL=BroccoliCsrSparseMatrixCompressionBuffer.d.ts.map