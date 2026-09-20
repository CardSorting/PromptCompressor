/**
 * GALXAI BroccoliDB Clinical Vital Signs Longitudinal Trend Compactor
 *
 * Slashes massive LLM token bills on ICU telemetry, continuous patient vitals, and inpatient flowsheets:
 * 1. Evaluates continuous time-series vitals (HR, BP, RR, SpO2, Temp) in BroccoliDB memory (<0.01ms).
 * 2. Compresses stable, normotensive/euthermic periods into mathematical aggregate ranges (HR min-max, BP min-max).
 * 3. Highlights point-by-point readings ONLY for acute physiological deviations, tachycardia, hypotension, desaturation, or fever.
 *
 * Result: Slashes 80%–92% of clinical vital signs monitoring prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface VitalSignReading {
    time: string;
    heartRate: number;
    systolicBp: number;
    diastolicBp: number;
    respRate: number;
    spO2: number;
    tempF: number;
}
export interface VitalsCompactionResult {
    wasCompacted: boolean;
    totalReadingsCount: number;
    unstableReadingsCount: number;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedTelemetrySummary: string;
}
export declare class BroccoliVitalsTrendCompactor {
    private static instance;
    readonly vitalsAuditTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliVitalsTrendCompactor;
    /**
     * Evaluates if a single vital signs reading is physiologically unstable / acute
     */
    static isUnstable(v: VitalSignReading): boolean;
    /**
     * Compacts longitudinal vitals flowsheet
     */
    static compactVitals(readings: VitalSignReading[]): VitalsCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliVitalsTrendCompactor.d.ts.map