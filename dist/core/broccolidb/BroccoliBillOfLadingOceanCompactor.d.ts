/**
 * GALXAI BroccoliDB Ocean Sea Waybill & Multimodal Bill of Lading (B/L / Hague-Visby / Hamburg Rules) Compactor
 *
 * Slashes massive LLM token bills on maritime Ocean Bills of Lading (B/L), Sea Waybills, and negotiable Letters of Credit (UCP 600) transport documents:
 * 1. Evaluates 50+ page negotiable maritime Bills of Lading, multicarrier intermodal interchange agreements, and container manifests in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Bill of Lading Number (B/L No.), Ocean Carrier (e.g. Maersk / MSC / CMA CGM), Shipper / Consignee (To Order of Bank / Endorsed), Vessel & Voyage, Port of Loading (POL) & Port of Discharge (POD), Container & Seal Numbers, Cargo Description & Gross Weight, Freight Terms (Prepaid / Collect), and Clean on Board Endorsement.
 * 3. Prunes micro-print carrier terms and conditions on reverse side of B/L (Hague-Visby package limitations, COGSA $500 per package rules, general average clauses).
 *
 * Result: Slashes 75%–90% of ocean Bill of Lading prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface BillOfLadingOceanCompactionResult {
    wasCompacted: boolean;
    blNumberAndCarrier: string;
    shipperConsigneeNotify: string;
    vesselVoyageAndRouting: string;
    cargoDescriptionFreightAndCleanOnBoard: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedBlPrompt: string;
}
export declare class BroccoliBillOfLadingOceanCompactor {
    private static instance;
    readonly blTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliBillOfLadingOceanCompactor;
    static compactOceanBl(rawText: string): BillOfLadingOceanCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliBillOfLadingOceanCompactor.d.ts.map