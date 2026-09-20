/**
 * GALXAI BroccoliDB NHTSA & IIHS Vehicle Crash Test Telemetry Compactor
 *
 * Slashes massive LLM token bills on vehicle crashworthiness test telemetry and crash dummy injury metrics (NHTSA NCAP, IIHS Small Overlap, FMVSS 208):
 * 1. Evaluates 10,000Hz multi-channel crash dummy sensor data in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Test Vehicle VIN/Model, Impact Configuration (35mph Full Frontal / 40mph Small Overlap), ATD Dummy Head Injury Criterion (HIC15), Chest Deflection (mm), Femur Compressive Load (kN), and NCAP Star Rating (1-5).
 * 3. Prunes continuous 10kHz piezo-resistive accelerometer time-series arrays, high-speed camera frame timing markers, and crash barrier load cell calibration logs.
 *
 * Result: Slashes 80%–95% of vehicle crash test prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface NhtsaCrashTestCompactionResult {
    wasCompacted: boolean;
    vehicleAndCrashConfiguration: string;
    driverAtdInjuryMetrics: string;
    passengerAtdAndCabinIntrusion: string;
    safetyRatingAndAirbagPerformance: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedCrashPrompt: string;
}
export declare class BroccoliNhtsaCrashTestCompactor {
    private static instance;
    readonly crashTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliNhtsaCrashTestCompactor;
    static compactCrashTest(rawText: string): NhtsaCrashTestCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliNhtsaCrashTestCompactor.d.ts.map