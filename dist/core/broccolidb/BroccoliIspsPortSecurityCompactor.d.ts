/**
 * GALXAI BroccoliDB IMO ISPS Code International Ship & Port Facility Security Declaration Compactor
 *
 * Slashes massive LLM token bills on International Ship and Port Facility Security (ISPS Code / SOLAS XI-2) pre-arrival security notices (eNOA/D) and Declaration of Security (DoS):
 * 1. Evaluates 50+ page USCG electronic Notice of Arrival/Departure (eNOAD) and ISPS port security clearance packets in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Vessel Name / IMO Number, Current Ship Security Level (ISPS Level 1 / Level 2 / Level 3), Port Facility Security Level, Ship Security Officer (SSO) & CSO Contact, Last 10 Ports of Call (with Security Levels), Stowaway / Arms Cargo Declarations, and Port State Control (PSC) Security Clearance Status.
 * 3. Prunes repetitive SOLAS XI-2 legal recitals, coast guard privacy act notices, and standard maritime security boilerplate.
 *
 * Result: Slashes 75%–90% of maritime ISPS port security prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface IspsPortSecurityCompactionResult {
    wasCompacted: boolean;
    vesselAndSecurityLevel: string;
    portFacilityAndDosRequired: string;
    last10PortsOfCallHistory: string;
    portStateControlClearance: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedIspsPrompt: string;
}
export declare class BroccoliIspsPortSecurityCompactor {
    private static instance;
    readonly ispsTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliIspsPortSecurityCompactor;
    static compactIsps(rawText: string): IspsPortSecurityCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliIspsPortSecurityCompactor.d.ts.map