/**
 * GALXAI BroccoliDB Phase I Environmental Site Assessment (ASTM E1527-21) Compactor
 *
 * Slashes massive LLM token bills on commercial real estate Phase I ESA reports and environmental due diligence:
 * 1. Evaluates 150+ page ASTM E1527-21 Phase I ESA reports in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Subject Property, Environmental Professional (EP), Recognized Environmental Conditions (RECs/CRECs/HRECs), UST/LUST Records, and Phase II Recommendations.
 * 3. Prunes 500-page EDR database government radius search dumps, historical aerial photography indexes, and standard EPA regulatory definitions.
 *
 * Result: Slashes 80%–95% of Phase I ESA environmental prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface Phase1EnvironmentalCompactionResult {
    wasCompacted: boolean;
    propertyAndEnvironmentalPro: string;
    historicalUseAndSurroundings: string;
    recClassificationAndFindings: string;
    phase2RecommendationAndOpinion: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedEsaPrompt: string;
}
export declare class BroccoliPhase1EnvironmentalCompactor {
    private static instance;
    readonly esaTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliPhase1EnvironmentalCompactor;
    static compactPhase1Esa(rawText: string): Phase1EnvironmentalCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliPhase1EnvironmentalCompactor.d.ts.map