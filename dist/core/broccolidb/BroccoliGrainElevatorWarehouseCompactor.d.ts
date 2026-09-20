/**
 * GALXAI BroccoliDB Agriculture & Grain Elevator Electronic Warehouse Receipt (EWR) Compactor
 *
 * Slashes massive LLM token bills on USDA electronic warehouse receipts (EWR), grain grading certificates, and commodity elevator scale tickets:
 * 1. Evaluates multi-car grain elevator scale tickets and USDA FGIS inspection sheets in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Elevator Facility/Location, Commodity (US No. 2 Yellow Corn / Hard Red Winter Wheat), Gross/Tare/Net Bushels (bu), Moisture %, Test Weight (lbs/bu), Foreign Material (FM %), and Total Damage %.
 * 3. Prunes grain elevator safety dust hazard warnings, grain probe mechanical arm hydraulic logs, and state warehouse licensing statutory text.
 *
 * Result: Slashes 70%–85% of grain warehouse receipt prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface GrainElevatorWarehouseCompactionResult {
    wasCompacted: boolean;
    elevatorAndWarehouseReceipt: string;
    commodityAndVolumeBushels: string;
    fgisGradingAndQualityFactors: string;
    discountScheduleAndStorageSettlement: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedGrainPrompt: string;
}
export declare class BroccoliGrainElevatorWarehouseCompactor {
    private static instance;
    readonly grainTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliGrainElevatorWarehouseCompactor;
    static compactGrainReceipt(rawText: string): GrainElevatorWarehouseCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliGrainElevatorWarehouseCompactor.d.ts.map