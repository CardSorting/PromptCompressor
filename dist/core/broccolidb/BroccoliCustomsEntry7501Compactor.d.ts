/**
 * GALXAI BroccoliDB International Trade & US Customs Entry Summary (CBP Form 7501) Compactor
 *
 * Slashes massive LLM token bills on US Customs and Border Protection (CBP Form 7501) import entry declarations and ACE ABI electronic filings:
 * 1. Evaluates multi-line customs import entries in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Importer of Record (IOR), Port of Entry, Entry Type (01 Consumption / 06 FTZ), Harmonized Tariff Schedule (HTS 10-digit codes), Entered Value $, Duty/Tax/Merchandise Processing Fees (MPF), and Section 301/232 Tariffs.
 * 3. Prunes repetitive CBP filing code field numbers, bond company corporate surety seals, and commercial invoice packing slip details.
 *
 * Result: Slashes 75%–90% of customs brokerage prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface CustomsEntry7501CompactionResult {
    wasCompacted: boolean;
    importerAndPortOfEntry: string;
    htsClassificationAndCountryOfOrigin: string;
    enteredValueAndTariffBreakdown: string;
    customsLiquidationAndPgaStatus: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedCbpPrompt: string;
}
export declare class BroccoliCustomsEntry7501Compactor {
    private static instance;
    readonly cbpTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliCustomsEntry7501Compactor;
    static compactCbp7501(rawText: string): CustomsEntry7501CompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliCustomsEntry7501Compactor.d.ts.map