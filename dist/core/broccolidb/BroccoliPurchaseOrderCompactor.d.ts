/**
 * GALXAI BroccoliDB Purchase Order & 3-Way Match Compactor
 *
 * Slashes massive LLM token bills on ERP automation swarms, AP 3-way matching, and procurement desks:
 * 1. Evaluates multi-page Purchase Orders (PO) and Goods Receipt Notes (GRN) in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly PO #/Vendor/Buyer, Line Items/Costs, Delivery/Terms, and 3-Way Match Status.
 * 3. Prunes Uniform Commercial Code (UCC) boilerplate, vendor warranty fine print, and packaging instructions.
 *
 * Result: Slashes 75%–90% of enterprise procurement and AP prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface PurchaseOrderCompactionResult {
    wasCompacted: boolean;
    poNumberAndVendor: string;
    lineItemsAndCost: string;
    deliveryAndTerms: string;
    threeWayMatchState: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedPoPrompt: string;
}
export declare class BroccoliPurchaseOrderCompactor {
    private static instance;
    readonly poAuditTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliPurchaseOrderCompactor;
    /**
     * Compacts raw purchase order or procurement requisition text
     */
    static compactPo(rawPoText: string): PurchaseOrderCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliPurchaseOrderCompactor.d.ts.map