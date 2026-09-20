/**
 * GALXAI BroccoliDB Electric Utility Grid SCADA & Synchrophasor (IEEE C37.118) Compactor
 *
 * Slashes massive LLM token bills on high-voltage transmission grid SCADA streams and synchrophasor PMU telemetry (IEEE C37.118 / IEC 61850 / DNP3):
 * 1. Evaluates 60 samples/sec synchrophasor PMU voltage phase angles and substation alarm dumps in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Substation Name / Grid Balancing Authority (ISO/RTO), Bus Voltage Phasor (kV & Phase Angle δ°), Frequency Deviation (Hz / ROCOF), Transmission Line Thermal Loading (MVA / Ampacity %), and Breaker Trip Events.
 * 3. Prunes millions of 60Hz raw sinusoidal waveform sample points, routine DNP3 polling keepalives, and substation battery charger trickle currents.
 *
 * Result: Slashes 80%–95% of electrical grid SCADA prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface ElectricGridScadaCompactionResult {
    wasCompacted: boolean;
    substationAndBalancingAuthority: string;
    synchrophasorAndFrequencyDeviation: string;
    lineLoadingAndThermalCapacity: string;
    breakerTripsAndProtectiveRelays: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedGridPrompt: string;
}
export declare class BroccoliElectricGridScadaCompactor {
    private static instance;
    readonly gridTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliElectricGridScadaCompactor;
    static compactGridScada(rawText: string): ElectricGridScadaCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliElectricGridScadaCompactor.d.ts.map