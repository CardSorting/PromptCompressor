/**
 * GALXAI BroccoliDB Ultra High-Velocity Compaction & Ingestion Pipeline
 *
 * High-Performance Sub-Microsecond Spend-Saving Engine for 180+ Enterprise Domains:
 * 1. Single-pass Aho-Corasick domain router for deterministic keyword classification across all 180 domains.
 * 2. Drain-style parameterized log clustering (compactLogStream) for collapsing 50,000+ log lines into dense templates.
 * 3. Gorilla/TSDB time-series telemetry downsampling (compactMetricStream) for high-velocity metrics feeds.
 * 4. Bounded L1 LRU memoizer with source verification at the sampled-hash boundary.
 * 5. Fail-closed domain compaction via BroccoliDomainSpendOptimizer provenance checks.
 * 6. Vectorized batch and async stream processing with in-memory telemetry recording.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
import { DomainOptimizationResult } from './BroccoliDomainSpendOptimizer.js';
export interface HighVelocityBatchResult {
    totalProcessed: number;
    totalOriginalTokens: number;
    totalCompactedTokens: number;
    totalTokensSaved: number;
    aggregateSavingsPercentage: number;
    averageLatencyMicros: number;
    cacheHitRatio: number;
    throughputOpsPerSec: number;
    results: DomainOptimizationResult[];
}
export interface IngestionStreamFrame {
    id: string;
    source: string;
    timestampMs: number;
    payload: string;
    domainHint?: string;
}
export interface LogStreamCluster {
    template: string;
    count: number;
    severity: 'FATAL' | 'ERROR' | 'WARN' | 'INFO' | 'DEBUG';
    firstSeen?: string;
    lastSeen?: string;
    sampleLine: string;
}
export interface LogStreamCompactionResult {
    totalLogLines: number;
    uniqueTemplatesCount: number;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    clusters: LogStreamCluster[];
    compactedLogPrompt: string;
    fidelityStatus: 'verified' | 'fallback';
}
export interface MetricStreamSeries {
    metricName: string;
    sampleCount: number;
    min: number;
    max: number;
    avg: number;
    latest: number;
    unit?: string;
    hasAnomaly: boolean;
}
export interface MetricStreamCompactionResult {
    totalMetricPoints: number;
    uniqueSeriesCount: number;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    series: MetricStreamSeries[];
    compactedMetricPrompt: string;
    fidelityStatus: 'verified' | 'fallback';
}
export interface TraceSpanSummary {
    traceId: string;
    spanId: string;
    parentSpanId?: string;
    service: string;
    operation: string;
    durationMs: number;
    statusCode: 'OK' | 'ERROR' | 'UNSET';
    isCriticalPath: boolean;
    httpStatus?: number;
    attributesSummary?: string;
}
export interface TraceStreamCompactionResult {
    totalSpans: number;
    criticalPathSpanCount: number;
    errorSpanCount: number;
    rootTraceId?: string;
    totalTraceDurationMs: number;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    spans: TraceSpanSummary[];
    compactedTracePrompt: string;
    fidelityStatus: 'verified' | 'fallback';
}
export interface StructuredStreamColumnSummary {
    key: string;
    distinctCount: number;
    sampleValues: string[];
}
export interface StructuredStreamCompactionResult {
    totalRecords: number;
    columnsDetected: string[];
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    columnSummaries: StructuredStreamColumnSummary[];
    compactedStructuredPrompt: string;
    fidelityStatus: 'verified' | 'fallback';
}
export interface NetworkPacketFlowSummary {
    flowKey: string;
    sourceIp: string;
    destIp: string;
    protocol: string;
    totalPackets: number;
    totalBytes: number;
    isSecurityAlert: boolean;
    alertReason?: string;
}
export interface NetworkPacketStreamCompactionResult {
    totalPackets: number;
    totalFlows: number;
    topTalkersCount: number;
    securityAlertCount: number;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    flows: NetworkPacketFlowSummary[];
    compactedNetworkPrompt: string;
    fidelityStatus: 'verified' | 'fallback';
}
export interface OrderBookDepthLevel {
    price: number;
    quantity: number;
    orderCount: number;
}
export interface OrderBookStreamCompactionResult {
    symbol: string;
    totalTickUpdates: number;
    bestBid: number;
    bestAsk: number;
    spread: number;
    spreadBps: number;
    vwap: number;
    imbalanceRatio: number;
    bids: OrderBookDepthLevel[];
    asks: OrderBookDepthLevel[];
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedOrderBookPrompt: string;
    fidelityStatus: 'verified' | 'fallback';
}
export interface SlidingWindowStats {
    windowSizeSeconds: number;
    totalFramesIngested: number;
    framesInActiveWindow: number;
    ratePerSecond: number;
    movingAverage: number;
    trendDirection: 'INCREASING' | 'DECREASING' | 'STABLE';
    anomalyCount: number;
}
export interface SlidingWindowStreamCompactionResult {
    windowStats: SlidingWindowStats;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedWindowPrompt: string;
    fidelityStatus: 'verified' | 'fallback';
}
export interface SensorTelemetryChannel {
    channelName: string;
    sensorType: 'VIBRATION' | 'THERMAL' | 'PRESSURE' | 'ACOUSTIC' | 'GENERIC';
    readingCount: number;
    rms: number;
    peak: number;
    kurtosis: number;
    unit?: string;
    isoAlarmLevel: 'NORMAL' | 'WARNING' | 'ALARM' | 'CRITICAL';
}
export interface SensorStreamCompactionResult {
    totalReadings: number;
    channelCount: number;
    alarmChannelCount: number;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    channels: SensorTelemetryChannel[];
    compactedSensorPrompt: string;
    fidelityStatus: 'verified' | 'fallback';
}
export interface ClickstreamSessionSummary {
    sessionId: string;
    userId?: string;
    totalEvents: number;
    durationMs: number;
    pageViews: string[];
    rageClicksCount: number;
    deadClicksCount: number;
    hasConversion: boolean;
    exitPage?: string;
}
export interface ClickstreamCompactionResult {
    totalEvents: number;
    sessionCount: number;
    rageClickHotspotsCount: number;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    sessions: ClickstreamSessionSummary[];
    compactedClickstreamPrompt: string;
    fidelityStatus: 'verified' | 'fallback';
}
export interface GenomicVariantSummary {
    chromosome: string;
    position: number;
    ref: string;
    alt: string;
    depth: number;
    alleleFrequency: number;
    clinicalSignificance: 'PATHOGENIC' | 'BENIGN' | 'VUS' | 'NOT_REPORTED';
    geneSymbol?: string;
}
export interface GenomicStreamCompactionResult {
    totalVariantsProcessed: number;
    pathogenicCount: number;
    vusCount: number;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    variants: GenomicVariantSummary[];
    compactedGenomicPrompt: string;
    fidelityStatus: 'verified' | 'fallback';
}
export interface StreamEnvelopeDigestItem {
    streamType: string;
    itemCount: number;
    summary: string;
    tokensSaved: number;
}
export interface StreamEnvelopeCompactionResult {
    totalPayloads: number;
    detectedStreamTypes: string[];
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    digestItems: StreamEnvelopeDigestItem[];
    compactedEnvelopePrompt: string;
    fidelityStatus: 'verified' | 'fallback';
}
export interface EbpfProcessTreeItem {
    pid: number;
    ppid: number;
    comm: string;
    exe: string;
    args?: string;
    user: string;
    containerId?: string;
    syscallCount: number;
}
export interface EbpfStreamCompactionResult {
    totalSyscalls: number;
    uniqueProcesses: number;
    securityThreatCount: number;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    processTree: EbpfProcessTreeItem[];
    mitreTechniquesDetected: string[];
    compactedEbpfPrompt: string;
    fidelityStatus: 'verified' | 'fallback';
}
export interface K8sResourceDelta {
    kind: string;
    namespace: string;
    name: string;
    action: 'ADDED' | 'MODIFIED' | 'DELETED' | 'CRASH_LOOP' | 'OOM_KILLED';
    restarts: number;
    reason?: string;
    message?: string;
}
export interface K8sWatchStreamCompactionResult {
    totalWatchEvents: number;
    resourcesTracked: number;
    unhealthyEventCount: number;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    deltas: K8sResourceDelta[];
    compactedK8sPrompt: string;
    fidelityStatus: 'verified' | 'fallback';
}
export interface GeospatialTrajectory {
    entityId: string;
    entityType: 'AIRCRAFT_ADSB' | 'VESSEL_AIS' | 'VEHICLE_GPS' | 'GENERIC';
    callsign?: string;
    startCoords: [number, number];
    latestCoords: [number, number];
    avgSpeedKnots: number;
    altitudeFt?: number;
    emergencySquawk?: string;
    waypointCount: number;
}
export interface GeospatialStreamCompactionResult {
    totalPoints: number;
    entitiesTracked: number;
    emergencyAlertCount: number;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    trajectories: GeospatialTrajectory[];
    compactedGeospatialPrompt: string;
    fidelityStatus: 'verified' | 'fallback';
}
export interface ArrowDictionaryColumn {
    name: string;
    type: string;
    cardinality: number;
    dictionary: string[];
    nullCount: number;
}
export interface ArrowDictionaryStreamCompactionResult {
    totalRows: number;
    columnCount: number;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    columns: ArrowDictionaryColumn[];
    compactedDictionaryPrompt: string;
    fidelityStatus: 'verified' | 'fallback';
}
export declare class BroccoliHighVelocityPipeline {
    private static instance;
    private readonly l1Cache;
    private readonly l1MaxEntries;
    readonly velocityMetricsTable: BroccoliDbTable<{
        id: string;
        opsProcessed: number;
        tokensSaved: number;
        cacheHits: number;
        avgLatencyNs: number;
        timestampMs: number;
    }>;
    private static readonly KEYWORD_TRIE;
    private static keywordAutomaton;
    private constructor();
    static getInstance(): BroccoliHighVelocityPipeline;
    /**
     * Sampled 32-bit FNV-1a accelerator. Cache hits are always verified against
     * the original source and domain hint, so collisions cannot cross-contaminate results.
     */
    static fastHash(text: string, domainHint?: string): string;
    /**
     * O(input length + matches) single-pass keyword automaton domain detector.
     */
    static fastDetectDomain(rawText: string, domainHint?: string): string;
    /**
     * High-velocity single-item optimization with bounded LRU memoization.
     */
    static processSingle(rawText: string, domainHint?: string): DomainOptimizationResult;
    /**
     * Ultra High-Throughput Batch Processing (100,000+ docs/sec vectorized)
     */
    static processBatch(items: Array<{
        text: string;
        domain?: string;
    }>, options?: {
        flushMetrics?: boolean;
    }): HighVelocityBatchResult;
    /**
     * Drain-style parameterized log clustering for collapsing high-volume repetitive log streams.
     * Parameterizes dynamic variables (<IP>, <NUM>, <UUID>, <HEX>, <URL>, <PATH>) and outputs
     * structured cluster digests with exact sample preservation and occurrence counts.
     */
    static compactLogStream(input: string | string[], options?: {
        maxClusters?: number;
        preserveVerbatimSamples?: number;
    }): LogStreamCompactionResult;
    /**
     * Gorilla/TSDB-style metric stream statistical downsampling.
     * Collapses high-frequency metric measurements into statistical digests (min, max, avg, latest, rate of change).
     */
    static compactMetricStream(input: string | string[], options?: {
        maxSeries?: number;
    }): MetricStreamCompactionResult;
    /**
     * OpenTelemetry / W3C distributed trace call graph compactor.
     * Reconstructs the critical latency path, elevates bottlenecks and error spans, and prunes sub-millisecond leaf RPCs.
     */
    static compactTraceStream(input: string | string[] | any[], options?: {
        maxSpans?: number;
    }): TraceStreamCompactionResult;
    /**
     * Columnar structured stream compactor for high-volume JSON / NDJSON object streams.
     * Discovers schemas and projects repeated dictionary payloads into dense columnar matrices.
     */
    static compactStructuredStream(input: string | any[], options?: {
        maxRows?: number;
    }): StructuredStreamCompactionResult;
    /**
     * Network Packet / NetFlow / IPFIX / sFlow / PCAP flow log compactor.
     * Collapses millions of raw packet flows into top talkers, bidirectional conversation summaries,
     * and automated port scan / SYN flood / data exfiltration security heuristics.
     */
    static compactNetworkPacketStream(input: string | string[] | any[], options?: {
        maxFlows?: number;
    }): NetworkPacketStreamCompactionResult;
    /**
     * Financial Level-2 / Level-3 Order Book & Tick Stream Compactor.
     * Aggregates rapid tick updates into a consolidated Depth-of-Market ladder (Bids, Asks, Spread, VWAP, Imbalance).
     */
    static compactOrderBookStream(input: string | string[] | any[], options?: {
        depthLevels?: number;
    }): OrderBookStreamCompactionResult;
    /**
     * Sliding-Window Streaming Compactor for Continuous Event Feeds.
     * Computes moving averages, event rate per second, and trend directions across sliding time horizons.
     */
    static compactSlidingWindowStream(input: string | string[] | any[], options?: {
        windowSeconds?: number;
    }): SlidingWindowStreamCompactionResult;
    /**
     * Industrial IoT, SCADA, & Predictive Maintenance Sensor Array Compactor.
     * Ingests high-frequency vibration, thermal, pressure, and acoustic sensor streams,
     * computing RMS, Peak-to-Peak, Kurtosis, and ISO 10816 machinery vibration alarm thresholds.
     */
    static compactSensorStream(input: string | string[] | any[], options?: {
        maxChannels?: number;
    }): SensorStreamCompactionResult;
    /**
     * Real-User Monitoring (RUM), Web Vitals, & Session Replay Clickstream Compactor.
     * Collapses frontend event sequences into funnel milestones, rage-click hotspots, and Core Web Vitals diagnostics.
     */
    static compactClickstream(input: string | string[] | any[], options?: {
        maxSessions?: number;
    }): ClickstreamCompactionResult;
    /**
     * Genomic NGS Variant & Alignment Mutation Stream Compactor.
     * Filters matching reference base pairs, isolating clinically significant pathogenic variants,
     * high-impact single nucleotide polymorphisms (SNPs), and VUS mutations.
     */
    static compactGenomicStream(input: string | string[] | any[], options?: {
        maxVariants?: number;
    }): GenomicStreamCompactionResult;
    /**
     * Multi-Stream Hybrid Multiplexing Ingestion Envelope.
     * Discovers heterogeneous payload types inside multi-modal batches (Logs, Metrics, Traces, NetFlow, Orders, Sensors),
     * dispatches each sub-stream to its specialized compactor, and synthesizes a unified digest.
     */
    static compactStreamEnvelope(payloads: Array<{
        type?: string;
        data: any;
    } | string>, options?: {
        maxSections?: number;
    }): StreamEnvelopeCompactionResult;
    /**
     * Linux Kernel eBPF Syscall & Runtime Security Event Stream Compactor.
     * Compresses high-frequency kernel syscall probes (execve, connect, ptrace, bpf),
     * reconstructing process execution trees, isolating MITRE ATT&CK techniques, and pruning repetitive polling loops.
     */
    static compactEbpfStream(input: string | string[] | any[], options?: {
        maxProcesses?: number;
    }): EbpfStreamCompactionResult;
    /**
     * Kubernetes API Server Watch & Cluster State Delta Stream Compactor.
     * Compresses repetitive Pod/Deployment/HPA watch updates, isolating CrashLoopBackOff flickers and OOMKilled events.
     */
    static compactK8sWatchStream(input: string | string[] | any[], options?: {
        maxDeltas?: number;
    }): K8sWatchStreamCompactionResult;
    /**
     * AIS Maritime & ADS-B Flight Geospatial Transponder Telemetry Compactor.
     * Compresses high-frequency GPS/AIS coordinates, isolating emergency squawks and heading changes.
     */
    static compactGeospatialStream(input: string | string[] | any[], options?: {
        maxEntities?: number;
    }): GeospatialStreamCompactionResult;
    /**
     * Apache Arrow / Parquet Dictionary & Bit-Packed Columnar Compactor.
     * Compresses repeated high-cardinality strings and numeric vectors into dictionary lookup tables.
     */
    static compactArrowDictionaryStream(input: any[], options?: {
        maxColumns?: number;
    }): ArrowDictionaryStreamCompactionResult;
    /**
     * Async stream chunk transformer for streaming HTTP / WebSocket feeds with backpressure.
     */
    static processStream(chunkStream: AsyncIterable<string>, options?: {
        domainHint?: string;
    }): AsyncIterable<DomainOptimizationResult>;
    /**
     * Clear all L1 hot memoization caches
     */
    static clear(): void;
    private static writeCacheEntry;
    private static cloneResult;
    private static getKeywordAutomaton;
}
//# sourceMappingURL=BroccoliHighVelocityPipeline.d.ts.map