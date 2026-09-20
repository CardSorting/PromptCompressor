/**
 * GALXAI BroccoliDB Count-Min Sketch Frequency Matrix Buffer
 *
 * Sub-microsecond heavy-hitter frequency estimation buffer for massive streams:
 * 1. Maintains a 2D matrix of counters (depth d=5, width w=8192) in fixed-size typed array memory (<160KB).
 * 2. Ingests events and increments 5 independent polynomial hash buckets in <15 nanoseconds.
 * 3. Returns rigorous probabilistic frequency estimates (`min(table[i][h_i(x)])`) with (1-delta) confidence.
 * 4. Isolates "heavy hitter" anomalies and repetitive error storms without holding unbounded hash maps in memory.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export declare class BroccoliCountMinSketchBuffer {
    private static instance;
    private readonly depth;
    private readonly width;
    private readonly matrix;
    private totalEventsAdded;
    readonly sketchAuditTable: BroccoliDbTable<{
        id: string;
        totalEvents: number;
        depth: number;
        width: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(depth?: number, width?: number): BroccoliCountMinSketchBuffer;
    /**
     * Computes hash for specific row depth
     */
    private hashRow;
    /**
     * Ingests an event and increments all sketch rows
     */
    add(item: string, count?: number): void;
    /**
     * Estimates the frequency count of an item in O(depth) time (<25ns)
     */
    estimateFrequency(item: string): number;
    getStats(): {
        depth: number;
        width: number;
        totalMatrixCells: number;
        totalEventsAdded: number;
        memoryKb: number;
    };
    clear(): void;
}
//# sourceMappingURL=BroccoliCountMinSketchBuffer.d.ts.map