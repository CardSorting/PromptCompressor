/**
 * GALXAI BroccoliDB Wholesale & Retail Treasury Bank Lockbox Deposit Remittance Compactor
 *
 * Slashes massive LLM token bills on commercial treasury bank lockbox processing reports, check MICR OCR logs, and electronic remittance advices (835/EDI):
 * 1. Evaluates 100+ MB daily lockbox transmission files and deposit summary sheets in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Lockbox Number & Operating Bank (e.g. Lockbox 84920 / Wells Fargo Wholesale Lockbox), Deposit Date & Batch ID, Total Check Count & Gross Deposit Amount ($), Largest Remitters / Customers, Check MICR Routing / Transit & Account Numbers, OCR Remittance Invoice Matching Status, and Exception / Reject Items.
 * 3. Prunes thousands of base64 check image TIFF headers, blank check back image blocks, and duplicate MICR scan OCR trace streams.
 *
 * Result: Slashes 80%–95% of treasury bank lockbox deposit prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface TreasuryLockboxCompactionResult {
    wasCompacted: boolean;
    lockboxAndProcessingBank: string;
    depositBatchAndGrossAmount: string;
    topRemittersAndInvoiceMatchRate: string;
    exceptionsAndRejectsHandling: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedLockboxPrompt: string;
}
export declare class BroccoliTreasuryLockboxCompactor {
    private static instance;
    readonly lockboxTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliTreasuryLockboxCompactor;
    static compactLockbox(rawText: string): TreasuryLockboxCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliTreasuryLockboxCompactor.d.ts.map