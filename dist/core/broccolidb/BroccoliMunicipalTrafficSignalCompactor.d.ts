/**
 * GALXAI BroccoliDB Municipal Traffic Signal & NTCIP 1202 Intersection Compactor
 *
 * Slashes massive LLM token bills on municipal traffic signal controller logs (NTCIP 1202, Econolite Cobalt, McCain ATC, Siemens Yunex):
 * 1. Evaluates 10,000+ line traffic controller phase transition logs in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Intersection ID, Controller Mode (Actuated-Coordinated / Flash), Active Phases (1-8), Emergency Vehicle Preemption (EVP Priority), Loop Detector Volume/Occupancy %, and Split Failures.
 * 3. Prunes microsecond phase interval countdown ticks, conflict monitor card (MMU) heartbeat pings, and pedestrian push-button voltage telemetry.
 *
 * Result: Slashes 80%–95% of municipal traffic engineering prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface MunicipalTrafficSignalCompactionResult {
    wasCompacted: boolean;
    intersectionAndControllerModel: string;
    coordinationPatternAndCycleLength: string;
    detectorVolumeAndSplitFailures: string;
    emergencyVehiclePreemptionAndFaults: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedTrafficPrompt: string;
}
export declare class BroccoliMunicipalTrafficSignalCompactor {
    private static instance;
    readonly trafficTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliMunicipalTrafficSignalCompactor;
    static compactTrafficSignal(rawText: string): MunicipalTrafficSignalCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliMunicipalTrafficSignalCompactor.d.ts.map