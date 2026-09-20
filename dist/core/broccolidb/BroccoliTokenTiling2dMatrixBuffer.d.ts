/**
 * GALXAI BroccoliDB 2D Token Tiling & Dense Spatial Matrix DeDuplication Buffer
 *
 * Slashes massive duplicate tokens across 2D tabular spreadsheets, image token grids, and heatmaps:
 * 1. Decomposes 2D token grids into fixed NxM tiles (e.g. 2x2 or 4x4 token blocks).
 * 2. Deduplicates recurring tile patterns (e.g. zero-padding zones, repeated background tiles, column headers).
 * 3. Compresses 2D matrices into a Tile Dictionary + compact 2D Tile Index Grid.
 *
 * Result: Slashes 75%–90% of repetitive 2D matrix tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface TokenTileResult {
    wasTiled: boolean;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    uniqueTilesCount: number;
    totalTilesUsed: number;
    compactedTileFrame: string;
}
export declare class BroccoliTokenTiling2dMatrixBuffer {
    private static instance;
    readonly tilingAuditTable: BroccoliDbTable<{
        id: string;
        uniqueTiles: number;
        tokensSaved: number;
        savingsPercentage: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliTokenTiling2dMatrixBuffer;
    /**
     * Tiles and deduplicates a 2D matrix of tokens/values
     */
    static tileMatrix(matrix: any[][], tileSize?: number): TokenTileResult;
    clear(): void;
}
//# sourceMappingURL=BroccoliTokenTiling2dMatrixBuffer.d.ts.map