/**
 * GALXAI BroccoliDB Multi-Thousand-Page Mega-Incident Stream Cascader & Map-Reduce Substrate
 *
 * Produces a bounded, extractive forensic digest from large incident-log strings:
 *
 * 1. Bounded Partition Analysis:
 *    - Analyzes fixed-size slices after the caller provides the source string.
 *
 * 2. Synchronous Map Phase with Anomaly Salience Scoring:
 *    - Evaluates each partition for high-severity anomaly triggers (SEV-0/FATAL/PANIC/BREACH/VIOLATION), statistical variance (>3-sigma), and root-cause indicators.
 *    - Collapses repetitive cascading failure logs (e.g. 500,000 duplicate connection-refused errors into single chronological burst spans).
 *
 * 3. Hierarchical Multi-Level Semantic Tree Reduce:
 *    - Recursively merges partition digests into a unified global chronological timeline, cross-system dependency graph, and critical forensic event log.
 *
 * 4. U-Shaped Attention Root-Cause Elevation:
 *    - Positions the pre-incident baseline and triggering root cause at the Top (Primacy), contextual subsystem telemetry in the Middle, and final post-incident state and damages at the Bottom (Recency).
 *
 * The structured partition digests remain available when the prompt budget omits timeline entries.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface MegaIncidentInput {
    incidentTitle?: string;
    totalPages?: number;
    rawStreamText: string;
    focusKeywords?: string[];
    targetTokenBudget?: number;
}
export interface PartitionMicroDigest {
    partitionIndex: number;
    pageRange: string;
    anomalyScore: number;
    severityLevel: 'SEV_0_CRITICAL' | 'SEV_1_HIGH' | 'SEV_2_MEDIUM' | 'SEV_3_LOW' | 'NORMAL';
    timestamps: string[];
    keyErrorsAndEntities: string[];
    collapsedRepetitionCount: number;
    forensicDigest: string;
}
export interface MegaIncidentCascaderResult {
    wasCompacted: boolean;
    incidentTitle: string;
    detectedTotalPages: number;
    totalPartitionsMapped: number;
    criticalAnomalyPartitions: number;
    collapsedRepetitiveErrors: number;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    targetTokenBudget: number;
    metTargetTokenBudget: boolean;
    omittedTimelinePartitions: number;
    rootCauseTriggerSnippet: string;
    compactedIncidentPrompt: string;
    partitionDigests: PartitionMicroDigest[];
}
export declare class BroccoliMegaIncidentStreamCascader {
    private static instance;
    readonly incidentTable: BroccoliDbTable<{
        id: string;
        totalPages: number;
        originalTokens: number;
        compactedTokens: number;
        tokensSaved: number;
        criticalAnomalies: number;
        timestampMs: number;
    }>;
    private static readonly TIMESTAMP_REGEX;
    private static readonly CRITICAL_SEVERITY_REGEX;
    private static readonly ERROR_MESSAGE_REGEX;
    private static readonly NUMERICAL_METRIC_REGEX;
    private constructor();
    static getInstance(): BroccoliMegaIncidentStreamCascader;
    /**
     * Main cascading entrypoint for multi-thousand-page incident streams
     */
    static cascadeMegaIncident(input: MegaIncidentInput | string): MegaIncidentCascaderResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliMegaIncidentStreamCascader.d.ts.map