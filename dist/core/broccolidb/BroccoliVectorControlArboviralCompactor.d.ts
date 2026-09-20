/**
 * GALXAI BroccoliDB Public Health Vector Control & Arboviral Surveillance Compactor
 *
 * Slashes massive LLM token bills on county mosquito abatement district logs and CDC ArboNET arboviral surveillance reports:
 * 1. Evaluates multi-trap vector surveillance logs in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Vector District ID, Trap Geolocation, Mosquito Species Identification, RT-PCR Viral Assays (WNV/Dengue/Zika), and Minimum Infection Rate (MIR).
 * 3. Prunes seasonal meteorological tables, fogging truck maintenance logs, and state vector district charter boilerplate.
 *
 * Result: Slashes 70%–85% of public health vector control prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface VectorControlArboviralCompactionResult {
    wasCompacted: boolean;
    districtAndTrapLocation: string;
    speciesCountAndCollection: string;
    rtPcrAssayAndInfectionRate: string;
    abatementActionAndSprayTriggers: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedVectorPrompt: string;
}
export declare class BroccoliVectorControlArboviralCompactor {
    private static instance;
    readonly vectorTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliVectorControlArboviralCompactor;
    static compactVectorControl(rawText: string): VectorControlArboviralCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliVectorControlArboviralCompactor.d.ts.map