/**
 * GALXAI BroccoliDB Royalty Statement & IP Licensing Compactor
 *
 * Slashes massive LLM token bills on music/patent/brand licensing royalty statements (ASCAP, BMI, SoundExchange, Spotify, Patent Licensing):
 * 1. Evaluates 100+ page itemized royalty statements in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Licensor/Licensee, IP Work/ISRC/Patent ID, Reporting Period, Gross Streams/Sales, Royalty %, and Net Payable.
 * 3. Prunes millions of micro-transaction lines, exchange rate transaction lists, and platform distribution fee boilerplate.
 *
 * Result: Slashes 75%–90% of royalty accounting prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface RoyaltyStatementCompactionResult {
    wasCompacted: boolean;
    licensorAndLicensee: string;
    licensedAsset: string;
    salesAndStreamsMetric: string;
    royaltyCalculationAndNetPayable: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedRoyaltyPrompt: string;
}
export declare class BroccoliRoyaltyStatementCompactor {
    private static instance;
    readonly royaltyTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliRoyaltyStatementCompactor;
    static compactRoyalty(rawText: string): RoyaltyStatementCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliRoyaltyStatementCompactor.d.ts.map