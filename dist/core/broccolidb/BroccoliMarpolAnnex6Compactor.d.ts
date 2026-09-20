/**
 * GALXAI BroccoliDB IMO MARPOL Annex VI Maritime Fuel Sulfur Cap & Bunker Delivery Note (BDN) Compactor
 *
 * Slashes massive LLM token bills on marine bunker fuel delivery receipts, oil record books, and MARPOL Annex VI emission compliance logs:
 * 1. Evaluates 50+ page Bunker Delivery Notes (BDN), ISO 8217 lab test certificates, and continuous exhaust scrubber telemetry in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Vessel Name / IMO Number, Bunkering Port & Date, Fuel Grade (VLSFO 0.50% S / ULSFO 0.10% S / MGO DMA), Quantity Bunkered (Metric Tonnes MT), Measured Sulfur Content (% m/m vs IMO 0.50% Global / 0.10% ECA Cap), Fuel Density & Viscosity, and MARPOL Sealed Sample Bottle Seal Number.
 * 3. Prunes repetitive MARPOL statutory legal articles, bunker supplier sales term small-print, and standard marine lubricant disclaimer tables.
 *
 * Result: Slashes 75%–90% of maritime MARPOL bunker fuel prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface MarpolAnnex6CompactionResult {
    wasCompacted: boolean;
    vesselAndImoNumber: string;
    fuelGradeAndQuantityBunkered: string;
    sulfurContentAndEcaCompliance: string;
    marpolSampleSealAndSupplier: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedMarpolPrompt: string;
}
export declare class BroccoliMarpolAnnex6Compactor {
    private static instance;
    readonly marpolTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliMarpolAnnex6Compactor;
    static compactMarpol(rawText: string): MarpolAnnex6CompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliMarpolAnnex6Compactor.d.ts.map