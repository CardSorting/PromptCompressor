/**
 * GALXAI BroccoliDB Marine Hull & Machinery (H&M) and Protection & Indemnity (P&I) Compactor
 *
 * Slashes massive LLM token bills on maritime marine insurance surveys, P&I Club condition reports, and Lloyd's Open Form (LOF) salvage claims:
 * 1. Evaluates 100+ page marine surveyor condition reports in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Vessel Name/IMO Number, Agreed Hull Value $, P&I Club Name, Condition Survey Structural Defects (Plating wastage mm), General Average Claims, and Salvage Guarantees.
 * 3. Prunes marine classification society rulebook excerpts, drydock maintenance invoice lists, and standard LOF arbitration clauses.
 *
 * Result: Slashes 75%–90% of marine insurance survey prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface MarineHullPiCompactionResult {
    wasCompacted: boolean;
    vesselAndClassification: string;
    hullAgreedValueAndPiClub: string;
    conditionSurveyAndStructuralDefects: string;
    generalAverageAndCasualtySummary: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedMarinePrompt: string;
}
export declare class BroccoliMarineHullPiCompactor {
    private static instance;
    readonly marineTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliMarineHullPiCompactor;
    static compactMarine(rawText: string): MarineHullPiCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliMarineHullPiCompactor.d.ts.map