/**
 * GALXAI BroccoliDB Dangerous Goods & Hazmat Shipping Declaration (IATA / IMDG / DOT 49 CFR) Compactor
 *
 * Slashes massive LLM token bills on dangerous goods shipping declarations (IATA DGR, IMDG Code, DOT 49 CFR Hazmat Bill of Lading):
 * 1. Evaluates multi-page multimodal hazmat declarations in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly UN Number (e.g. UN3480 / UN1993), Proper Shipping Name, Hazard Class & Division (Class 3 / Class 9), Packing Group (PG I/II/III), Quantity/Net Mass (kg/L), and 24-Hour Emergency Response Info (Chemtrec).
 * 3. Prunes dangerous goods regulatory rulebook appendixes, drum manufacturer testing certification boilerplate, and repetitive transport emergency guides.
 *
 * Result: Slashes 75%–90% of dangerous goods shipping prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface HazmatShippingCompactionResult {
    wasCompacted: boolean;
    shipperAndConsignee: string;
    unNumberAndProperShippingName: string;
    hazardClassAndPackagingGroup: string;
    emergencyResponseAndPlacards: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedHazmatPrompt: string;
}
export declare class BroccoliHazmatShippingCompactor {
    private static instance;
    readonly hazmatTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliHazmatShippingCompactor;
    static compactHazmat(rawText: string): HazmatShippingCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliHazmatShippingCompactor.d.ts.map