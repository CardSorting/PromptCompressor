/**
 * GALXAI BroccoliDB Voluntary Carbon Offsets & Verra VCS / Gold Standard Compactor
 *
 * Slashes massive LLM token bills on carbon credit project design documents (PDD), verification audit reports, and Verra VCS / Gold Standard registry issuance records:
 * 1. Evaluates 150+ page carbon offset project verification reports in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Project Name / VCS Registry ID, Project Mechanism (REDD+ / Afforestation / Methane Capture), Carbon Standard & Methodology (e.g. VM0007 / GS TPDDTEC), Baseline vs Project Emissions, Vintage Years, and Verified Carbon Units (VCUs tCO2e).
 * 3. Prunes local stakeholder community meeting sign-in sheets, biodiversity species count raw indexes, and carbon registry general terms of service.
 *
 * Result: Slashes 80%–95% of voluntary carbon market prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface CarbonCreditVerraCompactionResult {
    wasCompacted: boolean;
    projectAndRegistryId: string;
    methodologyAndProjectMechanism: string;
    baselineEmissionsAndVcuIssuance: string;
    additionalityPermanenceAndBufferPool: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedCarbonPrompt: string;
}
export declare class BroccoliCarbonCreditVerraCompactor {
    private static instance;
    readonly vcuTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliCarbonCreditVerraCompactor;
    static compactCarbonCredit(rawText: string): CarbonCreditVerraCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliCarbonCreditVerraCompactor.d.ts.map