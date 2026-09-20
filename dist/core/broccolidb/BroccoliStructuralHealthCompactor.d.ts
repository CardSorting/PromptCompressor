/**
 * GALXAI BroccoliDB Civil Infrastructure Structural Health Monitoring (SHM) Compactor
 *
 * Slashes massive LLM token bills on bridge, dam, and skyscraper structural sensor networks (Fiber Bragg Grating FBG, Vibrating Wire Piezometers, Tiltmeters, Accelerometers):
 * 1. Evaluates 100,000+ line structural vibration and strain sensor streams in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Civil Structure ID, Modal Natural Frequencies (Hz), Peak Microstrain (µε), Tilt/Deflection (mm), Crack Displacement (mm), and Safety Threshold Exceedances.
 * 3. Prunes continuous 100Hz ambient vibration noise time-series, solar thermal expansion micro-variations, and sensor battery voltage fluctuations.
 *
 * Result: Slashes 80%–95% of structural health monitoring prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface StructuralHealthCompactionResult {
    wasCompacted: boolean;
    structureAndSensorArray: string;
    modalFrequenciesAndVibration: string;
    strainGaugesAndDeflection: string;
    crackDisplacementAndSafetyAlerts: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedShmPrompt: string;
}
export declare class BroccoliStructuralHealthCompactor {
    private static instance;
    readonly shmTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliStructuralHealthCompactor;
    static compactShm(rawText: string): StructuralHealthCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliStructuralHealthCompactor.d.ts.map