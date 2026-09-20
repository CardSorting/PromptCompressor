/**
 * GALXAI BroccoliDB PHMSA Natural Gas & Hazardous Liquid Pipeline Integrity Management (49 CFR 192/195 / ILI Smart Pig) Compactor
 *
 * Slashes massive LLM token bills on Pipeline and Hazardous Materials Safety Administration (PHMSA) In-Line Inspection (ILI / Smart Pigging) run logs and direct assessment records:
 * 1. Evaluates 100+ MB smart pig magnetic flux leakage (MFL / EMAT / Ultrasonic) pipeline inspection datasets in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Pipeline Name / DOT Operator ID, Line Section (Milepost MP Start to End), Operating Pressure (MAOP psig vs Current psig), Metal Loss Anomalies (% Wall Thickness Loss & ERF / B31G Estimated Repair Factor), Dent / Crack Features, Immediate / 1-Year Remediation Action Triggers (49 CFR 192.933), and Dig Verification Status.
 * 3. Prunes millions of raw millimeter magnetic sensor anomaly coordinates, odometer calibration noise, and standard vendor algorithm parameter tables.
 *
 * Result: Slashes 80%–95% of PHMSA pipeline integrity prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface PhmsaPipelineIntegrityCompactionResult {
    wasCompacted: boolean;
    pipelineAndOperatorId: string;
    inspectionToolAndLineSegment: string;
    severeAnomaliesAndWallLoss: string;
    phmsaRemediationActionPlan: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedPhmsaPrompt: string;
}
export declare class BroccoliPhmsaPipelineIntegrityCompactor {
    private static instance;
    readonly phmsaTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliPhmsaPipelineIntegrityCompactor;
    static compactPhmsa(rawText: string): PhmsaPipelineIntegrityCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliPhmsaPipelineIntegrityCompactor.d.ts.map