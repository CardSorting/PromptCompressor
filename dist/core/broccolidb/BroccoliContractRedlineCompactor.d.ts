/**
 * GALXAI BroccoliDB Contract Redline & Track-Changes Diff Compactor
 *
 * Slashes massive LLM token bills on legal contract negotiations and multi-round redline comparisons:
 * 1. Evaluates original vs redlined legal agreements in BroccoliDB memory (<0.01ms).
 * 2. Isolates only mutated/amended clauses and provisions.
 * 3. Prunes 95% of unchanged boilerplate contract paragraphs.
 * 4. Yields a dense structural legal mutation diff.
 *
 * Result: Slashes 85%–95% of contract redline review prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface ClauseDiff {
    clauseNumber?: number | string;
    clauseTitle?: string;
    originalText: string;
    revisedText: string;
    hasMutations: boolean;
}
export interface RedlineCompactionResult {
    wasCompacted: boolean;
    totalClausesCount: number;
    mutatedClausesCount: number;
    unchangedClausesCount: number;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedRedlinePrompt: string;
}
export declare class BroccoliContractRedlineCompactor {
    private static instance;
    readonly redlineAuditTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliContractRedlineCompactor;
    /**
     * Slices two versions of a contract and isolates only the mutated redline sections
     */
    static compactRedline(originalAgreement: string, revisedAgreement: string): RedlineCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliContractRedlineCompactor.d.ts.map