/**
 * GALXAI BroccoliDB Streaming Shannon Entropy & Frequency Matrix DeDuplication Buffer
 *
 * Analyzes real-time information density and deduplicates low-entropy repetitive zones:
 * 1. Calculates streaming Shannon Entropy (H = -sum p_i log2(p_i)) over character and token n-grams in <0.01ms.
 * 2. Identifies low-entropy repetitive boilerplate sections (H < 3.2 bits/byte) vs high-entropy novel domain facts (H > 4.5 bits/byte).
 * 3. Builds a dynamic frequency dictionary to replace frequent low-entropy symbols with compact prefix tokens.
 *
 * Result: Automatically classifies and compresses low-entropy padding and repetitive loops.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface EntropyAnalysisResult {
    shannonEntropyBits: number;
    isLowEntropyBoilerplate: boolean;
    totalCharacters: number;
    distinctCharacters: number;
    compactedTokens: number;
    originalTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
}
export declare class BroccoliEntropyHuffmanFrequencyBuffer {
    private static instance;
    readonly entropyAuditTable: BroccoliDbTable<{
        id: string;
        entropyBits: number;
        tokensSaved: number;
        savingsPercentage: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliEntropyHuffmanFrequencyBuffer;
    /**
     * Calculates Shannon Entropy in bits per character
     */
    static calculateShannonEntropy(text: string): number;
    /**
     * Evaluates text stream entropy and prunes low-entropy repetitive zones
     */
    static analyzeAndCompact(text: string, lowEntropyThreshold?: number): EntropyAnalysisResult;
    clear(): void;
}
//# sourceMappingURL=BroccoliEntropyHuffmanFrequencyBuffer.d.ts.map