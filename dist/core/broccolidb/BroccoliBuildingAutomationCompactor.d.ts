/**
 * GALXAI BroccoliDB Building Automation Systems (BAS / BACnet) & HVAC Compactor
 *
 * Slashes massive LLM token bills on commercial Building Automation System (BAS) sensor feeds and BACnet MS/TP & IP protocol dumps (Trane Tracer, Johnson Controls Metasys, Siemens Desigo):
 * 1. Evaluates 100,000+ line BACnet object property streams and HVAC sensor trends in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Facility/Building ID, BACnet Device ID, Chiller Plant COP/Load %, Air Handling Unit (AHU) Supply/Return Air Temps (°F), VAV Damper Positions %, and CO2/IAQ Exceedances (PPM).
 * 3. Prunes continuous 1-second temperature drift decimals, BACnet Who-Is / I-Am broadcast discovery storm logs, and static schedule calendar arrays.
 *
 * Result: Slashes 80%–95% of building automation HVAC prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface BuildingAutomationCompactionResult {
    wasCompacted: boolean;
    facilityAndBacnetDevice: string;
    chillerPlantAndBoilerMetrics: string;
    ahuAndVavTerminalPerformance: string;
    iaqExceedancesAndAlarms: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedBasPrompt: string;
}
export declare class BroccoliBuildingAutomationCompactor {
    private static instance;
    readonly basTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliBuildingAutomationCompactor;
    static compactBas(rawText: string): BuildingAutomationCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliBuildingAutomationCompactor.d.ts.map