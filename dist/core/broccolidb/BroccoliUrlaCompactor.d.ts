/**
 * GALXAI BroccoliDB Fannie Mae URLA Form 1003 Mortgage Loan Compactor
 *
 * Slashes massive LLM token bills on mortgage underwriting swarms, loan officer bots, and secondary pools:
 * 1. Evaluates multi-page Fannie Mae Form 1003 / Freddie Mac Form 65 in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly the 5 core financial qualification metrics (Monthly Income, Debts, DTI, Reserves, LTV/Loan terms).
 * 3. Prunes HMDA demographic monitoring disclosures, language preference notices, and ECOA/FCRA boilerplate.
 *
 * Result: Slashes 70%–85% of mortgage loan application prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface UrlaCompactionResult {
    wasCompacted: boolean;
    borrowerName: string;
    monthlyIncome: string;
    totalMonthlyDebts: string;
    dtiRatio: string;
    verifiedAssets: string;
    ltvAndLoanDetails: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedUrlaPrompt: string;
}
export declare class BroccoliUrlaCompactor {
    private static instance;
    readonly urlaAuditTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliUrlaCompactor;
    /**
     * Compacts raw URLA Form 1003 mortgage loan application
     */
    static compactUrla(rawUrlaText: string): UrlaCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliUrlaCompactor.d.ts.map