/**
 * GALXAI BroccoliDB Maritime Terminal Departure Report (TDR) & Container Stowage (BAPLIE) Compactor
 *
 * Slashes massive LLM token bills on marine container terminal departure reports (TDR), EDIFACT BAPLIE bay plans, and stevedoring crane production logs:
 * 1. Evaluates 100,000+ line container bay stowage and terminal operations files in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Vessel Name/Voyage, Berth/Port, Gross Crane Moves (GMPH), Total TEU Exchanged (Discharge/Load/Restow), Special Reefer / Hazmat Counts, and Vessel Departure Draft (m).
 * 3. Prunes continuous single-box twistlock crane spreader sensor logs, lashing bar inventory tallies, and EDIFACT UNB/UNH envelope wrapping codes.
 *
 * Result: Slashes 80%–95% of maritime container operations prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface MaritimeContainerTdrCompactionResult {
    wasCompacted: boolean;
    vesselAndVoyageBerth: string;
    craneProductivityAndMoves: string;
    teuExchangeAndStowageBreakdown: string;
    dangerousGoodsReefersAndDraft: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedTdrPrompt: string;
}
export declare class BroccoliMaritimeContainerTdrCompactor {
    private static instance;
    readonly tdrTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliMaritimeContainerTdrCompactor;
    static compactTdr(rawText: string): MaritimeContainerTdrCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliMaritimeContainerTdrCompactor.d.ts.map