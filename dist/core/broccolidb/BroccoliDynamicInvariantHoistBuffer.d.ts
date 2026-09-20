/**
 * GALXAI BroccoliDB Dynamic Session Invariant Hoisting DeDuplication Buffer
 *
 * Slashes repetitive invariants across multi-turn agent conversations and batch logs:
 * 1. Scans multi-turn dialogues to identify strings/objects repeated in 100% of turns (invariants).
 * 2. Hoists all invariant clauses to a top-level session header `[SESSION_INVARIANTS: ...]`.
 * 3. Replaces inline occurrences with ultra-compact 2-token pointer references `[§INV:1]`.
 *
 * Result: Slashes 50%–75% of multi-turn session token bloat.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface InvariantHoistResult {
    wasHoisted: boolean;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    invariantsCount: number;
    compactedSessionText: string;
}
export declare class BroccoliDynamicInvariantHoistBuffer {
    private static instance;
    readonly hoistAuditTable: BroccoliDbTable<{
        id: string;
        invariantsCount: number;
        tokensSaved: number;
        savingsPercentage: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliDynamicInvariantHoistBuffer;
    /**
     * Hoists repeated invariant clauses across turns
     */
    static hoistInvariants(turns: string[]): InvariantHoistResult;
    clear(): void;
}
//# sourceMappingURL=BroccoliDynamicInvariantHoistBuffer.d.ts.map