/**
 * GALXAI BroccoliDB Insurance Subrogation Demand & Inter-Company Arbitration Compactor
 *
 * Slashes massive LLM token bills on property/casualty insurance subrogation demand packages and Arbitration Forums (AF) filings:
 * 1. Evaluates 50+ page subrogation demand files in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Subrogating Carrier, Adverse Carrier/Tortfeasor, Liability Theory (Comparative Fault %), Paid Damages Ledger $, and Subrogation Demand Amount.
 * 3. Prunes duplicate body shop invoices, rental car agreement fine print, and police department records request receipts.
 *
 * Result: Slashes 75%–90% of insurance subrogation prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface SubrogationDemandCompactionResult {
    wasCompacted: boolean;
    subrogatingAndAdverseCarriers: string;
    liabilityTheoryAndFaultRatio: string;
    paidDamagesLedgerBreakdown: string;
    subrogationDemandAndArbitration: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedSubroPrompt: string;
}
export declare class BroccoliSubrogationDemandCompactor {
    private static instance;
    readonly subroTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliSubrogationDemandCompactor;
    static compactSubrogation(rawText: string): SubrogationDemandCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliSubrogationDemandCompactor.d.ts.map