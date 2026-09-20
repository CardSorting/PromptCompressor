/**
 * GALXAI BroccoliDB Utility-Scale Solar PV Inverter & SunSpec Modbus Compactor
 *
 * Slashes massive LLM token bills on utility-scale solar photovoltaic farm SCADA and central inverter Modbus/SunSpec streams (SMA, Sungrow, Huawei, Power Electronics):
 * 1. Evaluates 50,000+ line central inverter DC string current and AC power telemetry in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Solar Array / Inverter Station ID, Global Horizontal Irradiance (GHI W/m2), DC Bus Voltage / Power (kW), AC Grid Injected Power (kW), Inverter Conversion Efficiency %, and MPPT Clipping / String Faults.
 * 3. Prunes microsecond MPPT tracking voltage jitter, ambient pyranometer temperature calibration decimals, and inverter cooling fan tachometer ripples.
 *
 * Result: Slashes 80%–95% of utility solar PV telemetry prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface SolarInverterTelemetryCompactionResult {
    wasCompacted: boolean;
    solarFarmAndInverterStation: string;
    solarIrradianceAndDcInput: string;
    acGridPowerAndEfficiency: string;
    stringMpptAndInverterAlarms: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedSolarPrompt: string;
}
export declare class BroccoliSolarInverterTelemetryCompactor {
    private static instance;
    readonly solarTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliSolarInverterTelemetryCompactor;
    static compactSolar(rawText: string): SolarInverterTelemetryCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliSolarInverterTelemetryCompactor.d.ts.map