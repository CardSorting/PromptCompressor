/**
 * GALXAI BroccoliDB Pharmaceutical Cold Chain & Perishable IoT Telemetry Compactor
 *
 * Slashes massive LLM token bills on refrigerated pharmaceutical cold chain sensor logs (Sensitech, TempTale, Controlant, Emerson Cargo Solutions):
 * 1. Evaluates 100,000+ line temperature/humidity IoT data logger streams in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Shipment ID, Product (Vaccine / Biologic / Produce), Target Temp Range (e.g. +2°C to +8°C / -80°C Ultra-Cold), Mean Kinetic Temperature (MKT °C), Temperature Excursion Duration (mins), and Quality Stability Disposition.
 * 3. Prunes continuous 1-minute normal in-range temperature logs, cellular modem battery pings, and NIST calibration certificates.
 *
 * Result: Slashes 80%–95% of pharmaceutical cold chain prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface ColdChainIotCompactionResult {
    wasCompacted: boolean;
    shipmentAndBiologicProduct: string;
    temperatureSpecificationAndMkt: string;
    thermalExcursionsAndAlarms: string;
    productStabilityAndQaDisposition: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedColdChainPrompt: string;
}
export declare class BroccoliColdChainIotCompactor {
    private static instance;
    readonly coldTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliColdChainIotCompactor;
    static compactColdChain(rawText: string): ColdChainIotCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliColdChainIotCompactor.d.ts.map