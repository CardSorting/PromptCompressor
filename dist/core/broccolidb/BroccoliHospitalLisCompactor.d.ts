/**
 * GALXAI BroccoliDB Hospital Laboratory Information System (LIS) HL7 Compactor
 *
 * Slashes massive LLM token bills on high-volume clinical laboratory test results and HL7 v2.x ORU^R01 feeds:
 * 1. Evaluates multi-analyte clinical chemistry, hematology, and microbiology reports in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Accession Number, Panic/Critical Value Flags (HH/LL), Reference Intervals, Reflex Testing, and Clinical Micro Isolates.
 * 3. Prunes normal-range analyte clutter, analyzer machine calibration logs, and specimen tube color descriptions.
 *
 * Result: Slashes 75%–90% of hospital LIS laboratory prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface HospitalLisCompactionResult {
    wasCompacted: boolean;
    accessionAndPanel: string;
    criticalPanicValues: string;
    abnormalLaboratoryFindings: string;
    microbiologyAndReflexAssays: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedLisPrompt: string;
}
export declare class BroccoliHospitalLisCompactor {
    private static instance;
    readonly lisTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliHospitalLisCompactor;
    static compactLis(rawText: string): HospitalLisCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliHospitalLisCompactor.d.ts.map