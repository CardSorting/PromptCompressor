/**
 * GALXAI BroccoliDB Surface Mining Fleet Dispatch & Telemetry (Modular / MineStar) Compactor
 *
 * Slashes massive LLM token bills on open-pit surface mining fleet management systems and heavy haul truck telemetry (Modular DISPATCH, Cat MineStar, Komatsu FrontRunner):
 * 1. Evaluates 50,000+ line haul truck dispatch cycles and payload sensor streams in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Mine Site / Fleet Unit ID, Equipment Model (Cat 797F / Komatsu 930E), Payload Tonnage (Tons / Target payload %), Cycle Times (Queue/Spot/Load/Haul/Dump mins), TKPH (Ton-Kilometer Per Hour) Tire Strain, and Fuel Burn Rate (L/hr).
 * 3. Prunes continuous 1-second GPS haul road coordinate breadcrumbs, strut suspension pressure sensor chatter, and hydraulic oil pump keepalives.
 *
 * Result: Slashes 80%–95% of mining fleet telemetry prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface MiningFleetCompactionResult {
    wasCompacted: boolean;
    mineSiteAndHaulTruck: string;
    payloadTonnageAndTargetCompliance: string;
    haulCycleTimingAndProductivity: string;
    tireTkphAndEngineTelemetry: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedMiningPrompt: string;
}
export declare class BroccoliMiningFleetCompactor {
    private static instance;
    readonly miningTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliMiningFleetCompactor;
    static compactMiningFleet(rawText: string): MiningFleetCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliMiningFleetCompactor.d.ts.map