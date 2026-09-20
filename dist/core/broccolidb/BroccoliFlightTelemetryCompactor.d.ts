/**
 * GALXAI BroccoliDB Flight Operations Quality Assurance (FOQA) FDR Telemetry Compactor
 *
 * Slashes massive LLM token bills on commercial aircraft Flight Data Recorder (FDR / FOQA) binary and CSV telemetry streams:
 * 1. Evaluates 1,000+ flight parameter sensor dumps (64Hz) in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Flight ID/Airframe, Flight Phase Exceedances (Unstabilized Approach / High Sink Rate), Peak Vertical G-Forces, Max Bank Angle, Thrust Lever Angles, and Autopilot Disconnects.
 * 3. Prunes continuous sub-second pitot-static pressure sensor noise, inertial gyro drift logs, and cabin temperature cycles.
 *
 * Result: Slashes 80%–95% of FOQA flight telemetry prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface FlightTelemetryCompactionResult {
    wasCompacted: boolean;
    flightAndAirframeProfile: string;
    flightSafetyExceedances: string;
    kinematicParametersAndGForce: string;
    safetyInvestigationImpression: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedFoqaPrompt: string;
}
export declare class BroccoliFlightTelemetryCompactor {
    private static instance;
    readonly foqaTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliFlightTelemetryCompactor;
    static compactFlightTelemetry(rawText: string): FlightTelemetryCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliFlightTelemetryCompactor.d.ts.map