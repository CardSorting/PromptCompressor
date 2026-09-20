/**
 * GALXAI BroccoliDB Real Estate Title & ALTA Settlement Statement Compactor
 *
 * Slashes massive LLM token bills on ALTA title settlement statements, escrow closing ledgers, and HUD-1 forms:
 * 1. Evaluates multi-column escrow settlement statements in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Buyer/Seller, Escrow Officer/Title Company, Contract Sales Price $, Loan Payoffs, Prorations (Taxes/HOA), and Net Proceeds to Seller / Due from Buyer $.
 * 3. Prunes repetitive title policy exception Schedule B preambles, notary acknowledgment templates, and county recorder fee schedules.
 *
 * Result: Slashes 75%–90% of title and escrow settlement prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface AltaSettlementCompactionResult {
    wasCompacted: boolean;
    closingPartiesAndEscrow: string;
    financialConsiderationAndPayoffs: string;
    prorationsAndTitleCharges: string;
    netSettlementProceeds: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedAltaPrompt: string;
}
export declare class BroccoliAltaSettlementCompactor {
    private static instance;
    readonly altaTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliAltaSettlementCompactor;
    static compactAltaSettlement(rawText: string): AltaSettlementCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliAltaSettlementCompactor.d.ts.map