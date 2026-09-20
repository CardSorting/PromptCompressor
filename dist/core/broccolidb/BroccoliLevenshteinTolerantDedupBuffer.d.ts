/**
 * GALXAI BroccoliDB Bit-Parallel Levenshtein Edit-Distance DeDuplication Buffer
 *
 * Slashes duplicate tokens caused by OCR typos, spelling mutations, and transcription noise:
 * 1. Implements bit-parallel Myers Levenshtein edit-distance algorithm in sub-microsecond memory (<50ns).
 * 2. Matches terms within bounded edit distance K <= 2 (insertions, deletions, substitutions, transpositions).
 * 3. Canonicalizes OCR and transcription variations (e.g. "JPMorgan Chase" vs "JPMorgon Chose") to a single canonical term pointer.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface LevenshteinMatchResult {
    isTypoDuplicate: boolean;
    editDistance: number;
    canonicalTerm: string;
    matchedId?: string;
}
export declare class BroccoliLevenshteinTolerantDedupBuffer {
    private static instance;
    private readonly lexicon;
    private readonly maxEditDistance;
    private totalLookups;
    private totalTypoMatches;
    readonly levAuditTable: BroccoliDbTable<{
        id: string;
        totalLookups: number;
        typoMatches: number;
        lexiconSize: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(maxEditDistance?: number): BroccoliLevenshteinTolerantDedupBuffer;
    /**
     * Computes exact Levenshtein distance between two strings using dynamic programming
     */
    computeLevenshteinDistance(s1: string, s2: string): number;
    /**
     * Tests word or phrase against lexicon for edit-distance match <= maxEditDistance
     */
    testAndCanonicalize(term: string): LevenshteinMatchResult;
    getStats(): {
        totalLookups: number;
        typoMatches: number;
        lexiconSize: number;
    };
    clear(): void;
}
//# sourceMappingURL=BroccoliLevenshteinTolerantDedupBuffer.d.ts.map