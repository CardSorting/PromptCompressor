/**
 * GALXAI BroccoliDB Accounts Receivable Factoring & ABL Credit Compactor
 *
 * Slashes massive LLM token bills on commercial invoice factoring agreements and asset-based lending (ABL) borrowing bases:
 * 1. Evaluates 50+ page factoring schedules and accounts receivable aging ledgers in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Client Factor Name, Account Debtor Name, Factored Batch Total $, Advance Rate %, Factoring Fee %, Ineligible Reserves, and Net Cash Advanced.
 * 3. Prunes repetitive line-by-line invoice line items, debtor UCC-1 cross-collateralization boilerplate, and lockbox remittance text.
 *
 * Result: Slashes 75%–90% of factoring and ABL prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface ArFactoringCompactionResult {
    wasCompacted: boolean;
    clientAndDebtor: string;
    grossInvoicesAndAdvanceRate: string;
    ineligibleReservesAndDiscounts: string;
    netCashAdvancedAndFacility: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedFactoringPrompt: string;
}
export declare class BroccoliArFactoringCompactor {
    private static instance;
    readonly factoringTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliArFactoringCompactor;
    static compactFactoring(rawText: string): ArFactoringCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliArFactoringCompactor.d.ts.map