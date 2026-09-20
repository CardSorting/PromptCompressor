/**
 * GALXAI BroccoliDB Distributed Spend Lease & Atomic Budget Bucket
 *
 * Leverages BroccoliDB atomic Compare-And-Swap (CAS) and lease primitives
 * to prevent double-spend concurrency overruns across multi-worker edge nodes.
 *
 * Provides sub-microsecond budget reservations, atomic drawdowns, and
 * automatic TTL eviction for dead leases.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface BudgetBucketRecord {
    id: string;
    department: string;
    totalLimitUsd: number;
    allocatedSpendUsd: number;
    reservedLeaseUsd: number;
    availableSpendUsd: number;
    version: number;
    lastUpdatedMs: number;
}
export interface SpendLeaseRecord {
    id: string;
    bucketId: string;
    reservedAmountUsd: number;
    settledAmountUsd?: number;
    status: 'RESERVED' | 'SETTLED' | 'EXPIRED' | 'RELEASED';
    createdAtMs: number;
    expiresAtMs: number;
}
export declare class BroccoliSpendLease {
    private static instance;
    readonly bucketTable: BroccoliDbTable<BudgetBucketRecord>;
    readonly leaseTable: BroccoliDbTable<SpendLeaseRecord>;
    private constructor();
    static getInstance(): BroccoliSpendLease;
    /**
     * Initializes or updates a departmental budget bucket
     */
    static setBudget(department: string, totalLimitUsd: number): BudgetBucketRecord;
    /**
     * Atomically reserves spend budget before invoking upstream OpenAI
     */
    static reserveBudget(department: string, estimatedMaxCostUsd: number, leaseTtlMs?: number): {
        success: boolean;
        leaseId?: string;
        availableRemainingUsd: number;
        rejectionReason?: string;
    };
    /**
     * Settles the exact cost after request completion and releases unused reservation
     */
    static settleSpend(leaseId: string, actualCostUsd: number): boolean;
    /**
     * Resets all tables for testing
     */
    static clear(): void;
}
//# sourceMappingURL=BroccoliSpendLease.d.ts.map