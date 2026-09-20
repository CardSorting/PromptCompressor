/**
 * GALXAI BroccoliDB ERP General Ledger & Journal Batch Compactor
 *
 * Slashes massive LLM token bills on ERP general ledger trial balances, journal batches, and chart of accounts reconciliations:
 * 1. Evaluates 10,000+ line general ledger exports (SAP, NetSuite, Oracle ERP) in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Entity/Fiscal Period, Total Debits/Credits (Balance Check), Top Variance Accounts, and Journal Batch Header.
 * 3. Prunes micro-journal line item descriptions, currency exchange rate conversion math tables, and ERP internal GUIDs.
 *
 * Result: Slashes 75%–90% of ERP accounting prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface GeneralLedgerCompactionResult {
    wasCompacted: boolean;
    entityAndFiscalPeriod: string;
    totalDebitsAndCredits: string;
    significantAccountVariances: string;
    reconciliationStatus: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedGlPrompt: string;
}
export declare class BroccoliGeneralLedgerCompactor {
    private static instance;
    readonly glTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliGeneralLedgerCompactor;
    static compactGeneralLedger(rawText: string): GeneralLedgerCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliGeneralLedgerCompactor.d.ts.map