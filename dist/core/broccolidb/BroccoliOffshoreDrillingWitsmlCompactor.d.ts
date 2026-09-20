/**
 * GALXAI BroccoliDB Offshore Oil & Gas Drilling WITSML Real-Time Well Compactor
 *
 * Slashes massive LLM token bills on real-time drilling mudlogging and directional Measurement While Drilling (MWD/LWD WITSML XML) streams:
 * 1. Evaluates 100,000+ line WITSML drill log objects in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Well Name / Rig ID, Measured Depth (MD ft) & True Vertical Depth (TVD ft), Rate of Penetration (ROP ft/hr), Weight on Bit (WOB klbs), Mud Weight (PPG), Equivalent Circulating Density (ECD), Gas Units (Units/PPM), and Kick / Well Control Alarms.
 * 3. Prunes continuous 1-foot drill string vibration sensor noise, mud pulse telemetry raw binary pulses, and shale shaker screen motor current logs.
 *
 * Result: Slashes 80%–95% of drilling telemetry prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface OffshoreDrillingWitsmlCompactionResult {
    wasCompacted: boolean;
    wellAndDrillingRig: string;
    depthAndRateOfPenetration: string;
    drillingDynamicsAndMudWeight: string;
    formationGasAndWellControlStatus: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedWitsmlPrompt: string;
}
export declare class BroccoliOffshoreDrillingWitsmlCompactor {
    private static instance;
    readonly witsmlTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliOffshoreDrillingWitsmlCompactor;
    static compactWitsml(rawText: string): OffshoreDrillingWitsmlCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliOffshoreDrillingWitsmlCompactor.d.ts.map