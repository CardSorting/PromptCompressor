/**
 * GALXAI Unified BroccoliDB AI Spend Governance Substrate
 *
 * Master coordinator orchestrating:
 * 1. BroccoliPromptCASVault: Content-addressable prompt deduplication & Brotli compression.
 * 2. SemanticEdgeCache: Sub-microsecond semantic query caching (<0.5µs).
 * 3. BroccoliSpendLease: Atomic CAS budget reservations & double-spend prevention.
 * 4. BroccoliSpendWAL: Binary write-ahead log for zero-data-loss durability.
 * 5. SpendAnomalyDetector: Real-time Z-score spend anomaly detection.
 * 6. BroccoliSpendAnalytics: Multi-dimensional departmental aggregations.
 * 7. BroccoliSpendStreamer: Reactive Change Data Capture (CDC) streaming.
 * 8. BroccoliSpendTimeline: Point-in-time cryptographic state checkpointing.
 */
import { BroccoliPromptCASVault } from './BroccoliPromptCASVault.js';
import { SemanticEdgeCache } from '../optimization/SemanticEdgeCache.js';
import { BroccoliSpendLease } from './BroccoliSpendLease.js';
import { BroccoliSpendWAL } from './BroccoliSpendWAL.js';
import { SpendAnomalyDetector } from '../governance/SpendAnomalyDetector.js';
import { BroccoliSpendAnalytics } from './BroccoliSpendAnalytics.js';
import { BroccoliSpendStreamer } from './BroccoliSpendStreamer.js';
import { BroccoliSpendTimeline } from './BroccoliSpendTimeline.js';
export class BroccoliSpendSubstrate {
    static isInitialized = false;
    /**
     * Initializes the unified BroccoliDB spend substrate
     */
    static init() {
        if (this.isInitialized)
            return;
        BroccoliSpendStreamer.init();
        this.isInitialized = true;
    }
    /**
     * Executes the complete BroccoliDB spend governance lifecycle for a request
     */
    static processLifecycle(params) {
        this.init();
        // 1. Content-Addressable Prompt Deduplication
        const casResult = BroccoliPromptCASVault.storePrompt(params.promptText);
        // 2. Sub-microsecond Semantic Cache Lookup
        const cacheLookup = SemanticEdgeCache.lookup(params.promptText, params.model);
        // 3. Atomic CAS Budget Reservation
        const lease = BroccoliSpendLease.reserveBudget(params.department, params.estimatedCostUsd);
        // 4. Record spend in WAL and Analytics Ledger
        const actualCost = params.actualCostUsd ?? params.estimatedCostUsd;
        const avoidedWaste = params.avoidedWasteUsd ?? 0;
        const ledgerRecord = {
            id: params.traceId,
            department: params.department,
            costCenter: params.costCenter,
            serviceId: params.serviceId,
            model: params.model,
            grossRetailUsd: actualCost + avoidedWaste,
            netGalxUsd: actualCost,
            avoidedWasteUsd: avoidedWaste,
            promptTokens: params.promptTokens,
            completionTokens: params.completionTokens,
            durationMs: params.durationMs,
            timestampMs: Date.now(),
        };
        const walFrame = BroccoliSpendWAL.append(ledgerRecord);
        // 5. Evaluate Anomaly Detection
        const anomaly = SpendAnomalyDetector.recordAndEvaluate({
            timestampMs: Date.now(),
            costUsd: actualCost,
            tokens: params.promptTokens + params.completionTokens,
            serviceId: params.serviceId,
            department: params.department,
        });
        // 6. Settle Lease if reserved
        let settled = false;
        if (lease.success && lease.leaseId) {
            settled = BroccoliSpendLease.settleSpend(lease.leaseId, actualCost);
        }
        return {
            cacheLookup,
            promptCasHash: casResult.sha256,
            leaseId: lease.leaseId,
            walSequence: walFrame.seq,
            anomaly: anomaly.isAnomaly ? anomaly : undefined,
            settled,
        };
    }
    /**
     * Captures an instant cryptographic state snapshot
     */
    static createCheckpoint(label) {
        return BroccoliSpendTimeline.createCheckpoint(label);
    }
    /**
     * Resets all BroccoliDB spend tables
     */
    static clearAll() {
        BroccoliPromptCASVault.clear();
        SemanticEdgeCache.clear();
        BroccoliSpendLease.clear();
        BroccoliSpendWAL.clear();
        SpendAnomalyDetector.resetWindows();
        BroccoliSpendAnalytics.clear();
        BroccoliSpendTimeline.clear();
    }
}
//# sourceMappingURL=BroccoliSpendSubstrate.js.map