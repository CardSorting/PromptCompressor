/**
 * GALXAI BroccoliDB Real-Time Spend Analytics Pipeline
 *
 * Provides sub-millisecond multi-dimensional grouping and statistical aggregation
 * across departmental AI token consumption, avoided waste, and latency percentiles (P95/P99).
 */
import { BroccoliDbTable } from './broccolidb-table.js';
import type { DbAggregateResult } from './broccolidb.contracts.js';
export interface SpendLedgerRecord {
    id: string;
    department: string;
    costCenter: string;
    serviceId: string;
    model: string;
    grossRetailUsd: number;
    netGalxUsd: number;
    avoidedWasteUsd: number;
    promptTokens: number;
    completionTokens: number;
    durationMs: number;
    timestampMs: number;
}
export declare class BroccoliSpendAnalytics {
    private static instance;
    readonly ledgerTable: BroccoliDbTable<SpendLedgerRecord>;
    private constructor();
    static getInstance(): BroccoliSpendAnalytics;
    /**
     * Records a spend transaction in the BroccoliDB high-throughput ledger table
     */
    static recordSpend(record: SpendLedgerRecord): void;
    /**
     * Computes multi-group breakdown across departments and cost centers
     */
    static getDepartmentalBreakdown(): DbAggregateResult;
    /**
     * Clears the ledger table for testing or recalibration
     */
    static clear(): void;
}
//# sourceMappingURL=BroccoliSpendAnalytics.d.ts.map