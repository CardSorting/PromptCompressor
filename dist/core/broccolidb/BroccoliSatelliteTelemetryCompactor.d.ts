/**
 * GALXAI BroccoliDB Satellite Spacecraft Telemetry & Ephemeris (CCSDS) Compactor
 *
 * Slashes massive LLM token bills on low-Earth orbit (LEO/GEO) satellite telemetry packets (CCSDS Space Communications, NORAD Two-Line Element TLE, Reaction Wheel Telemetry):
 * 1. Evaluates continuous satellite ground pass telemetry downlinks in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly NORAD Satellite Catalog ID, TLE Orbital Parameters (Apogee/Perigee/Inclination), Solar Array Bus Voltage/Power (W), Reaction Wheel RPMs, and RF Downlink Link Margin (Eb/N0 dB).
 * 3. Prunes continuous 10Hz raw thermistor micro-kelvin telemetry, reaction wheel motor phase current ripples, and CCSDS packet sync markers (0x1ACFFC1D).
 *
 * Result: Slashes 80%–95% of space satellite telemetry prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface SatelliteTelemetryCompactionResult {
    wasCompacted: boolean;
    spacecraftAndNoradId: string;
    orbitalEphemerisAndTle: string;
    epsPowerAndThermalTelemetry: string;
    adcsAttitudeAndRfLinkMargin: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedSatellitePrompt: string;
}
export declare class BroccoliSatelliteTelemetryCompactor {
    private static instance;
    readonly satelliteTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliSatelliteTelemetryCompactor;
    static compactSatellite(rawText: string): SatelliteTelemetryCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliSatelliteTelemetryCompactor.d.ts.map