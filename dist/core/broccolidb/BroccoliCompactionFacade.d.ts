/**
 * GALXAI BroccoliDB Production Compaction Facade
 *
 * The supported, safe public boundary for all enterprise data compaction, streaming
 * deduplication, high-velocity log/trace/metric/network/orderbook/window/sensor/clickstream/genomic/envelope/ebpf/k8s/geospatial/arrow streams,
 * and forensic reduction workflows.
 *
 * Guarantees:
 * 1. Provenance Gate Enforcement: Direct generated compactors are shielded; all domain
 *    transformations pass through BroccoliCompactionSafety fail-closed verification.
 * 2. Strict Input Bounds: Rejects unbounded strings, malformed budgets, and out-of-range
 *    frame batches to prevent heap exhaustion before token slicing.
 * 3. Unified Polymorphic API: Single safe entry point for domain, high-velocity batch,
 *    Drain log clustering, TSDB metric downsampling, OTel trace critical path extraction,
 *    columnar structured streaming, NetFlow packet summaries, Level-2 order book depth,
 *    sliding-window streaming, sensor telemetry, frontend clickstreams, genomic mutations,
 *    multi-stream hybrid envelopes, Linux kernel eBPF runtime security, K8s cluster watch diffs,
 *    AIS/ADS-B geospatial trajectories, Apache Arrow columnar dictionary encoding,
 *    mega-incident log cascade, and hierarchical document pyramid workflows.
 */
import { DomainOptimizationResult } from './BroccoliDomainSpendOptimizer.js';
import { HighVelocityBatchResult, IngestionStreamFrame, LogStreamCluster, LogStreamCompactionResult, MetricStreamSeries, MetricStreamCompactionResult, TraceSpanSummary, TraceStreamCompactionResult, StructuredStreamColumnSummary, StructuredStreamCompactionResult, NetworkPacketFlowSummary, NetworkPacketStreamCompactionResult, OrderBookDepthLevel, OrderBookStreamCompactionResult, SlidingWindowStats, SlidingWindowStreamCompactionResult, SensorTelemetryChannel, SensorStreamCompactionResult, ClickstreamSessionSummary, ClickstreamCompactionResult, GenomicVariantSummary, GenomicStreamCompactionResult, StreamEnvelopeDigestItem, StreamEnvelopeCompactionResult, EbpfProcessTreeItem, EbpfStreamCompactionResult, K8sResourceDelta, K8sWatchStreamCompactionResult, GeospatialTrajectory, GeospatialStreamCompactionResult, ArrowDictionaryColumn, ArrowDictionaryStreamCompactionResult } from './BroccoliHighVelocityPipeline.js';
import { MegaIncidentInput, MegaIncidentCascaderResult, PartitionMicroDigest } from './BroccoliMegaIncidentStreamCascader.js';
import { MultiPageDocumentInput, MegaDocumentPyramidResult, ExtractedSectionDigest } from './BroccoliMegaDocumentPyramidCompactor.js';
import { CompactionFidelityStatus, CompactionFidelityResult } from './BroccoliCompactionSafety.js';
export type { DomainOptimizationResult, HighVelocityBatchResult, IngestionStreamFrame, LogStreamCluster, LogStreamCompactionResult, MetricStreamSeries, MetricStreamCompactionResult, TraceSpanSummary, TraceStreamCompactionResult, StructuredStreamColumnSummary, StructuredStreamCompactionResult, NetworkPacketFlowSummary, NetworkPacketStreamCompactionResult, OrderBookDepthLevel, OrderBookStreamCompactionResult, SlidingWindowStats, SlidingWindowStreamCompactionResult, SensorTelemetryChannel, SensorStreamCompactionResult, ClickstreamSessionSummary, ClickstreamCompactionResult, GenomicVariantSummary, GenomicStreamCompactionResult, StreamEnvelopeDigestItem, StreamEnvelopeCompactionResult, EbpfProcessTreeItem, EbpfStreamCompactionResult, K8sResourceDelta, K8sWatchStreamCompactionResult, GeospatialTrajectory, GeospatialStreamCompactionResult, ArrowDictionaryColumn, ArrowDictionaryStreamCompactionResult, MegaIncidentInput, MegaIncidentCascaderResult, PartitionMicroDigest, MultiPageDocumentInput, MegaDocumentPyramidResult, ExtractedSectionDigest, CompactionFidelityStatus, CompactionFidelityResult, };
export type CompactionMode = 'domain' | 'batch' | 'incident' | 'document' | 'log_stream' | 'metric_stream' | 'trace_stream' | 'structured_stream' | 'network_stream' | 'orderbook_stream' | 'window_stream' | 'sensor_stream' | 'clickstream' | 'genomic_stream' | 'stream_envelope' | 'ebpf_stream' | 'k8s_watch_stream' | 'geospatial_stream' | 'arrow_dict_stream';
export interface CompactionBatchItem {
    text?: string;
    payload?: string;
    domain?: string;
    domainHint?: string;
    id?: string;
    source?: string;
    timestampMs?: number;
}
export interface CompactionDomainPayload {
    mode?: 'domain';
    text: string;
    domainHint?: string;
    domain?: string;
}
export interface CompactionBatchPayload {
    mode: 'batch';
    items?: CompactionBatchItem[];
    frames?: CompactionBatchItem[];
    options?: {
        flushMetrics?: boolean;
    };
}
export interface CompactionLogStreamPayload {
    mode: 'log_stream';
    logs: string | string[];
    options?: {
        maxClusters?: number;
        preserveVerbatimSamples?: number;
    };
}
export interface CompactionMetricStreamPayload {
    mode: 'metric_stream';
    metrics: string | string[];
    options?: {
        maxSeries?: number;
    };
}
export interface CompactionTraceStreamPayload {
    mode: 'trace_stream';
    traces: string | string[] | any[];
    options?: {
        maxSpans?: number;
    };
}
export interface CompactionStructuredStreamPayload {
    mode: 'structured_stream';
    records: string | any[];
    options?: {
        maxRows?: number;
    };
}
export interface CompactionNetworkStreamPayload {
    mode: 'network_stream';
    packets: string | string[] | any[];
    options?: {
        maxFlows?: number;
    };
}
export interface CompactionOrderBookStreamPayload {
    mode: 'orderbook_stream';
    ticks: string | string[] | any[];
    options?: {
        depthLevels?: number;
    };
}
export interface CompactionWindowStreamPayload {
    mode: 'window_stream';
    frames: string | string[] | any[];
    options?: {
        windowSeconds?: number;
    };
}
export interface CompactionSensorStreamPayload {
    mode: 'sensor_stream';
    readings: string | string[] | any[];
    options?: {
        maxChannels?: number;
    };
}
export interface CompactionClickstreamPayload {
    mode: 'clickstream';
    events: string | string[] | any[];
    options?: {
        maxSessions?: number;
    };
}
export interface CompactionGenomicStreamPayload {
    mode: 'genomic_stream';
    variants: string | string[] | any[];
    options?: {
        maxVariants?: number;
    };
}
export interface CompactionStreamEnvelopePayload {
    mode: 'stream_envelope';
    payloads: Array<{
        type?: string;
        data: any;
    } | string>;
    options?: {
        maxSections?: number;
    };
}
export interface CompactionEbpfStreamPayload {
    mode: 'ebpf_stream';
    events: string | string[] | any[];
    options?: {
        maxProcesses?: number;
    };
}
export interface CompactionK8sWatchStreamPayload {
    mode: 'k8s_watch_stream';
    events: string | string[] | any[];
    options?: {
        maxDeltas?: number;
    };
}
export interface CompactionGeospatialStreamPayload {
    mode: 'geospatial_stream';
    points: string | string[] | any[];
    options?: {
        maxEntities?: number;
    };
}
export interface CompactionArrowDictionaryStreamPayload {
    mode: 'arrow_dict_stream';
    rows: any[];
    options?: {
        maxColumns?: number;
    };
}
export interface CompactionIncidentPayload {
    mode: 'incident';
    rawStreamText: string;
    incidentTitle?: string;
    totalPages?: number;
    focusKeywords?: string[];
    targetTokenBudget?: number;
}
export interface CompactionDocumentPayload {
    mode: 'document';
    rawText: string;
    title?: string;
    totalPages?: number;
    focusQuery?: string;
}
export type CompactionRequest = CompactionDomainPayload | CompactionBatchPayload | CompactionLogStreamPayload | CompactionMetricStreamPayload | CompactionTraceStreamPayload | CompactionStructuredStreamPayload | CompactionNetworkStreamPayload | CompactionOrderBookStreamPayload | CompactionWindowStreamPayload | CompactionSensorStreamPayload | CompactionClickstreamPayload | CompactionGenomicStreamPayload | CompactionStreamEnvelopePayload | CompactionEbpfStreamPayload | CompactionK8sWatchStreamPayload | CompactionGeospatialStreamPayload | CompactionArrowDictionaryStreamPayload | CompactionIncidentPayload | CompactionDocumentPayload;
export interface CompactionDomainResponse {
    mode: 'domain';
    result: DomainOptimizationResult;
}
export interface CompactionBatchResponse {
    mode: 'batch';
    result: HighVelocityBatchResult;
}
export interface CompactionLogStreamResponse {
    mode: 'log_stream';
    result: LogStreamCompactionResult;
}
export interface CompactionMetricStreamResponse {
    mode: 'metric_stream';
    result: MetricStreamCompactionResult;
}
export interface CompactionTraceStreamResponse {
    mode: 'trace_stream';
    result: TraceStreamCompactionResult;
}
export interface CompactionStructuredStreamResponse {
    mode: 'structured_stream';
    result: StructuredStreamCompactionResult;
}
export interface CompactionNetworkStreamResponse {
    mode: 'network_stream';
    result: NetworkPacketStreamCompactionResult;
}
export interface CompactionOrderBookStreamResponse {
    mode: 'orderbook_stream';
    result: OrderBookStreamCompactionResult;
}
export interface CompactionWindowStreamResponse {
    mode: 'window_stream';
    result: SlidingWindowStreamCompactionResult;
}
export interface CompactionSensorStreamResponse {
    mode: 'sensor_stream';
    result: SensorStreamCompactionResult;
}
export interface CompactionClickstreamResponse {
    mode: 'clickstream';
    result: ClickstreamCompactionResult;
}
export interface CompactionGenomicStreamResponse {
    mode: 'genomic_stream';
    result: GenomicStreamCompactionResult;
}
export interface CompactionStreamEnvelopeResponse {
    mode: 'stream_envelope';
    result: StreamEnvelopeCompactionResult;
}
export interface CompactionEbpfStreamResponse {
    mode: 'ebpf_stream';
    result: EbpfStreamCompactionResult;
}
export interface CompactionK8sWatchStreamResponse {
    mode: 'k8s_watch_stream';
    result: K8sWatchStreamCompactionResult;
}
export interface CompactionGeospatialStreamResponse {
    mode: 'geospatial_stream';
    result: GeospatialStreamCompactionResult;
}
export interface CompactionArrowDictionaryStreamResponse {
    mode: 'arrow_dict_stream';
    result: ArrowDictionaryStreamCompactionResult;
}
export interface CompactionIncidentResponse {
    mode: 'incident';
    result: MegaIncidentCascaderResult;
}
export interface CompactionDocumentResponse {
    mode: 'document';
    result: MegaDocumentPyramidResult;
}
export type CompactionResponse = CompactionDomainResponse | CompactionBatchResponse | CompactionLogStreamResponse | CompactionMetricStreamResponse | CompactionTraceStreamResponse | CompactionStructuredStreamResponse | CompactionNetworkStreamResponse | CompactionOrderBookStreamResponse | CompactionWindowStreamResponse | CompactionSensorStreamResponse | CompactionClickstreamResponse | CompactionGenomicStreamResponse | CompactionStreamEnvelopeResponse | CompactionEbpfStreamResponse | CompactionK8sWatchStreamResponse | CompactionGeospatialStreamResponse | CompactionArrowDictionaryStreamResponse | CompactionIncidentResponse | CompactionDocumentResponse;
export interface CompactionFacadeMetrics {
    domainOptimizerAuditRecords: number;
    velocityMetricsCount: number;
    incidentAuditRecords: number;
    documentAuditRecords: number;
    timestampMs: number;
}
export declare class BroccoliCompactionFacade {
    static readonly MAX_TEXT_LENGTH = 2000000;
    static readonly MAX_BATCH_FRAMES = 10000;
    static readonly MIN_INCIDENT_BUDGET = 1024;
    static readonly MAX_INCIDENT_BUDGET = 128000;
    /**
     * Safe domain compaction with automatic provenance gate verification.
     */
    static compactDomain(text: string, domainHint?: string): DomainOptimizationResult;
    /**
     * High-velocity sub-microsecond batch stream compaction with L1 LRU memoization.
     */
    static compactBatch(items: CompactionBatchItem[], options?: {
        flushMetrics?: boolean;
    }): HighVelocityBatchResult;
    /**
     * High-velocity Drain-style parameterized log clustering.
     */
    static compactLogStream(logs: string | string[], options?: {
        maxClusters?: number;
        preserveVerbatimSamples?: number;
    }): LogStreamCompactionResult;
    /**
     * High-velocity time-series metric telemetry downsampling.
     */
    static compactMetricStream(metrics: string | string[], options?: {
        maxSeries?: number;
    }): MetricStreamCompactionResult;
    /**
     * OpenTelemetry / W3C distributed trace call graph compactor.
     */
    static compactTraceStream(traces: string | string[] | any[], options?: {
        maxSpans?: number;
    }): TraceStreamCompactionResult;
    /**
     * High-velocity columnar structured stream compactor for JSON / NDJSON object streams.
     */
    static compactStructuredStream(records: string | any[], options?: {
        maxRows?: number;
    }): StructuredStreamCompactionResult;
    /**
     * Network Packet / NetFlow / IPFIX / sFlow / PCAP flow log compactor.
     */
    static compactNetworkStream(packets: string | string[] | any[], options?: {
        maxFlows?: number;
    }): NetworkPacketStreamCompactionResult;
    /**
     * Financial Level-2 / Level-3 Order Book Depth compactor.
     */
    static compactOrderBookStream(ticks: string | string[] | any[], options?: {
        depthLevels?: number;
    }): OrderBookStreamCompactionResult;
    /**
     * Continuous Sliding-Window Stream Compactor.
     */
    static compactSlidingWindowStream(frames: string | string[] | any[], options?: {
        windowSeconds?: number;
    }): SlidingWindowStreamCompactionResult;
    /**
     * Industrial IoT & Predictive Maintenance Sensor Array Compactor.
     */
    static compactSensorStream(readings: string | string[] | any[], options?: {
        maxChannels?: number;
    }): SensorStreamCompactionResult;
    /**
     * Frontend RUM, Web Vitals, & Session Replay Clickstream Compactor.
     */
    static compactClickstream(events: string | string[] | any[], options?: {
        maxSessions?: number;
    }): ClickstreamCompactionResult;
    /**
     * Genomic NGS Variant & Alignment Mutation Stream Compactor.
     */
    static compactGenomicStream(variants: string | string[] | any[], options?: {
        maxVariants?: number;
    }): GenomicStreamCompactionResult;
    /**
     * Multi-Stream Hybrid Multiplexing Ingestion Envelope.
     */
    static compactStreamEnvelope(payloads: Array<{
        type?: string;
        data: any;
    } | string>, options?: {
        maxSections?: number;
    }): StreamEnvelopeCompactionResult;
    /**
     * Linux Kernel eBPF Syscall & Runtime Security Event Stream Compactor.
     */
    static compactEbpfStream(events: string | string[] | any[], options?: {
        maxProcesses?: number;
    }): EbpfStreamCompactionResult;
    /**
     * Kubernetes API Server Watch & Cluster State Delta Stream Compactor.
     */
    static compactK8sWatchStream(events: string | string[] | any[], options?: {
        maxDeltas?: number;
    }): K8sWatchStreamCompactionResult;
    /**
     * AIS Maritime & ADS-B Flight Geospatial Transponder Telemetry Compactor.
     */
    static compactGeospatialStream(points: string | string[] | any[], options?: {
        maxEntities?: number;
    }): GeospatialStreamCompactionResult;
    /**
     * Apache Arrow / Parquet Dictionary & Bit-Packed Columnar Compactor.
     */
    static compactArrowDictionaryStream(rows: any[], options?: {
        maxColumns?: number;
    }): ArrowDictionaryStreamCompactionResult;
    /**
     * Multi-thousand-page mega-incident log cascading with T0 root-cause anomaly isolation.
     */
    static compactIncident(input: MegaIncidentInput): MegaIncidentCascaderResult;
    /**
     * Multi-hundred-page hierarchical document pyramid compaction with extractive factual anchoring.
     */
    static compactDocument(input: MultiPageDocumentInput): MegaDocumentPyramidResult;
    /**
     * Polymorphic dispatcher handling arbitrary typed compaction requests.
     */
    static compact(req: CompactionRequest): CompactionResponse;
    /**
     * Verifies source-to-compacted provenance directly using the safety guard.
     */
    static verifyProvenance(source: string, compacted: string): {
        status: CompactionFidelityStatus;
        unsupportedFacts: string[];
    };
    /**
     * Retrieves aggregate telemetry counts across all compaction substrates.
     */
    static getMetrics(): CompactionFacadeMetrics;
    /**
     * Clears in-memory caches and audit tables for test isolation.
     */
    static clearAll(): void;
    /**
     * Adaptive Representation-Selection Substrate (ADR 0067).
     * Dynamically selects the optimal representation (Identity Bypass vs Specialized Compactor)
     * to guarantee maximum Action Safety while stripping institutional noise.
     */
    static selectRepresentation(options: {
        text: string;
        taskType?: string;
        tokenBudget?: number;
    }): {
        decision: 'BYPASS_IDENTITY' | 'COMPACT_GOVERNANCE' | 'COMPACT_INCIDENT' | 'COMPACT_DOCUMENT' | 'COMPACT_DOMAIN';
        selectedRepresentation: string;
        originalTokens: number;
        outputTokens: number;
        reductionPercentage: number;
        reason: string;
    };
    private static validateString;
}
//# sourceMappingURL=BroccoliCompactionFacade.d.ts.map