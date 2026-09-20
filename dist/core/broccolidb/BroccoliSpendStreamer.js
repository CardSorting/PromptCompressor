/**
 * GALXAI BroccoliDB Reactive Spend CDC Streamer
 *
 * Subscribes to in-memory reactive table mutations across the spend ledger,
 * anomaly tables, and semantic edge caches, and emits real-time CDC deltas
 * for live SSE dashboards and real-time FinOps webhooks.
 */
import { BroccoliSpendAnalytics } from './BroccoliSpendAnalytics.js';
import { SpendAnomalyDetector } from '../governance/SpendAnomalyDetector.js';
export class BroccoliSpendStreamer {
    static listeners = new Set();
    static isSubscribed = false;
    /**
     * Initializes CDC subscriptions across BroccoliDB reactive tables
     */
    static init() {
        if (this.isSubscribed)
            return;
        const analytics = BroccoliSpendAnalytics.getInstance();
        analytics.ledgerTable.subscribe((change) => {
            if (change.operation === 'INSERT' && change.after) {
                this.broadcast({
                    type: 'SPEND_RECORDED',
                    payload: change.after,
                    timestampMs: change.timestamp,
                });
            }
        });
        const anomalyDetector = SpendAnomalyDetector.getInstance();
        anomalyDetector.anomalyTable.subscribe((change) => {
            if (change.operation === 'INSERT' && change.after) {
                this.broadcast({
                    type: 'ANOMALY_TRIGGERED',
                    payload: change.after,
                    timestampMs: change.timestamp,
                });
            }
        });
        this.isSubscribed = true;
    }
    /**
     * Registers a real-time listener for streaming spend CDC events
     */
    static subscribe(listener) {
        this.init();
        this.listeners.add(listener);
        return () => {
            this.listeners.delete(listener);
        };
    }
    static broadcast(event) {
        for (const listener of this.listeners) {
            try {
                listener(event);
            }
            catch (err) {
                console.error('Error in spend stream listener:', err);
            }
        }
    }
}
//# sourceMappingURL=BroccoliSpendStreamer.js.map