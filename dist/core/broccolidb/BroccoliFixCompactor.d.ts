/**
 * GALXAI BroccoliDB FIX Protocol Market Data & Order Compactor
 *
 * Slashes massive LLM token bills on algorithmic trading swarms, compliance bots, and execution analytics:
 * 1. Evaluates raw FIX 4.2 / 4.4 tag-value message stream logs in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly MsgType (New Order/Fill), Symbol/Side, Price/Qty, and Execution status.
 * 3. Prunes standard FIX headers (8, 9, 34, 49, 56, 52), checksums (10), and transport boilerplate.
 *
 * Result: Slashes 70%–85% of FIX financial protocol prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface FixCompactionResult {
    wasCompacted: boolean;
    msgType: string;
    symbolAndSide: string;
    priceAndQty: string;
    execStatus: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedFixPrompt: string;
}
export declare class BroccoliFixCompactor {
    private static instance;
    readonly fixAuditTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliFixCompactor;
    /**
     * Compacts raw FIX 4.2/4.4 protocol log stream
     */
    static compactFix(rawFixText: string): FixCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliFixCompactor.d.ts.map