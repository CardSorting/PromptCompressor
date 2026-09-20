/**
 * GALXAI BroccoliDB Spend Timeline & Forensic Snapshot Engine
 *
 * Provides deterministic point-in-time state checkpointing and historical
 * spend time-travel replay across BroccoliDB reactive tables.
 *
 * Enables SRE and FinOps teams to snapshot system state before high-risk
 * deployments and replay historical traffic under simulated governance policies.
 */
import { SpendLedgerRecord } from './BroccoliSpendAnalytics.js';
import { AnomalyDetectionRecord } from '../governance/SpendAnomalyDetector.js';
import { CachedCompletionRecord } from '../optimization/SemanticEdgeCache.js';
export interface SpendTimelineCheckpoint {
    id: string;
    label: string;
    timestampMs: number;
    stateRootHash: string;
    ledgerRecordsCount: number;
    anomalyRecordsCount: number;
    cachedRecordsCount: number;
    totalGrossRetailUsd: number;
    totalAvoidedWasteUsd: number;
    snapshot: {
        ledger: readonly SpendLedgerRecord[];
        anomalies: readonly AnomalyDetectionRecord[];
        cache: readonly CachedCompletionRecord[];
    };
}
export declare class BroccoliSpendTimeline {
    private static checkpoints;
    private static readonly MAX_CHECKPOINTS;
    /**
     * Creates an atomic cryptographic checkpoint of all BroccoliDB spend and cache tables
     */
    static createCheckpoint(label?: string): SpendTimelineCheckpoint;
    /**
     * Restores table states to an earlier historical checkpoint (Time-Travel)
     */
    static restoreCheckpoint(checkpointId: string): boolean;
    /**
     * Lists all available historical checkpoints
     */
    static listCheckpoints(): readonly SpendTimelineCheckpoint[];
    /**
     * Clears all checkpoints for test isolation
     */
    static clear(): void;
}
//# sourceMappingURL=BroccoliSpendTimeline.d.ts.map