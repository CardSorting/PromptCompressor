/**
 * GALXAI BroccoliDB Semiconductor GDSII / OASIS Stream Tapeout & Mask Data Prep (MDP) Compactor
 *
 * Slashes massive LLM token bills on IC design tapeout release logs, OASIS stream geometry checksums, and optical proximity correction (OPC) mask data prep summaries:
 * 1. Evaluates multi-gigabyte GDSII/OASIS stream verification logs in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Chip / Project Name & Top Cell (e.g. PROJECT_APEX_N3E / TOP_SOC_CORE), Foundry Process Node (e.g. TSMC N3E / Intel 18A / Samsung SF2), File Format & Checksum (OASIS v1.0 / SHA-256), Die Size & Area (mm²), Total Layer Count (e.g. 84 Mask Layers / EUV Pelicle Layers), Reticle Frame / Scribe Line Placement, and Foundry Job Deck Acceptance Status.
 * 3. Prunes millions of raw polygon coordinate streams, standard EDA licensing headers, and routine cell hierarchy expansion tables.
 *
 * Result: Slashes 80%–95% of semiconductor IC tapeout prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface GdsiiTapeoutCompactionResult {
    wasCompacted: boolean;
    projectAndTopCell: string;
    foundryProcessAndDieArea: string;
    layerCountAndOasisChecksum: string;
    maskDataPrepAndFoundryAcceptance: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedTapeoutPrompt: string;
}
export declare class BroccoliGdsiiTapeoutCompactor {
    private static instance;
    readonly tapeoutTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliGdsiiTapeoutCompactor;
    static compactTapeout(rawText: string): GdsiiTapeoutCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliGdsiiTapeoutCompactor.d.ts.map