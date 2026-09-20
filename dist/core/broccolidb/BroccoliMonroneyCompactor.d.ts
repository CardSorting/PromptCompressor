/**
 * GALXAI BroccoliDB Monroney Vehicle Window Sticker & Options Compactor
 *
 * Slashes massive LLM token bills on automotive underwriting, insurance swarms, and dealership sales bots:
 * 1. Evaluates OEM Monroney window stickers and vehicle build sheets in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly the 4 critical vehicle configuration figures (VIN/Year/Make/Model, Powertrain, MSRP, Installed Packages).
 * 3. Prunes 5-star NHTSA crash test boilerplate, mandatory EPA fuel economy legalese, and standard factory equipment.
 *
 * Result: Slashes 75%–85% of vehicle window sticker and build sheet prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface MonroneyCompactionResult {
    wasCompacted: boolean;
    vehicleTitle: string;
    vin: string;
    msrpPrice: string;
    powertrain: string;
    installedPackages: string[];
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedMonroneyPrompt: string;
}
export declare class BroccoliMonroneyCompactor {
    private static instance;
    readonly monroneyAuditTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliMonroneyCompactor;
    /**
     * Compacts raw Monroney window sticker text into a structured vehicle configuration matrix
     */
    static compactMonroney(rawStickerText: string): MonroneyCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliMonroneyCompactor.d.ts.map