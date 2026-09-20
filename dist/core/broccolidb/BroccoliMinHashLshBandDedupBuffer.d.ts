/**
 * GALXAI BroccoliDB MinHash Locality-Sensitive Hashing (LSH) Banding Buffer
 *
 * Sub-linear O(1) near-duplicate document and contract discovery across massive corpuses:
 * 1. Computes K=64 MinHash signature permutations using independent linear hash functions (a_i * x + b_i) mod p.
 * 2. Divides signatures into b=16 bands with r=4 rows per band.
 * 3. Hashes each band into an LSH bucket index, providing O(1) candidate matching with theoretical Jaccard similarity bounds (s >= (1/b)^(1/r)).
 * 4. Eliminates pairwise O(N^2) comparison overhead across millions of prompt documents.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface LshMatchCandidate {
    documentId: string;
    estimatedJaccardSimilarity: number;
    matchingBandsCount: number;
}
export declare class BroccoliMinHashLshBandDedupBuffer {
    private static instance;
    private readonly numHashes;
    private readonly numBands;
    private readonly rowsPerBand;
    private readonly lshBuckets;
    private readonly docSignatures;
    private readonly hashCoefficients;
    private readonly prime;
    readonly lshAuditTable: BroccoliDbTable<{
        id: string;
        totalDocsIndexed: number;
        totalBuckets: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(numBands?: number, rowsPerBand?: number): BroccoliMinHashLshBandDedupBuffer;
    /**
     * Computes K=64 MinHash signatures for shingled text
     */
    computeMinHashSignature(text: string): number[];
    /**
     * Indexes a document and returns candidate near-duplicate matches
     */
    indexAndFindDuplicates(docId: string, text: string, similarityThreshold?: number): LshMatchCandidate[];
    getStats(): {
        totalDocsIndexed: number;
        totalBuckets: number;
    };
    clear(): void;
}
//# sourceMappingURL=BroccoliMinHashLshBandDedupBuffer.d.ts.map