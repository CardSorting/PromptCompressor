# API reference

The root export is intentionally organized around safe, common entry points. The complete legacy BroccoliDB surface is also available from the `prompt-compressor/broccolidb` subpath.

Read this alongside [Architecture](ARCHITECTURE.md): exported transforms and accounting helpers are deterministic package operations, while provider invocation, durable billing, tenant isolation, and approval remain host responsibilities.

## Package-level pipeline

### `PromptCompressor.compress(input, options?)`

Returns a `PromptCompressionResult` with the transformed text, token estimates, savings, selected path, and any prefix/domain metadata.

Options:

- `domainHint?: string` — force or guide the domain optimizer.
- `taskType?: string` — task label for adaptive representation selection.
- `tokenBudget?: number` — optional selector budget.
- `restructurePrefix?: boolean` — defaults to `true`; move volatile leading metadata into a dynamic context section.

### `PromptCompressor.compactMessages(messages, options?)`

Delegates to `ContextCompactor.compact`.

### `PromptCompressor.optimizeOutput(messages, options?)`

Delegates to `OutputVerbosityOptimizer.optimizeRequest`, which can add a concise-output directive for API or structured workloads.

## Compaction facade

`BroccoliCompactionFacade` is the hardened public boundary for compaction. Useful methods include:

```ts
BroccoliCompactionFacade.compactDomain(text, domainHint?);
BroccoliCompactionFacade.compactBatch(items, options?);
BroccoliCompactionFacade.compactLogStream(logs, options?);
BroccoliCompactionFacade.compactMetricStream(metrics, options?);
BroccoliCompactionFacade.compactTraceStream(traces, options?);
BroccoliCompactionFacade.compactStructuredStream(records, options?);
BroccoliCompactionFacade.compactIncident(input);
BroccoliCompactionFacade.compactDocument(input);
BroccoliCompactionFacade.compact(request);
BroccoliCompactionFacade.selectRepresentation(options);
BroccoliCompactionFacade.verifyProvenance(source, compacted);
BroccoliCompactionFacade.getMetrics();
BroccoliCompactionFacade.clearAll();
```

The dispatcher accepts 19 modes:

`domain`, `batch`, `log_stream`, `metric_stream`, `trace_stream`, `structured_stream`, `network_stream`, `orderbook_stream`, `window_stream`, `sensor_stream`, `clickstream`, `genomic_stream`, `stream_envelope`, `ebpf_stream`, `k8s_watch_stream`, `geospatial_stream`, `arrow_dict_stream`, `incident`, and `document`.

The facade applies defensive bounds before processing: text is limited to 2,000,000 characters, batches to 10,000 frames, and incident budgets to 1,024–128,000 tokens.

## Prompt and cache optimizers

- `ContextCompactor` — preserves the system prompt and recent turns while summarizing aged history.
- `OutputVerbosityOptimizer` — adds concise-output instructions for structured/API requests.
- `PromptPrefixRestructurer` — moves timestamps, UUIDs, trace IDs, and other volatile headers out of the cache-sensitive prefix.
- `SemanticEdgeCache` — normalized exact-query cache with TTL, hit counts, avoided-token metrics, and natural-language table queries.
- `BroccoliPromptCASVault` — content-addressable prompt storage and compression statistics.
- `BroccoliPromptDeduplicator`, `BroccoliPromptCanonicalizer`, `BroccoliKVCacheOptimizer`, and related buffers — reusable lower-level representations exported by the BroccoliDB subpath.

## Spend and routing controls

- `TokenCostCalculator` — prompt, cached-input, cache-write, completion, reasoning, audio, image, batch, retail-equivalent, and savings calculations.
- `ModelCatalog` — model resolution, aliases, catalog queries, and aggregations.
- `BroccoliTierCascader` — routes routine, standard, and complex workloads across Luna, Terra, and Sol tiers.
- `BroccoliSpeculativeRouter` — attempts a lower-cost draft and falls back when confidence is insufficient.
- `GalxSpendGovernanceEngine` — observes, recommends, or enforces deterministic model, output, attribution, cost, prefix, and evidence policies.
- `BroccoliLiveSpendGuard`, `BroccoliSpendLease`, `BroccoliSpendWAL`, `BroccoliSpendAnalytics`, `BroccoliSpendTimeline`, and `BroccoliSpendSubstrate` — budget reservations, durable accounting, anomaly-ready analytics, checkpoints, and lifecycle coordination.
- `SpendAnomalyDetector` and `GovernanceAlertDispatcher` — velocity anomaly detection and Slack/PagerDuty payload formatting.

## Subpaths

```ts
import * as broccolidb from 'prompt-compressor/broccolidb';
import * as evaluation from 'prompt-compressor/eval';
```

`prompt-compressor/broccolidb` exposes the full existing BroccoliDB index. `prompt-compressor/eval` exposes the ported inference-boundary and tier-cascading evaluation helpers.

## Error behavior

Invalid input types throw `TypeError`. Configured size or count violations throw `RangeError`. Domain compaction is fail-closed: if provenance verification finds unsupported high-risk facts, the result falls back to the original source and reports `fidelityStatus: 'fallback'`.

## Evidence semantics

The API reports planning metadata such as estimated tokens, avoided tokens, cache hits, and catalog-derived prices. Preserve the original input and the returned metadata with the request record, but label these fields as estimates until the host attaches provider-reported usage. A local cache hit or a lower-cost route can avoid a request; it does not by itself prove a financial saving until the host verifies the provider outcome and accounting policy.
