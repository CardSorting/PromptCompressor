/**
 * GALXAI BroccoliDB Clinical Audiology & Audiogram Diagnostic Compactor
 *
 * Slashes massive LLM token bills on comprehensive audiometric evaluation reports:
 * 1. Evaluates multi-frequency air/bone conduction audiograms and tympanograms in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Pure Tone Averages (PTA 500-2000Hz), Speech Reception Thresholds (SRT), Word Recognition Scores (WRS %), and Tympanometry (Type A/B/C).
 * 3. Prunes ISO sound booth calibration certification tables, hearing aid brand marketing brochures, and test ear symbol legends.
 *
 * Result: Slashes 70%–85% of audiology diagnostic prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface AudiologyExamCompactionResult {
    wasCompacted: boolean;
    earLateralityAndHearingLoss: string;
    pureToneThresholdsAndPta: string;
    speechAudiometryAndWrs: string;
    tympanometryAndAcousticReflex: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedAudiologyPrompt: string;
}
export declare class BroccoliAudiologyExamCompactor {
    private static instance;
    readonly audiologyTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliAudiologyExamCompactor;
    static compactAudiology(rawText: string): AudiologyExamCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliAudiologyExamCompactor.d.ts.map