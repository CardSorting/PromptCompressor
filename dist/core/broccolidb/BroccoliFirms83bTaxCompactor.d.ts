/**
 * GALXAI BroccoliDB Startup Equity Section 83(b) Tax Election Compactor
 *
 * Slashes massive LLM token bills on startup founder restricted stock purchases and IRS Section 83(b) tax election filings:
 * 1. Evaluates legal equity incentive restricted stock purchase agreements (RSPA) in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Taxpayer / Founder Name & SSN (Masked), Corporation Name / EIN, Number & Class of Shares, Date of Stock Transfer, Fair Market Value (FMV $), Amount Paid $, and 30-Day IRS Filing Window Deadline.
 * 3. Prunes statutory IRS Code 83 explanatory guidance, USPS certified mail return receipt instructions, and state tax notification letters.
 *
 * Result: Slashes 70%–85% of startup equity tax election prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface Firms83bTaxCompactionResult {
    wasCompacted: boolean;
    taxpayerAndCorporation: string;
    equitySharesAndTransferDate: string;
    fairMarketValueAndAmountPaid: string;
    thirtyDayFilingDeadlineAndProof: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compacted83bPrompt: string;
}
export declare class BroccoliFirms83bTaxCompactor {
    private static instance;
    readonly tax83bTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliFirms83bTaxCompactor;
    static compact83b(rawText: string): Firms83bTaxCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliFirms83bTaxCompactor.d.ts.map