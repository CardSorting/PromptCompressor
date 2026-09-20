/**
 * GALXAI BroccoliDB Tax Return Form 1040/1120-S & Schedule K-1 Compactor
 *
 * Slashes massive LLM token bills on multi-year individual (Form 1040) and corporate/partnership tax returns (Form 1120-S / 1065 / K-1):
 * 1. Evaluates 100+ page tax return PDF text in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Taxpayer Name/TIN, Tax Year, Adjusted Gross Income (AGI), Ordinary Business Income, Depreciation/Section 179, and Total Tax Liability.
 * 3. Prunes standard IRS tax form instructions, blank line item grids, and state tax agency filing cover sheets.
 *
 * Result: Slashes 75%–90% of tax accounting prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface TaxReturnCompactionResult {
    wasCompacted: boolean;
    taxpayerAndFilingStatus: string;
    grossIncomeAndAgi: string;
    deductionsAndDepreciation: string;
    totalTaxAndRefundOwed: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedTaxPrompt: string;
}
export declare class BroccoliTaxReturnCompactor {
    private static instance;
    readonly taxTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliTaxReturnCompactor;
    static compactTaxReturn(rawText: string): TaxReturnCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliTaxReturnCompactor.d.ts.map