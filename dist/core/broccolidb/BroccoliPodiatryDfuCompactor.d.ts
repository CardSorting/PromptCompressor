/**
 * GALXAI BroccoliDB Clinical Podiatry & Diabetic Foot Ulcer (DFU) Compactor
 *
 * Slashes massive LLM token bills on wound care encounter notes and diabetic lower extremity assessments:
 * 1. Evaluates multi-visit wound care clinic records in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Ulcer Anatomic Site, Wagner Grade (0-5), SVS WIfI Classification, Ankle-Brachial Index (ABI), Debridement Depth, and Offloading Modality.
 * 3. Prunes routine clinic skin hygiene instructions, standard diabetic footwear marketing blurbs, and sterile gauze package inserts.
 *
 * Result: Slashes 70%–85% of podiatry wound care prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface PodiatryDfuCompactionResult {
    wasCompacted: boolean;
    ulcerLocationAndDimensions: string;
    wagnerAndWifiClassification: string;
    vascularProfusionAndDebridement: string;
    offloadingAndWoundDressings: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedPodiatryPrompt: string;
}
export declare class BroccoliPodiatryDfuCompactor {
    private static instance;
    readonly podiatryTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliPodiatryDfuCompactor;
    static compactPodiatry(rawText: string): PodiatryDfuCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliPodiatryDfuCompactor.d.ts.map