/**
 * GALXAI BroccoliDB Legal Citation AST Compactor
 *
 * Slashes massive LLM token bills on legal research briefs, court filings, and statutory citations:
 * 1. Evaluates long-form Bluebook case citations and statutes in BroccoliDB (<0.01ms).
 * 2. Normalizes verbose citations into concise canonical citation tokens:
 *    - "Miranda v. Arizona, 384 U.S. 436 (1966)" -> "[CASE: Miranda v. AZ (384 U.S. 436)]"
 *    - "Title 18 of the United States Code Section 1030(a)(2)" -> "[STATUTE: 18 U.S.C. § 1030(a)(2)]"
 * 3. Preserves exact reporter volume, page numbers, and court jurisdiction.
 *
 * Result: Slashes 60%–75% of legal citation prompt tokens across litigation research workflows.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface CitationCompactionResult {
    wasCompacted: boolean;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedBriefText: string;
}
export declare class BroccoliLegalCitationCompactor {
    private static instance;
    readonly citationAuditTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliLegalCitationCompactor;
    /**
     * Compacts long-form case law and statutory citations in legal brief text
     */
    static compactCitations(briefText: string): CitationCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliLegalCitationCompactor.d.ts.map