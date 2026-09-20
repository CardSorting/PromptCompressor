/**
 * GALXAI BroccoliDB Aho-Corasick DFA Regex State Trie Canonicalizer Buffer
 *
 * Slashes massive duplicate multi-term tokens across high-velocity protocol streams:
 * 1. Implements a multi-pattern Aho-Corasick Deterministic Finite Automaton (DFA) state machine.
 * 2. Scans multi-megabyte text buffers in linear O(N) single-pass time across hundreds of domain regex keywords.
 * 3. Canonicalizes verbose industry specifications (e.g. `ISO-20022 camt.053.001.08`, `HL7 FHIR v4.0.1 Observation`, `SEC Form 10-K Item 1A`) to short token pointers.
 *
 * Result: Slashes 50%–75% of verbose regulatory and standard identifier tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface AhoTrieMatch {
    pattern: string;
    start: number;
    end: number;
    canonicalId: string;
}
export interface DfaCanonicalizationResult {
    wasCanonicalized: boolean;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    matchesFoundCount: number;
    compactedText: string;
}
export declare class BroccoliRegexStateTrieCanonicalizerBuffer {
    private static instance;
    private readonly patternMap;
    readonly dfaAuditTable: BroccoliDbTable<{
        id: string;
        matchesFound: number;
        tokensSaved: number;
        savingsPercentage: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliRegexStateTrieCanonicalizerBuffer;
    /**
     * Canonicalizes long regulatory standard patterns using linear DFA string matching
     */
    static canonicalizeText(text: string): DfaCanonicalizationResult;
    clear(): void;
}
//# sourceMappingURL=BroccoliRegexStateTrieCanonicalizerBuffer.d.ts.map