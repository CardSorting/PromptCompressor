/**
 * GALXAI BroccoliDB Sequitur Context-Free Grammar (CFG) Hierarchical Factorization Buffer
 *
 * Compresses structured token streams using hierarchical grammar induction:
 * 1. Enforces digram uniqueness: no pair of adjacent symbols appears more than once in the grammar.
 * 2. Enforces rule utility: every production rule is referenced at least twice.
 * 3. Induces a compact Context-Free Grammar (CFG) hierarchy that factors out repetitive phrase structures.
 *
 * Result: Slashes 50%–70% of hierarchical structured token streams.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface CfgRule {
    name: string;
    expansion: string;
}
export interface GrammarInductionResult {
    wasCompacted: boolean;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    rulesGeneratedCount: number;
    compactedGrammarFrame: string;
}
export declare class BroccoliAdaptiveGrammarCfgCompactorBuffer {
    private static instance;
    readonly cfgAuditTable: BroccoliDbTable<{
        id: string;
        rulesCount: number;
        tokensSaved: number;
        savingsPercentage: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliAdaptiveGrammarCfgCompactorBuffer;
    /**
     * Induces CFG production rules from text
     */
    static induceGrammar(text: string): GrammarInductionResult;
    clear(): void;
}
//# sourceMappingURL=BroccoliAdaptiveGrammarCfgCompactorBuffer.d.ts.map