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
export class BroccoliMinHashLshBandDedupBuffer {
    static instance;
    numHashes; // K = 64
    numBands; // b = 16
    rowsPerBand; // r = 4
    lshBuckets = new Map(); // bandKey -> Set<docId>
    docSignatures = new Map(); // docId -> minHash[64]
    hashCoefficients;
    prime = 2147483647; // 2^31 - 1
    lshAuditTable;
    constructor(numBands = 16, rowsPerBand = 4) {
        this.numBands = numBands;
        this.rowsPerBand = rowsPerBand;
        this.numHashes = numBands * rowsPerBand; // 64
        // Initialize deterministic hash coefficients
        this.hashCoefficients = [];
        for (let i = 0; i < this.numHashes; i++) {
            this.hashCoefficients.push({
                a: (i * 10007 + 12345) % this.prime + 1,
                b: (i * 24681 + 67891) % this.prime + 1,
            });
        }
        this.lshAuditTable = new BroccoliDbTable('minhash_lsh_band_audit');
    }
    static getInstance(numBands = 16, rowsPerBand = 4) {
        if (!BroccoliMinHashLshBandDedupBuffer.instance) {
            BroccoliMinHashLshBandDedupBuffer.instance = new BroccoliMinHashLshBandDedupBuffer(numBands, rowsPerBand);
        }
        return BroccoliMinHashLshBandDedupBuffer.instance;
    }
    /**
     * Computes K=64 MinHash signatures for shingled text
     */
    computeMinHashSignature(text) {
        const words = text.toLowerCase().split(/[\s,;:()[\]{}]+/).filter(w => w.length > 0);
        const shingles = [];
        // 2-word shingles
        for (let i = 0; i < words.length - 1; i++) {
            let h = 0x811c9dc5;
            const shingleStr = `${words[i]} ${words[i + 1]}`;
            for (let c = 0; c < shingleStr.length; c++) {
                h = Math.imul(h ^ shingleStr.charCodeAt(c), 0x01000193);
            }
            shingles.push(Math.abs(h >>> 0));
        }
        if (shingles.length === 0) {
            shingles.push(0x811c9dc5);
        }
        const signature = new Array(this.numHashes).fill(Infinity);
        for (const shingle of shingles) {
            for (let i = 0; i < this.numHashes; i++) {
                const coef = this.hashCoefficients[i];
                const hashVal = (coef.a * shingle + coef.b) % this.prime;
                if (hashVal < signature[i]) {
                    signature[i] = hashVal;
                }
            }
        }
        return signature;
    }
    /**
     * Indexes a document and returns candidate near-duplicate matches
     */
    indexAndFindDuplicates(docId, text, similarityThreshold = 0.6) {
        const signature = this.computeMinHashSignature(text);
        this.docSignatures.set(docId, signature);
        const candidateCounts = new Map();
        // Banding phase: iterate through b bands
        for (let band = 0; band < this.numBands; band++) {
            const bandOffset = band * this.rowsPerBand;
            const bandValues = signature.slice(bandOffset, bandOffset + this.rowsPerBand);
            const bandHash = `b${band}_${bandValues.join('_')}`;
            // Check existing documents in this bucket
            const bucket = this.lshBuckets.get(bandHash);
            if (bucket) {
                for (const otherDocId of bucket) {
                    if (otherDocId !== docId) {
                        candidateCounts.set(otherDocId, (candidateCounts.get(otherDocId) || 0) + 1);
                    }
                }
            }
            else {
                this.lshBuckets.set(bandHash, new Set());
            }
            // Add this doc to the bucket
            this.lshBuckets.get(bandHash).add(docId);
        }
        // Verify Jaccard similarity for candidates
        const matches = [];
        for (const [candidateId, bandCollisions] of candidateCounts.entries()) {
            const candidateSig = this.docSignatures.get(candidateId);
            if (!candidateSig)
                continue;
            let matchingHashes = 0;
            for (let i = 0; i < this.numHashes; i++) {
                if (signature[i] === candidateSig[i]) {
                    matchingHashes++;
                }
            }
            const estimatedJaccard = Number((matchingHashes / this.numHashes).toFixed(3));
            if (estimatedJaccard >= similarityThreshold) {
                matches.push({
                    documentId: candidateId,
                    estimatedJaccardSimilarity: estimatedJaccard,
                    matchingBandsCount: bandCollisions,
                });
            }
        }
        matches.sort((a, b) => b.estimatedJaccardSimilarity - a.estimatedJaccardSimilarity);
        return matches;
    }
    getStats() {
        return {
            totalDocsIndexed: this.docSignatures.size,
            totalBuckets: this.lshBuckets.size,
        };
    }
    clear() {
        this.lshBuckets.clear();
        this.docSignatures.clear();
        this.lshAuditTable.clear();
    }
}
//# sourceMappingURL=BroccoliMinHashLshBandDedupBuffer.js.map