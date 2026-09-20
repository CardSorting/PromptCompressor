/**
 * GALXAI BroccoliDB International Commercial Arbitration & Award Compactor
 *
 * Slashes massive LLM token bills on cross-border arbitration awards (ICC, UNCITRAL, LCIA, AAA-ICDR):
 * 1. Evaluates 150+ page final arbitral awards in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Case Number, Tribunal Composition, Governing Substantive Law, Core Liability Determinations, and Damages Awarded.
 * 3. Prunes procedural hearing logs, procedural order recitals, and lengthy counsel appearance rosters.
 *
 * Result: Slashes 75%–90% of arbitral award prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface ArbitrationAwardCompactionResult {
    wasCompacted: boolean;
    tribunalAndCase: string;
    substantiveLawAndSeat: string;
    liabilityDetermination: string;
    monetaryAwardSummary: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedAwardPrompt: string;
}
export declare class BroccoliArbitrationAwardCompactor {
    private static instance;
    readonly awardTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliArbitrationAwardCompactor;
    static compactArbitrationAward(rawText: string): ArbitrationAwardCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliArbitrationAwardCompactor.d.ts.map