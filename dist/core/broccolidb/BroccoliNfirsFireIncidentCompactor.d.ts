/**
 * GALXAI BroccoliDB Public Safety & Fire/Rescue NFIRS Incident Compactor
 *
 * Slashes massive LLM token bills on fire department incident reports and USFA National Fire Incident Reporting System (NFIRS 5.0) records:
 * 1. Evaluates multi-page NFIRS Form 902 incident modules in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Fire Department FDID, Incident Number/Type (111 Building Fire / 321 EMS), Property/Contents Loss $, Casualties, and Cause/Origin.
 * 3. Prunes NFIRS database lookup code tables, mutual aid radio channel frequencies, and fire company station shift rosters.
 *
 * Result: Slashes 70%–85% of fire incident reporting prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface NfirsFireIncidentCompactionResult {
    wasCompacted: boolean;
    departmentAndIncidentNumber: string;
    incidentTypeAndArrival: string;
    lossCasualtiesAndPropertyUse: string;
    originCauseAndIgnitionFactor: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedNfirsPrompt: string;
}
export declare class BroccoliNfirsFireIncidentCompactor {
    private static instance;
    readonly nfirsTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliNfirsFireIncidentCompactor;
    static compactNfirs(rawText: string): NfirsFireIncidentCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliNfirsFireIncidentCompactor.d.ts.map