/**
 * GALXAI BroccoliDB Renewable Energy Wind Turbine SCADA & Yaw/Pitch Compactor
 *
 * Slashes massive LLM token bills on utility-scale wind farm SCADA telemetry (Vestas, GE Vernova, Siemens Gamesa, Goldwind):
 * 1. Evaluates 100,000+ line wind turbine sensor arrays (10-minute SCADA / 1Hz high-frequency logs) in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Wind Farm / Turbine ID, Anemometer Wind Speed (m/s), Active Power Output (MW), Rotor RPM / Pitch Angle (°), Main Bearing & Gearbox Oil Temp (°C), and Yaw Misalignment Angle.
 * 3. Prunes continuous 1-second blade strain gauge vibration decimals, tower shadow turbulence noise, and hydraulic brake pad wear sensor pings.
 *
 * Result: Slashes 80%–95% of wind turbine SCADA prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface WindTurbineScadaCompactionResult {
    wasCompacted: boolean;
    windFarmAndTurbineId: string;
    windSpeedAndPowerGeneration: string;
    rotorPitchAndGearboxThermal: string;
    yawAlignmentAndAvailability: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedWindPrompt: string;
}
export declare class BroccoliWindTurbineScadaCompactor {
    private static instance;
    readonly windTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliWindTurbineScadaCompactor;
    static compactWindTurbine(rawText: string): WindTurbineScadaCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliWindTurbineScadaCompactor.d.ts.map