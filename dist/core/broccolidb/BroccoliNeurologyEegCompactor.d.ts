/**
 * GALXAI BroccoliDB Clinical Neurology & Electroencephalography (EEG) Compactor
 *
 * Slashes massive LLM token bills on routine and continuous long-term video EEG reports:
 * 1. Evaluates multi-hour EEG monitoring records in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Background Frequency (Hz), Symmetry, Interictal Epileptiform Discharges (IEDs), Seizure Count, and Seizure Onset Zone.
 * 3. Prunes continuous 256Hz multichannel EEG microvolt traces, electrode impedance values, and technician montage adjustment notes.
 *
 * Result: Slashes 70%–85% of neurology diagnostic prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface NeurologyEegCompactionResult {
    wasCompacted: boolean;
    studyDurationAndIndication: string;
    backgroundRhythmAndOrganization: string;
    epileptiformDischargesAndSeizures: string;
    neurologicalImpression: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedEegPrompt: string;
}
export declare class BroccoliNeurologyEegCompactor {
    private static instance;
    readonly eegTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliNeurologyEegCompactor;
    static compactEeg(rawText: string): NeurologyEegCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliNeurologyEegCompactor.d.ts.map