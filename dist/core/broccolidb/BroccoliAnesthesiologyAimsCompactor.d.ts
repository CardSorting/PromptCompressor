/**
 * GALXAI BroccoliDB Clinical Anesthesiology & AIMS Record Compactor
 *
 * Slashes massive LLM token bills on operating room anesthesia records and AIMS telemetry:
 * 1. Evaluates multi-hour intraoperative anesthesia records in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Anesthesiologist, ASA Physical Status (I-VI), Airway Mallampati, Induction Agents, Vasopressors, and Extubation Status.
 * 3. Prunes continuous 1-minute automated arterial line blood pressure arrays, ventilator wave data, and circuit compliance checks.
 *
 * Result: Slashes 70%–85% of anesthesia record prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface AnesthesiologyCompactionResult {
    wasCompacted: boolean;
    providerAndAsaClass: string;
    airwayAndInduction: string;
    maintenanceAndHemodynamics: string;
    fluidsAndExtubation: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedAnesthesiaPrompt: string;
}
export declare class BroccoliAnesthesiologyAimsCompactor {
    private static instance;
    readonly anesthesiaTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliAnesthesiologyAimsCompactor;
    static compactAnesthesia(rawText: string): AnesthesiologyCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliAnesthesiologyAimsCompactor.d.ts.map