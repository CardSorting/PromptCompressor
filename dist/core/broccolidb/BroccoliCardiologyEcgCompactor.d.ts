/**
 * GALXAI BroccoliDB Cardiology ECG/EKG & Holter Rhythm Compactor
 *
 * Slashes massive LLM token bills on 12-lead electrocardiograms and 48-hour Holter telemetry dumps:
 * 1. Evaluates raw ECG interpretation reports and Holter statistics in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Heart Rate, PR/QRS/QTc Intervals, Rhythm Interpretation (AFib/NSR), ST-T Wave Ischemic Findings, and Arrhythmia Burden.
 * 3. Prunes continuous 500Hz digital voltage waveform arrays, lead placement calibration pulses, and artifact noise.
 *
 * Result: Slashes 70%–88% of cardiology diagnostic prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface CardiologyEcgCompactionResult {
    wasCompacted: boolean;
    heartRateAndIntervals: string;
    rhythmInterpretation: string;
    ischemiaAndStSegment: string;
    arrhythmiaBurdenAndEctopy: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedEcgPrompt: string;
}
export declare class BroccoliCardiologyEcgCompactor {
    private static instance;
    readonly ecgTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliCardiologyEcgCompactor;
    static compactEcg(rawText: string): CardiologyEcgCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliCardiologyEcgCompactor.d.ts.map