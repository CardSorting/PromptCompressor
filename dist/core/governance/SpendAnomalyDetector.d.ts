/**
 * GALXAI Enterprise Real-Time Spend Anomaly Detector (Powered by BroccoliDB L1)
 *
 * Computes sub-microsecond sliding-window velocity baselines ($/min and tokens/min)
 * backed by BroccoliDB reactive tables with secondary indexing and natural queries.
 * Detects statistical anomalies (Z-score ≥ 3.0 or >300% sudden velocity surge).
 */
import { BroccoliDbTable } from '../broccolidb/broccolidb-table.js';
export interface VelocityMetricSample {
    timestampMs: number;
    costUsd: number;
    tokens: number;
    serviceId: string;
    department: string;
}
export interface VelocitySampleRecord extends VelocityMetricSample {
    id: string;
}
export interface AnomalyDetectionRecord {
    id: string;
    isAnomaly: boolean;
    zScore: number;
    baselineHourlyRateUsd: number;
    currentSurgeHourlyRateUsd: number;
    velocityMultiplier: number;
    severity: 'low' | 'medium' | 'high' | 'critical';
    triggerReason?: string;
    serviceId: string;
    department: string;
    detectedAtMs: number;
}
export declare class SpendAnomalyDetector {
    private static instance;
    readonly sampleTable: BroccoliDbTable<VelocitySampleRecord>;
    readonly anomalyTable: BroccoliDbTable<AnomalyDetectionRecord>;
    private constructor();
    static getInstance(): SpendAnomalyDetector;
    /**
     * Records a traffic sample and evaluates whether it represents a spend anomaly
     */
    static recordAndEvaluate(sample: VelocityMetricSample, windowDurationMs?: number): AnomalyDetectionRecord;
    /**
     * Executes natural language query across logged spend anomalies in BroccoliDB
     */
    static queryAnomaliesNatural(naturalQuery: string): readonly AnomalyDetectionRecord[];
    /**
     * Resets BroccoliDB tables for testing
     */
    static resetWindows(): void;
}
//# sourceMappingURL=SpendAnomalyDetector.d.ts.map