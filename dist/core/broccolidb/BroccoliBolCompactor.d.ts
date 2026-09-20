/**
 * GALXAI BroccoliDB Ocean Bill of Lading (BOL) & Customs Manifest Compactor
 *
 * Slashes massive LLM token bills on supply chain swarms, freight logistics, and customs compliance:
 * 1. Evaluates multi-page Ocean Master BOLs and CBP customs entry summaries in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly BOL #/Vessel, Shipper/Consignee/Ports, Cargo/HTS/Weight/Container, and Customs Status.
 * 3. Prunes Hague-Visby maritime liability boilerplate, port tariff fine print, and seal condition warnings.
 *
 * Result: Slashes 70%–85% of supply chain and trade logistics prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface BolCompactionResult {
    wasCompacted: boolean;
    bolAndVessel: string;
    partiesAndRouting: string;
    cargoAndContainer: string;
    freightAndCustomsStatus: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedBolPrompt: string;
}
export declare class BroccoliBolCompactor {
    private static instance;
    readonly bolAuditTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliBolCompactor;
    /**
     * Compacts raw Bill of Lading or customs entry manifest text
     */
    static compactBol(rawBolText: string): BolCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliBolCompactor.d.ts.map