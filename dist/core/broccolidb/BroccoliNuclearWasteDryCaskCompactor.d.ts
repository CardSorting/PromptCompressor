/**
 * GALXAI BroccoliDB NRC 10 CFR Part 72 Spent Nuclear Fuel Dry Cask Storage & ISFSI Compactor
 *
 * Slashes massive LLM token bills on Nuclear Regulatory Commission (NRC 10 CFR 72) Independent Spent Fuel Storage Installation (ISFSI) dry cask canister loading logs:
 * 1. Evaluates 100+ page Multi-Purpose Canister (MPC) helium backfill thermal logs, vacuum drying records, and radiological surveys in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Nuclear Station / ISFSI License (e.g. SNM-2500 / CoC 1014), Cask Model (HI-STORM 100 / NUHOMS 32PTH), Canister Serial Number, Fuel Assembly Inventory (PWR / BWR Assembly IDs & Burnup GWd/MTU), Vacuum Drying Pressure (<3.0 torr for 30 min), Helium Backfill Purity & Pressure, Total Decay Heat (kW vs Limit), and Concrete Overpack Surface Dose Rates (mrem/hr).
 * 3. Prunes millions of minute-by-minute vacuum drying pump transducer sensor curves, routine health physics survey disclaimers, and NRC regulatory preamble text.
 *
 * Result: Slashes 80%–95% of nuclear waste ISFSI dry cask storage prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface NuclearWasteDryCaskCompactionResult {
    wasCompacted: boolean;
    isfsiSiteAndCanisterModel: string;
    fuelInventoryAndDecayHeat: string;
    vacuumDryingAndHeliumBackfill: string;
    radiologicalDoseAndOverpackStatus: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedCaskPrompt: string;
}
export declare class BroccoliNuclearWasteDryCaskCompactor {
    private static instance;
    readonly caskTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliNuclearWasteDryCaskCompactor;
    static compactDryCask(rawText: string): NuclearWasteDryCaskCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliNuclearWasteDryCaskCompactor.d.ts.map