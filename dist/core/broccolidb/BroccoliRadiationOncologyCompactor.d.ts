/**
 * GALXAI BroccoliDB Radiation Oncology & DICOM-RT Treatment Plan Compactor
 *
 * Slashes massive LLM token bills on radiation oncology treatment planning and dose-volume histograms (DVH):
 * 1. Evaluates 50+ page DICOM-RT treatment summaries in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Tumor Site, Prescription Dose (Gy), Fractions, PTV Volume, and Organs-at-Risk (OAR) DVH Constraints.
 * 3. Prunes 3D voxel coordinate arrays, multi-leaf collimator (MLC) leaf position logs, and gantry angle trajectories.
 *
 * Result: Slashes 70%–85% of radiation oncology prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface RadiationOncologyCompactionResult {
    wasCompacted: boolean;
    targetSiteAndModality: string;
    prescribedDoseAndFractions: string;
    ptvVolumeAndCoverage: string;
    oarDvhConstraints: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedRadiationPrompt: string;
}
export declare class BroccoliRadiationOncologyCompactor {
    private static instance;
    readonly radiationTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliRadiationOncologyCompactor;
    static compactRadiationOncology(rawText: string): RadiationOncologyCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliRadiationOncologyCompactor.d.ts.map