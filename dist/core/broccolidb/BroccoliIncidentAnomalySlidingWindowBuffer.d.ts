/**
 * GALXAI BroccoliDB Incident Anomaly Multi-Tier Sliding Window Buffer
 *
 * Manages chronological temporal sliding windows during catastrophic mega-incidents:
 * 1. Maintains three distinct temporal buffer zones:
 *    - PRE_INCIDENT_BASELINE (T_-5min steady-state telemetry)
 *    - INCIDENT_SHOCKWAVE_T0 (Root-cause trigger & explosive fault cascading)
 *    - POST_INCIDENT_RECOVERY (Mitigation, failover, and steady-state restoration)
 * 2. Dynamically calculates statistical metric variance, error velocity, and anomaly burst thresholds.
 * 3. Provides instantaneous forensic slice extraction across the exact incident timeline.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export type TemporalZone = 'PRE_INCIDENT_BASELINE' | 'INCIDENT_SHOCKWAVE_T0' | 'POST_INCIDENT_RECOVERY';
export interface TemporalWindowFrame {
    frameId: string;
    timestamp: string;
    timestampMs: number;
    zone: TemporalZone;
    anomalyScore: number;
    severityLevel: string;
    sourceHost: string;
    metricSnapshot: Record<string, number>;
    rawMessage: string;
}
export interface WindowAggregateMetrics {
    totalFrames: number;
    baselineFrames: number;
    shockwaveFrames: number;
    recoveryFrames: number;
    peakAnomalyScore: number;
    peakErrorVelocityPerSec: number;
    isolatedRootCauseFrame?: TemporalWindowFrame;
    shockwaveDurationMs: number;
}
export declare class BroccoliIncidentAnomalySlidingWindowBuffer {
    private static instance;
    private readonly frames;
    private readonly maxFrames;
    private frameSequence;
    readonly windowAuditTable: BroccoliDbTable<{
        id: string;
        totalFrames: number;
        peakAnomaly: number;
        shockwaveDurationMs: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(maxFrames?: number): BroccoliIncidentAnomalySlidingWindowBuffer;
    /** Creates an isolated incident window for a single stream or request. */
    static create(maxFrames?: number): BroccoliIncidentAnomalySlidingWindowBuffer;
    /**
     * Ingests a new event frame into the sliding temporal buffer
     */
    recordFrame(frame: Omit<TemporalWindowFrame, 'frameId' | 'zone'>): TemporalWindowFrame;
    /**
     * Evaluates the entire window and synthesizes incident analytics
     */
    evaluateWindow(): WindowAggregateMetrics;
    /**
     * Extracts a concentrated slice of frames around the T0 root-cause trigger
     */
    extractT0ShockwaveSlice(contextRadius?: number): TemporalWindowFrame[];
    clear(): void;
}
//# sourceMappingURL=BroccoliIncidentAnomalySlidingWindowBuffer.d.ts.map