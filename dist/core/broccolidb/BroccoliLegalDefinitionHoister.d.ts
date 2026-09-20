/**
 * GALXAI BroccoliDB Legal Definition Hoister & Scoped Definition Pruner
 *
 * Slashes massive LLM token bills on statutory compliance, regulatory codes (GDPR, CCPA, SEC), and contract preambles:
 * 1. Indexes legal definition registries in BroccoliDB memory (<0.01ms).
 * 2. Dynamically senses terms used in the legal inquiry (e.g. "personal data", "controller").
 * 3. Hoists ONLY the required definitions and prunes 80%–90% of unrelated statutory definition preambles.
 *
 * Result: Slashes 80%–90% of regulatory compliance prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface DefinitionEntry {
    term: string;
    definition: string;
}
export interface DefinitionPruningResult {
    wasPruned: boolean;
    totalDefinitionsCount: number;
    retainedDefinitionsCount: number;
    prunedDefinitionsCount: number;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    scopedDefinitionsPreamble: string;
}
export declare class BroccoliLegalDefinitionHoister {
    private static instance;
    readonly defAuditTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliLegalDefinitionHoister;
    /**
     * Hoists only definitions referenced in the query or substantive clauses
     */
    static hoistRelevantDefinitions(queryOrClause: string, allDefinitions: DefinitionEntry[]): DefinitionPruningResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliLegalDefinitionHoister.d.ts.map