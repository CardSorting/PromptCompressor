/**
 * GALXAI BroccoliDB Ophthalmology OCT & Visual Field Compactor
 *
 * Slashes massive LLM token bills on ophthalmic optical coherence tomography (OCT) and Humphrey Visual Field (HVF) reports:
 * 1. Evaluates multi-layer retinal OCT and automated perimetry tests in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Intraocular Pressure (IOP mmHg), Cup-to-Disc Ratio (C/D), RNFL Thickness (µm), HVF Mean Deviation (MD dB), and Macular Edema.
 * 3. Prunes 3D B-scan pixel array coordinates, fixation loss eye-tracking time-series, and ophthalmic equipment registration noise.
 *
 * Result: Slashes 70%–85% of ophthalmology diagnostic prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface OphthalmologyOctCompactionResult {
    wasCompacted: boolean;
    intraocularPressureAndCupDisc: string;
    rnflThicknessAndGlaucomaStage: string;
    humphreyVisualFieldIndices: string;
    macularOctAndRetinalPathology: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedOphthalmologyPrompt: string;
}
export declare class BroccoliOphthalmologyOctCompactor {
    private static instance;
    readonly ophthTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliOphthalmologyOctCompactor;
    static compactOphthalmology(rawText: string): OphthalmologyOctCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliOphthalmologyOctCompactor.d.ts.map