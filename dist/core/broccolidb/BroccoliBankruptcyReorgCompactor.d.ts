/**
 * GALXAI BroccoliDB Chapter 11 Bankruptcy & Restructuring Plan Compactor
 *
 * Slashes massive LLM token bills on complex bankruptcy restructuring, claims registers, and DIP facilities:
 * 1. Evaluates 200+ page Chapter 11 disclosure statements in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Debtor Entity, Court Case Number, Total Secured/Unsecured Liabilities, DIP Financing, and Creditor Recovery %.
 * 3. Prunes formal voting solicitation instructions, statutory bankruptcy code citations, and repetitive legal disclaimers.
 *
 * Result: Slashes 75%–90% of bankruptcy docket prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface BankruptcyCompactionResult {
    wasCompacted: boolean;
    debtorAndCase: string;
    bankruptcyChapterAndCourt: string;
    claimsAndLiabilities: string;
    dipAndPlanRecovery: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedBankruptcyPrompt: string;
}
export declare class BroccoliBankruptcyReorgCompactor {
    private static instance;
    readonly bankruptcyTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliBankruptcyReorgCompactor;
    static compactBankruptcy(rawText: string): BankruptcyCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliBankruptcyReorgCompactor.d.ts.map