/**
 * GALXAI BroccoliDB OBD-II CAN Bus & DTC Diagnostic Trouble Code Compactor
 *
 * Slashes massive LLM token bills on automotive fleet swarms, remote telematics, and repair bots:
 * 1. Evaluates multi-parameter OBD-II CAN bus telematics and freeze frames in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly the 4 critical diagnostic indicators (DTC codes, MIL status, Trigger freeze frame, Readiness).
 * 3. Prunes 100+ raw hex CAN bus IDs, repetitive fuel trim percentages, and ambient sensor telemetry noise.
 *
 * Result: Slashes 70%–85% of OBD-II automotive diagnostic prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface ObdCompactionResult {
    wasCompacted: boolean;
    activeDtcCodes: string[];
    milStatus: string;
    freezeFrameSummary: string;
    readinessStatus: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedObdPrompt: string;
}
export declare class BroccoliObdCompactor {
    private static instance;
    readonly obdAuditTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliObdCompactor;
    /**
     * Compacts raw OBD-II CAN bus telematics and freeze frame dump
     */
    static compactObdTelematics(rawObdText: string): ObdCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliObdCompactor.d.ts.map