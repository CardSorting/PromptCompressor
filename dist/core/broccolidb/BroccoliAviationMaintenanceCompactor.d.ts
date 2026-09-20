/**
 * GALXAI BroccoliDB Commercial Aviation Maintenance, Repair & Overhaul (MRO) Compactor
 *
 * Slashes massive LLM token bills on aircraft heavy maintenance records, FAA Form 8130-3 airworthiness release certificates, and Airworthiness Directives (ADs):
 * 1. Evaluates 100+ page airframe C-check and engine overhaul logbooks in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Aircraft Registration/MSN, Airframe Flight Hours & Cycles (TSN/CSN), Mandated Airworthiness Directives (AD Compliance), Non-Destructive Testing (NDT) Findings, and FAA Return-to-Service Authorization.
 * 3. Prunes tool calibration tracking rosters, hangar janitorial sign-offs, and standard FAA Part 145 repair station quality manual text.
 *
 * Result: Slashes 75%–90% of aviation MRO prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface AviationMaintenanceCompactionResult {
    wasCompacted: boolean;
    aircraftAndMaintenanceStation: string;
    totalTimeCyclesAndCheckType: string;
    adComplianceAndNdtFindings: string;
    airworthinessReleaseAndSignoff: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedMroPrompt: string;
}
export declare class BroccoliAviationMaintenanceCompactor {
    private static instance;
    readonly mroTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliAviationMaintenanceCompactor;
    static compactMro(rawText: string): AviationMaintenanceCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliAviationMaintenanceCompactor.d.ts.map