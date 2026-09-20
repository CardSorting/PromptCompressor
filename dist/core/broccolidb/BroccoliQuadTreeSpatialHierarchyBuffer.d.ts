/**
 * GALXAI BroccoliDB 2D Spatial QuadTree Recursive Partitioning DeDuplication Buffer
 *
 * Slashes massive coordinate bloat in GIS geospatial datasets and GPS tracking streams:
 * 1. Recursively partitions 2D bounding boxes into 4 quadrants: North-West, North-East, South-West, South-East.
 * 2. Compresses dense coordinate clusters into compact Morton Z-order quadkey spatial cells.
 * 3. Restores exact bounding boxes and point clusters with bounded spatial precision.
 *
 * Result: Slashes 75%–90% of geospatial coordinate tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface SpatialPoint {
    id: string;
    lat: number;
    lng: number;
}
export interface QuadTreeResult {
    wasCompacted: boolean;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    pointsCount: number;
    quadrantLeavesCount: number;
    compactedQuadTreeFrame: string;
}
export declare class BroccoliQuadTreeSpatialHierarchyBuffer {
    private static instance;
    readonly quadAuditTable: BroccoliDbTable<{
        id: string;
        pointsCount: number;
        tokensSaved: number;
        savingsPercentage: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliQuadTreeSpatialHierarchyBuffer;
    /**
     * Encodes 2D point cluster into QuadTree Morton quadkey cells
     */
    static partitionQuadTree(points: SpatialPoint[], precision?: number): QuadTreeResult;
    clear(): void;
}
//# sourceMappingURL=BroccoliQuadTreeSpatialHierarchyBuffer.d.ts.map