/**
 * GALXAI BroccoliDB Master Services Agreement (MSA) & B2B Contract Compactor
 *
 * Slashes massive LLM token bills on enterprise SaaS MSAs, B2B cloud terms, and SLA contracts:
 * 1. Evaluates 40+ page enterprise contracts in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Provider/Customer, SLA Availability, Limitation of Liability Cap, Indemnification Carve-outs, and Governing Law.
 * 3. Prunes formal WHEREAS recitals, severability clauses, counterparts execution, and boilerplate notices text.
 *
 * Result: Slashes 70%–85% of contract review prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface MsaCompactionResult {
    wasCompacted: boolean;
    contractParties: string;
    slaAvailabilityAndCredits: string;
    liabilityCapsAndCarveouts: string;
    indemnityAndGoverningLaw: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedMsaPrompt: string;
}
export declare class BroccoliMsaCompactor {
    private static instance;
    readonly msaTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliMsaCompactor;
    static compactMsa(rawText: string): MsaCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliMsaCompactor.d.ts.map