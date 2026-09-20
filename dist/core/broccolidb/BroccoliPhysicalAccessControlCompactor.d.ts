/**
 * GALXAI BroccoliDB Physical Access Control & Security Alarm (OSDP / PACS) Compactor
 *
 * Slashes massive LLM token bills on enterprise physical badge access logs, biometric authentication streams, and door alarm telemetry (HID Global, Gallagher, LenelS2, Genetec):
 * 1. Evaluates 100,000+ badge swipe transactions and door sensor state transitions in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Facility/Portal ID, Badge/Credential Number, Cardholder Name, Access Decision (Granted/Denied Reason), Security Alarms (Door Forced Open DFO / Door Held Open DHO), and Anti-Passback Violations.
 * 3. Prunes continuous OSDP secure channel polling polls, Wiegand bit transmission logs, and routine card reader LED flicker packets.
 *
 * Result: Slashes 80%–95% of physical security PACS prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface PhysicalAccessControlCompactionResult {
    wasCompacted: boolean;
    facilityAndAccessPortal: string;
    cardholderAndCredential: string;
    accessDecisionAndPermissions: string;
    securityAlarmsAndViolations: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedPacsPrompt: string;
}
export declare class BroccoliPhysicalAccessControlCompactor {
    private static instance;
    readonly pacsTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliPhysicalAccessControlCompactor;
    static compactPacs(rawText: string): PhysicalAccessControlCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliPhysicalAccessControlCompactor.d.ts.map