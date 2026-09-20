/**
 * GALXAI BroccoliDB NERC CIP Critical Infrastructure Protection Cybersecurity Compactor
 *
 * Slashes massive LLM token bills on North American Electric Reliability Corporation (NERC CIP-002 through CIP-014) cybersecurity audit logs:
 * 1. Evaluates multi-substation NERC CIP compliance evidence and Electronic Security Perimeter (ESP) logs in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly BES Cyber Asset (BCA / Medium/High Impact), ESP Firewall Rule Changes, Transient Cyber Asset (TCA) USB Scans, Remote Access MFA Sessions (CIP-005), and Vulnerability Patch Assessments (CIP-007 35-day window).
 * 3. Prunes millions of routine intra-ESP Syslog event pings, password hash database dumps, and NERC standards committee glossary text.
 *
 * Result: Slashes 75%–90% of bulk electric cyber compliance prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface NercCipGridCompactionResult {
    wasCompacted: boolean;
    registeredEntityAndImpactLevel: string;
    electronicSecurityPerimeterAndMfa: string;
    transientCyberAssetsAndUsbScans: string;
    patchManagementAndVulnerabilityWindow: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedNercPrompt: string;
}
export declare class BroccoliNercCipGridCompactor {
    private static instance;
    readonly nercTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliNercCipGridCompactor;
    static compactNercCip(rawText: string): NercCipGridCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliNercCipGridCompactor.d.ts.map