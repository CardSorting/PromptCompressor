/**
 * GALXAI BroccoliDB Real Estate Settlement & Closing Statement Compactor
 *
 * Slashes massive LLM token bills on mortgage underwriting, title insurance swarms, and closing bots:
 * 1. Evaluates multi-page ALTA and HUD-1 Settlement Statements in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly the 4 key transaction figures (Purchase Price, Loan Amount, Cash to Close, Settlement Date).
 * 3. Prunes 50+ line items of micro notary fees, courier charges, prorated monthly county taxes, and recording fees.
 *
 * Result: Slashes 75%–85% of real estate closing and settlement statement prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface SettlementCompactionResult {
    wasCompacted: boolean;
    purchasePrice: string;
    loanAmount: string;
    cashToClose: string;
    settlementDate: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedSettlementPrompt: string;
}
export declare class BroccoliSettlementCompactor {
    private static instance;
    readonly settlementAuditTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliSettlementCompactor;
    /**
     * Compacts raw settlement statement text into a structured closing matrix
     */
    static compactSettlement(rawSettlementText: string): SettlementCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliSettlementCompactor.d.ts.map