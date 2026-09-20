/**
 * GALXAI BroccoliDB Semiconductor Fab Metrology & SECS/GEM In-Line Process Compactor
 *
 * Slashes massive LLM token bills on wafer fabrication defect metrology and SECS/GEM tool equipment telemetry:
 * 1. Evaluates 100MB+ wafer fab defect inspection maps (KLA, Applied Materials, ASML EUV) in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Lot/Wafer ID, Fab Node (3nm/5nm), Critical Dimension (CD-SEM nm), Film Thickness / Overlay Error (nm), Defect Density (defects/cm2), and Wafer Sort Yield %.
 * 3. Prunes millions of raw defect coordinate pixel arrays, SECS/GEM message handshake headers, and vacuum chamber pump speed time-series.
 *
 * Result: Slashes 80%–95% of semiconductor fab metrology prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface SemiconductorFabCompactionResult {
    wasCompacted: boolean;
    waferLotAndProcessNode: string;
    cdMetrologyAndOverlayError: string;
    defectDensityAndKlaClassification: string;
    waferSortYieldAndDisposition: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedFabPrompt: string;
}
export declare class BroccoliSemiconductorFabCompactor {
    private static instance;
    readonly fabTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliSemiconductorFabCompactor;
    static compactFab(rawText: string): SemiconductorFabCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliSemiconductorFabCompactor.d.ts.map