/**
 * GALXAI BroccoliDB Reactive Spend CDC Streamer
 *
 * Subscribes to in-memory reactive table mutations across the spend ledger,
 * anomaly tables, and semantic edge caches, and emits real-time CDC deltas
 * for live SSE dashboards and real-time FinOps webhooks.
 */
export type SpendStreamListener = (event: {
    type: 'SPEND_RECORDED' | 'ANOMALY_TRIGGERED' | 'CACHE_SAVINGS';
    payload: Record<string, unknown>;
    timestampMs: number;
}) => void;
export declare class BroccoliSpendStreamer {
    private static listeners;
    private static isSubscribed;
    /**
     * Initializes CDC subscriptions across BroccoliDB reactive tables
     */
    static init(): void;
    /**
     * Registers a real-time listener for streaming spend CDC events
     */
    static subscribe(listener: SpendStreamListener): () => void;
    private static broadcast;
}
//# sourceMappingURL=BroccoliSpendStreamer.d.ts.map