/**
 * GALXAI BroccoliDB Real-Time Spend Analytics Pipeline
 *
 * Provides sub-millisecond multi-dimensional grouping and statistical aggregation
 * across departmental AI token consumption, avoided waste, and latency percentiles (P95/P99).
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export class BroccoliSpendAnalytics {
    static instance;
    ledgerTable;
    constructor() {
        this.ledgerTable = new BroccoliDbTable('spend_ledger');
        this.ledgerTable.createIndex('department');
        this.ledgerTable.createIndex('costCenter');
        this.ledgerTable.createIndex('serviceId');
        this.ledgerTable.createIndex('model');
        this.ledgerTable.createSortedIndex('timestampMs');
    }
    static getInstance() {
        if (!BroccoliSpendAnalytics.instance) {
            BroccoliSpendAnalytics.instance = new BroccoliSpendAnalytics();
        }
        return BroccoliSpendAnalytics.instance;
    }
    /**
     * Records a spend transaction in the BroccoliDB high-throughput ledger table
     */
    static recordSpend(record) {
        const analytics = this.getInstance();
        analytics.ledgerTable.put(record.id, record);
    }
    /**
     * Computes multi-group breakdown across departments and cost centers
     */
    static getDepartmentalBreakdown() {
        const analytics = this.getInstance();
        return analytics.ledgerTable.aggregate({
            groupBy: ['department'],
            metrics: {
                totalGrossRetailUsd: { metric: 'sum', field: 'grossRetailUsd' },
                totalNetGalxUsd: { metric: 'sum', field: 'netGalxUsd' },
                totalAvoidedWasteUsd: { metric: 'sum', field: 'avoidedWasteUsd' },
                avgDurationMs: { metric: 'avg', field: 'durationMs' },
                totalPromptTokens: { metric: 'sum', field: 'promptTokens' },
                totalCompletionTokens: { metric: 'sum', field: 'completionTokens' },
            },
        });
    }
    /**
     * Clears the ledger table for testing or recalibration
     */
    static clear() {
        const analytics = this.getInstance();
        analytics.ledgerTable.clear();
    }
}
//# sourceMappingURL=BroccoliSpendAnalytics.js.map