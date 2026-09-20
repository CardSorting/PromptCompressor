/**
 * GALXAI BroccoliDB Commercial Nuclear Power Plant Safety Parameter Display (SPDS) Compactor
 *
 * Slashes massive LLM token bills on commercial nuclear power plant (PWR / BWR) control room Safety Parameter Display System (SPDS) telemetry and NRC Event Notifications (10 CFR 50.72):
 * 1. Evaluates 100,000+ line primary coolant loop and reactor protection telemetry in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Nuclear Station / Unit, Reactor Thermal Power (MWth / % Rated), Reactor Coolant System (RCS) Pressure (psig) & Avg Temp (Tavg °F), Pressurizer Level %, Containment Pressure (psig), and Emergency Core Cooling System (ECCS) Readiness.
 * 3. Prunes continuous 1-second incore neutron detector flux oscillation logs, turbine hall vibration harmonics, and security fence infrared beam heartbeats.
 *
 * Result: Slashes 80%–95% of nuclear power plant SPDS telemetry prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface NuclearPlantSafetyCompactionResult {
    wasCompacted: boolean;
    nuclearPlantAndReactorUnit: string;
    reactorThermalPowerAndNeutronFlux: string;
    rcsPressureAndCoolantTemperatures: string;
    containmentAndEccsReadiness: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedNuclearPrompt: string;
}
export declare class BroccoliNuclearPlantSafetyCompactor {
    private static instance;
    readonly nukeTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliNuclearPlantSafetyCompactor;
    static compactNuclearSpds(rawText: string): NuclearPlantSafetyCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliNuclearPlantSafetyCompactor.d.ts.map