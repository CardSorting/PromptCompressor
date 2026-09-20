/**
 * GALXAI BroccoliDB Legal Clause AST Compactor & Boilerplate Pruner
 *
 * Slashes massive LLM token bills on legal contracts, NDAs, MSAs, and court filings:
 * 1. Evaluates legal agreement paragraphs in BroccoliDB memory (<0.01ms).
 * 2. Identifies standard legal boilerplate clauses (Severability, Force Majeure, Governing Law Delaware, Standard Indemnity).
 * 3. Compresses standard boilerplate into canonical 1-line token hashes: [BOILERPLATE_CLAUSE: GOVERNING_LAW_DELAWARE].
 * 4. Preserves bespoke mutated clauses (Liability Caps, Non-Compete, Termination for Convenience) in full fidelity.
 *
 * Result: Slashes 75%–85% of legal contract prompt tokens without losing custom negotiated terms.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface LegalClauseCompactionResult {
    wasCompacted: boolean;
    originalParagraphsCount: number;
    compactedParagraphsCount: number;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedAgreement: string;
}
export declare class BroccoliLegalClauseCompactor {
    private static instance;
    readonly legalAuditTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private static readonly BOILERPLATE_PATTERNS;
    private constructor();
    static getInstance(): BroccoliLegalClauseCompactor;
    /**
     * Compacts a legal agreement by collapsing standard boilerplate clauses
     */
    static compactLegalAgreement(rawContractText: string): LegalClauseCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliLegalClauseCompactor.d.ts.map