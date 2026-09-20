/**
 * GALXAI BroccoliDB Corporate Earnings Call Transcript Compactor
 *
 * Slashes massive LLM token bills on equity research swarms, sentiment models, and hedge fund bots:
 * 1. Evaluates 30–50 page earnings conference call transcripts in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Headline Results, Forward Guidance, Growth Drivers, and Critical Analyst Q&A.
 * 3. Prunes operator introductions, safe harbor forward-looking legal disclaimers, and pleasantries.
 *
 * Result: Slashes 70%–85% of corporate earnings call prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface EarningsCallCompactionResult {
    wasCompacted: boolean;
    companyAndQuarter: string;
    financialResults: string;
    guidanceUpdate: string;
    keyQnaExchanges: string[];
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedEarningsPrompt: string;
}
export declare class BroccoliEarningsCallCompactor {
    private static instance;
    readonly earningsAuditTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliEarningsCallCompactor;
    /**
     * Compacts raw corporate earnings call transcript
     */
    static compactEarningsCall(rawTranscriptText: string): EarningsCallCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliEarningsCallCompactor.d.ts.map