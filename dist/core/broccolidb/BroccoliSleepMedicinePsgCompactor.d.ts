/**
 * GALXAI BroccoliDB Sleep Medicine & Polysomnography (PSG) Report Compactor
 *
 * Slashes massive LLM token bills on overnight sleep study reports and CPAP titration logs:
 * 1. Evaluates multi-channel overnight polysomnography summaries in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Sleep Efficiency %, Total Sleep Time (TST), Apnea-Hypopnea Index (AHI events/hr), SpO2 Nadir %, and Prescribed CPAP Pressure.
 * 3. Prunes 30-second epoch sleep stage channel traces, EEG lead impedance checks, and equipment calibration noise.
 *
 * Result: Slashes 70%–85% of sleep medicine diagnostic prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface SleepMedicinePsgCompactionResult {
    wasCompacted: boolean;
    studyTypeAndEfficiency: string;
    respiratoryIndicesAndAhi: string;
    nocturnalOximetryMetrics: string;
    prescribedTherapyAndImpression: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedPsgPrompt: string;
}
export declare class BroccoliSleepMedicinePsgCompactor {
    private static instance;
    readonly psgTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliSleepMedicinePsgCompactor;
    static compactPsg(rawText: string): SleepMedicinePsgCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliSleepMedicinePsgCompactor.d.ts.map