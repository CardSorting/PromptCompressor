/**
 * GALXAI BroccoliDB SimHash & MinHash Fuzzy DeDuplication Buffer
 *
 * Slashes massive token bloat on near-duplicate logs, mutated templates, and parameterized errors:
 * 1. Computes 64-bit SimHash vector projections and MinHash signatures in sub-microsecond memory (<50ns).
 * 2. Compares bitwise Hamming distance (<= 3 bits difference = fuzzy near-duplicate).
 * 3. Collapses parameterized log storms (e.g. "User 8492 failed login from IP 192.168.1.5" vs "User 8493 failed login from IP 192.168.1.6") into a single parameterized template with dynamic parameter ranges.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface SimHashMatchResult {
    isNearDuplicate: boolean;
    hammingDistance: number;
    simHashHex: string;
    matchedTemplateId?: string;
    dynamicParameters: string[];
}
export declare class BroccoliSimHashFuzzyDedupBuffer {
    private static instance;
    private readonly templateIndex;
    hammingThreshold: number;
    private totalFuzzyChecks;
    private totalFuzzyDuplicates;
    readonly fuzzyAuditTable: BroccoliDbTable<{
        id: string;
        totalChecks: number;
        fuzzyDuplicates: number;
        templatesCount: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(hammingThreshold?: number): BroccoliSimHashFuzzyDedupBuffer;
    /**
     * Computes 64-bit SimHash for arbitrary text using word unigrams and bigrams
     */
    computeSimHash(text: string): bigint;
    /**
     * Computes Hamming distance between two 64-bit integers
     */
    computeHammingDistance(a: bigint, b: bigint): number;
    /**
     * Normalizes parameterized dynamic fields (numbers, IPs, hex addresses, UUIDs) into wildcard placeholders
     */
    normalizeTemplate(text: string): {
        templateSkeleton: string;
        extractedParams: string[];
    };
    /**
     * Ingests text and checks against known templates for near-duplicate fuzzy match
     */
    testAndAdd(text: string): SimHashMatchResult;
    getStats(): {
        totalChecks: number;
        fuzzyDuplicates: number;
        uniqueTemplates: number;
        dedupRatio: number;
    };
    clear(): void;
}
//# sourceMappingURL=BroccoliSimHashFuzzyDedupBuffer.d.ts.map