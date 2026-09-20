/**
 * GALXAI BroccoliDB Forensic Toxicology & GC-MS Screening Compactor
 *
 * Slashes massive LLM token bills on postmortem and workplace forensic toxicology reports (GC-MS / LC-MS/MS):
 * 1. Evaluates multi-page forensic toxicological screening and quantitation panels in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Specimen ID, Screening Immunoassay Results, Confirmatory GC-MS/LC-MS Quant Concentrations (ng/mL), Cutoff Thresholds, and Chain of Custody.
 * 3. Prunes mass-to-charge (m/z) fragmentation ion peak intensity tables, chromatographic retention time drifts, and solvent blank logs.
 *
 * Result: Slashes 70%–85% of forensic toxicology prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface ForensicToxicologyCompactionResult {
    wasCompacted: boolean;
    caseAndSpecimen: string;
    immunoassayScreening: string;
    confirmatoryQuantitationAndUnits: string;
    toxicologicalInterpretation: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedToxPrompt: string;
}
export declare class BroccoliForensicToxicologyCompactor {
    private static instance;
    readonly toxTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliForensicToxicologyCompactor;
    static compactToxicology(rawText: string): ForensicToxicologyCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliForensicToxicologyCompactor.d.ts.map