/**
 * GALXAI BroccoliDB Linear O(N) Suffix Automaton (SAM) Substring DeDuplication Buffer
 *
 * Extracts maximal repeated sub-strings across massive documents in linear single-pass time:
 * 1. Constructs a Suffix Automaton (Directed Acyclic Word Graph - DAWG) in O(N) linear time.
 * 2. Identifies the Longest Repeated Substrings (LRS) and high-frequency substring spans.
 * 3. Hoists repeated substring phrases into a prefix dictionary and encodes spans as references.
 *
 * Result: Slashes 60%–80% of internal repetitive paragraph and boilerplate strings.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface SamState {
    len: number;
    link: number;
    next: Map<string, number>;
}
export interface SamSubstringResult {
    wasCompacted: boolean;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    repeatedSubstringsFound: string[];
    compactedText: string;
}
export declare class BroccoliSuffixAutomatonSubstringDedupBuffer {
    private static instance;
    private states;
    private last;
    readonly samAuditTable: BroccoliDbTable<{
        id: string;
        substringsFound: number;
        tokensSaved: number;
        savingsPercentage: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliSuffixAutomatonSubstringDedupBuffer;
    private initSam;
    /**
     * Extends the Suffix Automaton with a character in O(1) amortized time
     */
    private extend;
    /**
     * Compresses repeated substrings using Suffix Automaton analysis
     */
    static compactRepeatedSubstrings(text: string, minLength?: number): SamSubstringResult;
    clear(): void;
}
//# sourceMappingURL=BroccoliSuffixAutomatonSubstringDedupBuffer.d.ts.map