# Architecture

PromptCompressor is a local transformation and accounting library. It is layered so callers can use a small convenience API or reach the original algorithms directly.

```text
Application
    │
    ├── PromptCompressor              package-level pipeline
    ├── ContextCompactor              conversation history reduction
    ├── OutputVerbosityOptimizer      output-token control
    └── TokenCostCalculator           offline economics
            │
            ▼
    BroccoliCompactionFacade          bounded public compaction boundary
            │
            ├── DomainSpendOptimizer  domain detection + specialized compactors
            ├── HighVelocityPipeline  logs, metrics, traces, streams
            ├── IncidentCascader       incident partitioning and reduction
            ├── DocumentPyramid        hierarchical document reduction
            └── CompactionSafety      factual provenance gate
            │
            ▼
    BroccoliDB substrate              tables, indexes, aggregation, WAL, CAS, mutex
            │
            ├── Prompt/cache substrate
            ├── Deduplication buffers
            ├── Spend leases and ledgers
            └── Timeline/checkpoint state
```

## Data flow

1. The caller supplies text, messages, structured records, or a stream payload.
2. The selected boundary validates type, size, and batch limits.
3. A deterministic representation reducer removes redundancy, clusters repeated records, or preserves only the required structure.
4. Domain transformations pass through `BroccoliCompactionSafety`, which checks high-risk numbers, dates, percentages, identifiers, and measured values against the source.
5. The result returns the representation plus token/savings metadata. No model call is made.
6. Optional cache and spend components record hashes, avoided tokens, leases, actual cost, anomalies, and checkpoints in process memory or the selected local substrate.

## Safety boundary

Use `BroccoliCompactionFacade` for production compaction. It is the supported boundary because it centralizes input limits and provenance verification. The individual `Broccoli*Compactor` classes remain available for compatibility and specialized experimentation, but callers that bypass the facade also bypass its input and safety policy.

The provenance gate is conservative. It can return the unmodified input when a transformed result contains a high-risk fact that cannot be grounded in the source. That fallback is intentional: preserving fidelity takes priority over reduction percentage.

## Runtime and persistence

The package has no network, provider SDK, database, or framework runtime dependency. Most tables, caches, leases, and analytics are process-local. The BroccoliDB WAL/CAS modules can use Node filesystem primitives where configured by the existing implementation; applications should choose their storage directory and lifecycle policy explicitly.

The package is Node-oriented because several buffers use `node:crypto`, `node:fs`, `node:path`, `node:zlib`, and related APIs. It is not a browser bundle without an adapter layer.

## Token and cost semantics

The port retains the existing source semantics, including the `Math.ceil(characterCount / 4)` estimate used by several reducers. This is a fast planning estimate, not a tokenizer. For billing, use provider usage fields and feed those actual counts into `TokenCostCalculator`.

Cache savings and model-tier savings are separate from raw prompt reduction:

- Compaction reduces the representation sent to a model.
- Prefix restructuring increases the chance that a stable prefix is cacheable.
- Semantic cache hits can avoid an inference request entirely.
- Tier cascading and speculative routing reduce the price of eligible requests.
- Spend governance can block or require evidence for unsafe or unbudgeted routes.
