/**
 * GALXAI BroccoliDB Railroad Intermodal & Freight EDI 404 Waybill Compactor
 *
 * Slashes massive LLM token bills on North American railroad EDI 404 Bill of Lading / Waybill transactions (BNSF, Union Pacific, CSX, Norfolk Southern, CN):
 * 1. Evaluates thousands of railcar interchange waybill lines in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Origin / Destination Carrier Rule 260 Junctions, Railcar Initial & Number (e.g. TTX 948201 / BNSF 4920), STCC Code (7-digit commodity code), Gross Weight (lbs/tons), Route junctions, and Billing Party.
 * 3. Prunes millions of raw EDI X12 404 loop wrappers, repetitive line item padding spaces, and railroad rate tariff rulebook disclaimers.
 *
 * Result: Slashes 80%–95% of railroad freight EDI prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface Edi404RailWaybillCompactionResult {
    wasCompacted: boolean;
    railwaybillAndEquipment: string;
    stccCommodityAndTonnage: string;
    interlineRoutingAndJunctions: string;
    freightChargesAndBillingParty: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedRailPrompt: string;
}
export declare class BroccoliEdi404RailWaybillCompactor {
    private static instance;
    readonly railTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliEdi404RailWaybillCompactor;
    static compactEdi404(rawText: string): Edi404RailWaybillCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliEdi404RailWaybillCompactor.d.ts.map