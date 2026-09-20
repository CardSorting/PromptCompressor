/**
 * GALXAI BroccoliDB Wealth Management & Investment Portfolio Compactor
 *
 * Slashes massive LLM token bills on high-net-worth investment management statements, asset allocations, and performance reports:
 * 1. Evaluates 50+ page wealth portfolio reports and brokerage statements in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Client/Custodian, Total Portfolio Value (AUM $), Target vs Actual Asset Allocation %, Sharpe Ratio, and Unrealized Gains/Losses.
 * 3. Prunes micro-dividend reinvestment transaction logs, custodian clearing disclosures, and SIPC asset insurance preambles.
 *
 * Result: Slashes 75%–90% of wealth management prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface WealthPortfolioCompactionResult {
    wasCompacted: boolean;
    clientAndCustodian: string;
    totalAumAndPerformance: string;
    assetAllocationBreakdown: string;
    taxLotGainsAndRiskMetrics: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedWealthPrompt: string;
}
export declare class BroccoliWealthPortfolioCompactor {
    private static instance;
    readonly wealthTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliWealthPortfolioCompactor;
    static compactWealthPortfolio(rawText: string): WealthPortfolioCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliWealthPortfolioCompactor.d.ts.map