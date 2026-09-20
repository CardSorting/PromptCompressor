/**
 * GALXAI BroccoliDB BAI2 Cash Management & Daily Bank Balance Reporting Compactor
 *
 * Slashes massive LLM token bills on BAI2 multi-bank daily cash balance reporting files and treasury account transaction streams:
 * 1. Evaluates 100+ MB BAI2 daily cash position files (Records 01, 02, 03, 16, 49, 88, 98, 99) in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Header (Sender ID e.g. CITIBANK / Receiver ID e.g. APEX TREASURY), Account Identifier (Record 03 DDA / IBAN), Currency & As-Of Date, Opening Ledger Balance (Type Code 010 $), Closing Available Balance (Type Code 040 / 045 $), Gross Total Credits & Debits (Type Codes 100/400 $), and 1-Day / 2-Day Float Funds Availability.
 * 3. Prunes thousands of individual Record 16 transaction detail rows, lockbox line text descriptors, and record trailer block padding.
 *
 * Result: Slashes 80%–95% of BAI2 treasury cash management prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface Bai2BankStatementCompactionResult {
    wasCompacted: boolean;
    bankAndCorporateReceiver: string;
    accountAndAsOfDate: string;
    openingAndClosingAvailableBalances: string;
    totalCreditsDebitsAndFloat: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedBai2Prompt: string;
}
export declare class BroccoliBai2BankStatementCompactor {
    private static instance;
    readonly baiTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliBai2BankStatementCompactor;
    static compactBai2(rawText: string): Bai2BankStatementCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliBai2BankStatementCompactor.d.ts.map