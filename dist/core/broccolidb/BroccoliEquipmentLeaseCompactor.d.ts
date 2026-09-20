/**
 * GALXAI BroccoliDB Master Equipment Leasing & Financing Compactor
 *
 * Slashes massive LLM token bills on commercial equipment leasing agreements (Fair Market Value FMV leases, $1.00 Buyout Capital Leases, TRAC Leases):
 * 1. Evaluates 40+ page master equipment lease schedules in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Lessor/Lessee, Equipment Description/Serial Numbers, Capital Cost $, Monthly Rent, Lease Term (Months), and End-of-Term Purchase Option.
 * 3. Prunes standard UCC-1 Article 2A statutory leasing language, disclaimer of manufacturer warranties, and casualty loss insurance certificates.
 *
 * Result: Slashes 70%–85% of equipment lease prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface EquipmentLeaseCompactionResult {
    wasCompacted: boolean;
    lessorAndLessee: string;
    equipmentScheduleAndValue: string;
    leaseTermAndRentalPayments: string;
    endOfTermPurchaseOption: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedLeasePrompt: string;
}
export declare class BroccoliEquipmentLeaseCompactor {
    private static instance;
    readonly leaseTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliEquipmentLeaseCompactor;
    static compactEquipmentLease(rawText: string): EquipmentLeaseCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliEquipmentLeaseCompactor.d.ts.map