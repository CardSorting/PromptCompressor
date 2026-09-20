/**
 * GALXAI BroccoliDB OSHA Process Safety Management (PSM / 29 CFR 1910.119) & Incident Investigation Compactor
 *
 * Slashes massive LLM token bills on Occupational Safety and Health Administration (OSHA 1910.119) Process Safety Management (PSM) audits, Management of Change (MOC), and root cause incident reports:
 * 1. Evaluates 100+ page industrial chemical PSM compliance audit packages in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Facility Name / EPA Facility ID, Covered Process & Threshold Quantity (TQ e.g. Anhydrous Ammonia >10,000 lbs / Chlorine >1,500 lbs), Process Hazard Analysis (PHA / HAZOP Methodology), Safety Instrumented Systems (SIS / SIL-2 Rating), Root Cause Incident Findings (Why-Tree / TapRooT), and Corrective Action Tracking Status.
 * 3. Prunes repetitive OSHA 1910 regulatory text recitals, safety committee roll call sheets, and generic plant safety rules.
 *
 * Result: Slashes 75%–90% of industrial OSHA PSM process safety prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface Osha1910SafetyCompactionResult {
    wasCompacted: boolean;
    facilityAndCoveredProcess: string;
    phaHazopAndSilSafetySystems: string;
    incidentRootCauseAndMocStatus: string;
    correctiveActionsAndOshaCompliance: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedPsmPrompt: string;
}
export declare class BroccoliOsha1910SafetyCompactor {
    private static instance;
    readonly psmTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliOsha1910SafetyCompactor;
    static compactPsm(rawText: string): Osha1910SafetyCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliOsha1910SafetyCompactor.d.ts.map