/**
 * GALXAI BroccoliDB Non-Profit 501(c)(3) IRS Form 990 Annual Tax Return Compactor
 *
 * Slashes massive LLM token bills on charitable non-profit tax filings (IRS Form 990 / 990-EZ / Schedule A/B/J):
 * 1. Evaluates 100+ page non-profit IRS Form 990 returns in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Tax-Exempt Organization Name / EIN, 501(c)(3) Public Charity Status, Total Contributions & Grants $, Program Service Revenue $, Total Expenses & Program Expense Ratio %, Net Assets $, and Top Executive / Key Employee Compensation (Schedule J).
 * 3. Prunes IRS filing instructional checkboxes, mission statement prose paragraphs, and state charitable registration disclosures.
 *
 * Result: Slashes 75%–90% of non-profit tax return prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface NonProfit990CompactionResult {
    wasCompacted: boolean;
    organizationAndEin: string;
    contributionsAndTotalRevenue: string;
    functionalExpensesAndProgramRatio: string;
    netAssetsAndExecutiveCompensation: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedForm990Prompt: string;
}
export declare class BroccoliNonProfit990Compactor {
    private static instance;
    readonly npoTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliNonProfit990Compactor;
    static compactForm990(rawText: string): NonProfit990CompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliNonProfit990Compactor.d.ts.map