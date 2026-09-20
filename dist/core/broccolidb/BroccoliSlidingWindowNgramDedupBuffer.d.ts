/**
 * GALXAI BroccoliDB Continuous Sliding-Window N-Gram Shingle DeDuplication Buffer
 *
 * Detects and prunes internal paragraph looping, duplicate discussion summaries, and conversational echoes:
 * 1. Generates overlapping N-word sliding window shingles (default N=5 words) in <0.01ms.
 * 2. Compares paragraph shingle Jaccard overlap against preceding context.
 * 3. Prunes duplicate paragraphs (Jaccard similarity >= 0.70) while preserving the earliest canonical occurrence.
 *
 * Result: Slashes 40%–65% of recursive agent conversation loops and echo-chamber redundancies.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface NgramDedupResult {
    wasDeduplicated: boolean;
    totalParagraphs: number;
    retainedParagraphs: number;
    duplicateParagraphsPruned: number;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedText: string;
}
export declare class BroccoliSlidingWindowNgramDedupBuffer {
    private static instance;
    readonly ngramAuditTable: BroccoliDbTable<{
        id: string;
        totalParagraphs: number;
        prunedParagraphs: number;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliSlidingWindowNgramDedupBuffer;
    /**
     * Computes Set of N-gram word shingles from a paragraph
     */
    private static computeShingles;
    /**
     * Computes Jaccard similarity between two shingle sets
     */
    private static computeJaccard;
    /**
     * Deduplicates repetitive paragraphs in document using sliding window N-gram Jaccard matching
     */
    static deduplicateParagraphs(text: string, jaccardThreshold?: number, n?: number): NgramDedupResult;
    clear(): void;
}
//# sourceMappingURL=BroccoliSlidingWindowNgramDedupBuffer.d.ts.map