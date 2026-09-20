/**
 * GALXAI BroccoliDB Non-Disclosure Agreement (NDA) Negotiated Term Compactor
 *
 * Slashes massive LLM token bills on legal M&A due diligence, vendor onboarding, and contract swarms:
 * 1. Evaluates multi-page Mutual and Unilateral NDAs in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly the 4 key negotiated terms (Term duration, Directionality, Non-solicitation, Governing law).
 * 3. Prunes 8+ pages of standard boilerplate definitions, standard injunctive relief clauses, and notice address lists.
 *
 * Result: Slashes 70%–85% of legal NDA contract review prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface NdaCompactionResult {
    wasCompacted: boolean;
    termDuration: string;
    directionality: string;
    governingLaw: string;
    hasNonSolicit: boolean;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedNdaPrompt: string;
}
export declare class BroccoliNdaCompactor {
    private static instance;
    readonly ndaAuditTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliNdaCompactor;
    /**
     * Compacts raw NDA contract text into a structured negotiated term matrix
     */
    static compactNda(rawNdaText: string): NdaCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliNdaCompactor.d.ts.map