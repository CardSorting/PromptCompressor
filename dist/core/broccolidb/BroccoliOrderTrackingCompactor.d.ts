/**
 * GALXAI BroccoliDB Customer Order & Shipping Tracking Timeline Compactor
 *
 * Slashes massive LLM token bills on e-commerce support tickets, delivery inquiries, and order bots:
 * 1. Evaluates multi-scan FedEx, UPS, USPS, DHL tracking logs in BroccoliDB memory (<0.01ms).
 * 2. Prunes dozens of intermediate regional hub transit scans (Arrived at sort facility, Departed sort facility).
 * 3. Emits strictly the origin pickup, estimated/actual delivery timestamp, and current milestone status:
 *    [TRACKING: FedEx #7891048201 | Status: DELIVERED (Aug 27, 2:15 PM - Front Porch)]
 *
 * Result: Slashes 75%–85% of shipping tracking history prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface TrackingCompactionResult {
    wasCompacted: boolean;
    carrierName: string;
    trackingNumber: string;
    currentStatus: string;
    originalScansCount: number;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedTrackingPrompt: string;
}
export declare class BroccoliOrderTrackingCompactor {
    private static instance;
    readonly trackingAuditTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliOrderTrackingCompactor;
    /**
     * Compacts raw carrier tracking history into a dense 2-line milestone status
     */
    static compactTrackingHistory(rawTrackingText: string): TrackingCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliOrderTrackingCompactor.d.ts.map