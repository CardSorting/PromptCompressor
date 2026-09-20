/**
 * GALXAI BroccoliDB Livestock Traceability & USDA Animal Disease Traceability (ADT / 840 RFID) Compactor
 *
 * Slashes massive LLM token bills on livestock movement manifests, electronic Certificate of Veterinary Inspection (eCVI), and USDA 840 RFID ear tag records:
 * 1. Evaluates 10,000+ head livestock RFID scans and interstate health certificates in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Consignor/Consignee Premises ID (PIN), Species/Class (Bovine Beef Feeders / Swine / Dairy), Official USDA 840 RFID Tag Range, Veterinary Disease Testing (Brucellosis/Tuberculosis), and State Movement Permit.
 * 3. Prunes livestock trailer disinfectant wash certificates, driver commercial CDL endorsements, and generic state veterinary board charter preambles.
 *
 * Result: Slashes 75%–90% of livestock traceability prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface LivestockTraceabilityCompactionResult {
    wasCompacted: boolean;
    consignorAndPremisesId: string;
    livestockSpeciesAndHeadCount: string;
    usdaRfidTagsAndVeterinaryTesting: string;
    movementPermitAndAnimalHealthStatus: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedLivestockPrompt: string;
}
export declare class BroccoliLivestockTraceabilityCompactor {
    private static instance;
    readonly liveTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliLivestockTraceabilityCompactor;
    static compactLivestock(rawText: string): LivestockTraceabilityCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliLivestockTraceabilityCompactor.d.ts.map