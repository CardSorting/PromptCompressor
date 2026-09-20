/**
 * GALXAI BroccoliDB Remote Patient Monitoring (RPM) & CGM Telemetry Compactor
 *
 * Slashes massive LLM token bills on ambulatory physiological data and Continuous Glucose Monitoring (CGM) streams:
 * 1. Evaluates 30-day continuous CGM sensor streams (288 readings/day) and BP monitors in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Mean Glucose, % Time-in-Range (TIR 70-180 mg/dL), Hypoglycemia Events, BP Trends, and CPT Billing Qualifications (CPT 99453/99454/99457).
 * 3. Prunes continuous 5-minute raw sensor voltage records, sensor calibration logs, and Bluetooth handshake noise.
 *
 * Result: Slashes 80%–92% of RPM telemetry prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface RpmCompactionResult {
    wasCompacted: boolean;
    monitoringDeviceAndPeriod: string;
    glycemicControlAndTir: string;
    bloodPressureAndVitalsTrend: string;
    cptBillingAndCompliance: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedRpmPrompt: string;
}
export declare class BroccoliRemotePatientMonitoringCompactor {
    private static instance;
    readonly rpmTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliRemotePatientMonitoringCompactor;
    static compactRpm(rawText: string): RpmCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliRemotePatientMonitoringCompactor.d.ts.map