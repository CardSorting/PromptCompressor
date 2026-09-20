/**
 * GALXAI BroccoliDB Clinical Dialysis & Hemodialysis Flowsheet Compactor
 *
 * Slashes massive LLM token bills on chronic renal dialysis treatment sheets and ESRD flows:
 * 1. Evaluates multi-hour hemodialysis treatment logs in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Vascular Access, Blood Flow Rate (BFR), Total Ultrafiltration (UF L), Pre/Post Weight, and Kt/V Clearance Adequacy.
 * 3. Prunes 15-minute blood pressure sensor sweeps, dialysate conductivity logs, and machine fluid heater diagnostics.
 *
 * Result: Slashes 70%–85% of dialysis EHR prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface DialysisCompactionResult {
    wasCompacted: boolean;
    accessAndDialyzer: string;
    flowRatesAndPrescription: string;
    ultrafiltrationAndWeights: string;
    clearanceAdequacyAndEvents: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedDialysisPrompt: string;
}
export declare class BroccoliDialysisFlowsheetCompactor {
    private static instance;
    readonly dialysisTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliDialysisFlowsheetCompactor;
    static compactDialysis(rawText: string): DialysisCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliDialysisFlowsheetCompactor.d.ts.map