/**
 * GALXAI BroccoliDB ACORD Commercial Insurance Certificate Compactor
 *
 * Slashes massive LLM token bills on commercial insurance underwriting, broker swarms, and compliance desks:
 * 1. Evaluates ACORD 25 Certificate of Liability & ACORD 125/126 Dec Sheets in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Named Insured, General Liability Limits, Umbrella/Workers Comp, and Endorsement status.
 * 3. Prunes NAIC carrier codes, statutory cancellation disclaimers, certificate holder legalese, and signature blocks.
 *
 * Result: Slashes 70%–85% of ACORD insurance prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface AcordCompactionResult {
    wasCompacted: boolean;
    namedInsuredAndPeriod: string;
    generalLiabilityLimits: string;
    excessAndWorkersComp: string;
    endorsementsStatus: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedAcordPrompt: string;
}
export declare class BroccoliAcordCompactor {
    private static instance;
    readonly acordAuditTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliAcordCompactor;
    /**
     * Compacts raw ACORD 25 Certificate of Insurance or Policy Dec Sheet
     */
    static compactAcord(rawAcordText: string): AcordCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliAcordCompactor.d.ts.map