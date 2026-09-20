/**
 * GALXAI BroccoliDB Cybersecurity SIEM Threat & Incident Alert Compactor
 *
 * Slashes massive LLM token bills on SIEM threat detection alerts and SOC incident reports (Splunk, Microsoft Sentinel, CrowdStrike Falcon, Datadog Security):
 * 1. Evaluates multi-source security event logs in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Incident Title/Severity (Critical/High), MITRE ATT&CK TTPs, Indicators of Compromise (IOCs - IPs/Hashes), CVSS Scores, Affected Assets, and Containment Actions.
 * 3. Prunes millions of routine Sysmon event ID pings, normal DNS resolver logs, and firewall permit noise.
 *
 * Result: Slashes 75%–90% of SOC security incident prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface SiemThreatCompactionResult {
    wasCompacted: boolean;
    incidentAndSeverity: string;
    mitreAttckAndExploitVector: string;
    indicatorsOfCompromiseIocs: string;
    containmentAndRemediation: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedSiemPrompt: string;
}
export declare class BroccoliSiemThreatCompactor {
    private static instance;
    readonly siemTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliSiemThreatCompactor;
    static compactSiem(rawText: string): SiemThreatCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliSiemThreatCompactor.d.ts.map