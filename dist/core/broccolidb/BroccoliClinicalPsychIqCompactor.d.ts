/**
 * GALXAI BroccoliDB Clinical Psychology WAIS-IV / WISC-V Neuropsychological Exam Compactor
 *
 * Slashes massive LLM token bills on clinical neuropsychological evaluation reports and standardized cognitive intelligence tests (WAIS-IV / WISC-V / Woodcock-Johnson):
 * 1. Evaluates 30+ page neuropsychological evaluation narratives in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Patient / Examinee Demographics, Full Scale IQ (FSIQ) Score & Confidence Interval, Primary Index Scores (VCI / PRI / WMI / PSI), Subtest Scaled Scores (1-19), and Diagnostic Clinical Impressions (DSM-5-TR ADHD / Specific Learning Disorder).
 * 3. Prunes standardized psychometric bell-curve normative tables, individual stimulus card subtest response transcripts, and testing environment room descriptions.
 *
 * Result: Slashes 75%–90% of psychological evaluation prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface ClinicalPsychIqCompactionResult {
    wasCompacted: boolean;
    examineeAndPsychologist: string;
    fullScaleIqAndIndexScores: string;
    cognitiveStrengthsAndDeficits: string;
    dsm5DiagnosticImpressionAndAccommodations: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedPsychPrompt: string;
}
export declare class BroccoliClinicalPsychIqCompactor {
    private static instance;
    readonly psychTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliClinicalPsychIqCompactor;
    static compactPsych(rawText: string): ClinicalPsychIqCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliClinicalPsychIqCompactor.d.ts.map