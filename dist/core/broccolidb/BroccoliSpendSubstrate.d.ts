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
import { SemanticCacheLookupResult } from '../optimization/SemanticEdgeCache.js';
import { AnomalyDetectionRecord } from '../governance/SpendAnomalyDetector.js';
import { SpendTimelineCheckpoint } from './BroccoliSpendTimeline.js';
export interface RequestLifecycleParams {
    traceId: string;
    department: string;
    costCenter: string;
    serviceId: string;
    model: string;
    promptText: string;
    estimatedCostUsd: number;
    actualCostUsd?: number;
    avoidedWasteUsd?: number;
    promptTokens: number;
    completionTokens: number;
    durationMs: number;
}
export interface RequestLifecycleResult {
    cacheLookup: SemanticCacheLookupResult;
    promptCasHash: string;
    leaseId?: string;
    walSequence: number;
    anomaly?: AnomalyDetectionRecord;
    settled: boolean;
}
export declare class BroccoliSpendSubstrate {
    private static isInitialized;
    /**
     * Initializes the unified BroccoliDB spend substrate
     */
    static init(): void;
    /**
     * Executes the complete BroccoliDB spend governance lifecycle for a request
     */
    static processLifecycle(params: RequestLifecycleParams): RequestLifecycleResult;
    /**
     * Captures an instant cryptographic state snapshot
     */
    static createCheckpoint(label?: string): SpendTimelineCheckpoint;
    /**
     * Resets all BroccoliDB spend tables
     */
    static clearAll(): void;
}
//# sourceMappingURL=BroccoliSpendSubstrate.d.ts.map