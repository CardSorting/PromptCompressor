/**
 * GALXAI BroccoliDB Real Estate Syndication & Waterfall Distribution Compactor
 *
 * Slashes massive LLM token bills on private equity real estate syndications, PPM offerings, and multi-tier waterfall models:
 * 1. Evaluates 100+ page real estate private placement memorandums (PPM) and partnership waterfall models in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Sponsor (GP) / Investor (LP), Equity Raise $, Preferred Return Hurdle %, Promote Splits (e.g. 80/20 -> 70/30), Target Net IRR %, and Equity Multiple.
 * 3. Prunes SEC Regulation D Rule 506(c) investor accredited questionnaires, generic forward-looking risk factors, and subscription signature packets.
 *
 * Result: Slashes 75%–90% of CRE syndication prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface CreSyndicationCompactionResult {
    wasCompacted: boolean;
    sponsorAndSyndicationOffering: string;
    equityRaiseAndCapStack: string;
    waterfallStructureAndPromote: string;
    projectedReturnsAndHurdles: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedSyndicationPrompt: string;
}
export declare class BroccoliCreSyndicationCompactor {
    private static instance;
    readonly syndicationTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliCreSyndicationCompactor;
    static compactSyndication(rawText: string): CreSyndicationCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliCreSyndicationCompactor.d.ts.map