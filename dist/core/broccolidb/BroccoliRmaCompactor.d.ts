/**
 * GALXAI BroccoliDB Returns & RMA Warranty Policy Matrix Compactor
 *
 * Slashes massive LLM token bills on customer returns, RMA warranty claims, and refund swarms:
 * 1. Evaluates multi-page return policies and warranty disclaimers in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly the 4 critical return criteria (Return window, Condition, Exceptions, Refund method).
 * 3. Prunes 10+ pages of warehouse receiving addresses, restocking legal jargon, and international customs clauses.
 *
 * Result: Slashes 75%–85% of returns and RMA warranty policy prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface RmaCompactionResult {
    wasCompacted: boolean;
    returnWindow: string;
    refundMethod: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedRmaPrompt: string;
}
export declare class BroccoliRmaCompactor {
    private static instance;
    readonly rmaAuditTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliRmaCompactor;
    /**
     * Compacts raw return policy text into a structured 4-item RMA policy matrix
     */
    static compactRmaPolicy(rawPolicyText: string): RmaCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliRmaCompactor.d.ts.map