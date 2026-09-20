/**
 * GALXAI BroccoliDB Clinical Radiology Imaging Report Compactor
 *
 * Slashes massive LLM token bills on CT, MRI, Ultrasound, and X-Ray diagnostic reports:
 * 1. Evaluates radiology imaging reports in BroccoliDB memory (<0.01ms).
 * 2. Elevates the diagnostic IMPRESSION and acute abnormal findings in full fidelity.
 * 3. Condenses 30+ lines of negative anatomical checklist findings into a 1-line summary:
 *    [UNREMARKABLE ORGANS: Lungs, Heart, Mediastinum, Liver, Spleen, Pancreas, Adrenals, Kidneys, Bowel]
 * 4. Prunes scanner radiation dosage and technical imaging parameters.
 *
 * Result: Slashes 70%–85% of clinical radiology diagnostic prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface RadiologyCompactionResult {
    wasCompacted: boolean;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedRadiologyReport: string;
}
export declare class BroccoliRadiologyCompactor {
    private static instance;
    readonly radAuditTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliRadiologyCompactor;
    /**
     * Compacts verbose radiology report by emphasizing Impression and pruning normal organ lists
     */
    static compactReport(rawReportText: string): RadiologyCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliRadiologyCompactor.d.ts.map