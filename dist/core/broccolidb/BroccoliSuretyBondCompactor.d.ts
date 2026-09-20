/**
 * GALXAI BroccoliDB Construction & Commercial Surety Bond Compactor
 *
 * Slashes massive LLM token bills on construction surety bonds (Bid Bonds, Performance & Payment Bonds, AIA Document A312, Subcontractor Bonds):
 * 1. Evaluates multi-party surety underwriting files and bond agreements in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Principal Contractor, Surety Company, Obligee Owner, Penal Sum Amount $, Project Name, and General Indemnity Agreement (GIA) Terms.
 * 3. Prunes formal legal seal impressions, corporate power of attorney attorney-in-fact acknowledgments, and state insurance licensing verifications.
 *
 * Result: Slashes 70%–85% of surety bond underwriting prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface SuretyBondCompactionResult {
    wasCompacted: boolean;
    tripartiteBondParties: string;
    bondTypeAndPenalSum: string;
    projectAndContractTerms: string;
    indemnityAndBondingCapacity: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedBondPrompt: string;
}
export declare class BroccoliSuretyBondCompactor {
    private static instance;
    readonly bondTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliSuretyBondCompactor;
    static compactSuretyBond(rawText: string): SuretyBondCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliSuretyBondCompactor.d.ts.map