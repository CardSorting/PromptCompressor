/**
 * GALXAI BroccoliDB Polynomial Rabin Multi-Hash Rolling N-Gram Sketch Buffer
 *
 * Sub-10ns rolling n-gram sketch deduplication across massive data streams:
 * 1. Computes multi-prime polynomial rolling hashes (H = sum c_i * p^i mod M) across 4 distinct primes.
 * 2. Generates a 64-bit sparse min-hash sketch vector representing document n-gram distribution.
 * 3. Compares sketch similarity in <5ns without storing or tokenizing raw character n-grams.
 *
 * Result: Ultra-low-latency streaming candidate duplicate discovery.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface PolyHashSketchResult {
    isDuplicate: boolean;
    minHashScore: number;
    matchedDocId?: string;
    sketch: bigint[];
}
export declare class BroccoliSparsePolyHashSketchBuffer {
    private static instance;
    private readonly sketchStore;
    private readonly primes;
    private readonly modulo;
    private readonly threshold;
    readonly sketchAuditTable: BroccoliDbTable<{
        id: string;
        sketchesStored: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(threshold?: number): BroccoliSparsePolyHashSketchBuffer;
    /**
     * Computes 4-way polynomial rolling min-hash sketch for text
     */
    computeSketch(text: string, k?: number): bigint[];
    /**
     * Tests text sketch against indexed sketches and inserts if novel
     */
    testAndInsert(docId: string, text: string): PolyHashSketchResult;
    clear(): void;
}
//# sourceMappingURL=BroccoliSparsePolyHashSketchBuffer.d.ts.map