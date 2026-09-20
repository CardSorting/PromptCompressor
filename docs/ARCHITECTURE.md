# PromptCompressor architecture and strategy

PromptCompressor is a local transformation and accounting library. Its strategy is to reduce the representation sent to a model, protect fidelity, improve cache reuse, and make spend decisions observable without taking ownership of the host application's model call or billing system.

## The strategy loop

```text
discover → classify → choose reduction → preserve safety invariants
        → restructure/cache → estimate and govern spend
        → host model call → reconcile provider usage
        → record evidence → re-audit the next request
```

The package owns the deterministic in-process steps: representation selection, context compaction, prefix restructuring, cache-key normalization, cost estimation, and policy evaluation. The receiving application owns credentials, provider calls, durable persistence, approvals, billing reconciliation, and any actual side effects.

The loop has two evidence tracks:

- **Planning evidence** is produced before a request: estimated tokens, selected compaction path, cache metadata, route recommendation, and policy decisions.
- **Accounting evidence** is produced after a request: provider-reported usage, model and cache-hit data, latency, actual charge, and any adjustment to the local estimate.

Never substitute the first track for the second when reporting spend.

## Structural model

```text
Application / host agent
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
            ├── IncidentCascader      incident partitioning and reduction
            ├── DocumentPyramid       hierarchical document reduction
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

## Ownership map

| Concern | PromptCompressor surface | Host-owned responsibility |
| --- | --- | --- |
| Prompt and conversation reduction | `PromptCompressor`, `ContextCompactor` | Supplying request data and choosing the task's fidelity policy |
| Typed stream/document compaction | `BroccoliCompactionFacade`, `src/core/broccolidb/**` | Choosing the mode and validating domain-specific acceptance criteria |
| Cache-sensitive layout | `PromptPrefixRestructurer`, `SemanticEdgeCache`, prompt CAS helpers | Tenant isolation, cache backend, invalidation, and provider cache semantics |
| Output token control | `OutputVerbosityOptimizer` | Accepting or overriding concise-output instructions for the product experience |
| Cost and route planning | `TokenCostCalculator`, `ModelCatalog`, spend governance | Provider agreement, credential selection, invocation, and final charge |
| Budget/anomaly signals | spend leases, WAL/analytics, anomaly detector, circuit breaker | Durable ledger, alert delivery, approval policy, and incident response |
| Safety/provenance | compaction facade and source verification helpers | Domain acceptance tests, human review for high-risk changes, and authoritative data sources |
| Build and verification | tests, typecheck, docs audit | The host's production tests, provider reconciliation, and deployment gate |

## Data flow

1. The caller supplies text, messages, structured records, or a stream payload.
2. The selected boundary validates type, size, and batch limits.
3. A deterministic representation reducer removes redundancy, clusters repeated records, or preserves only the required structure.
4. Domain transformations pass through `BroccoliCompactionSafety`, which checks high-risk numbers, dates, percentages, identifiers, and measured values against the source.
5. The result returns the representation plus token/savings metadata. No model call is made.
6. Optional cache and spend components record hashes, avoided tokens, leases, estimates, anomalies, and checkpoints in process memory or the selected local substrate.
7. The host sends the transformed request, receives provider usage, and reconciles actual usage with the estimate before updating durable accounting.

## Safety and authority boundary

Use `BroccoliCompactionFacade` for production compaction. It is the supported boundary because it centralizes input limits and provenance verification. The individual `Broccoli*Compactor` classes remain available for compatibility and specialized experimentation, but callers that bypass the facade also bypass its input and safety policy.

The provenance gate is conservative. It can return the unmodified input when a transformed result contains a high-risk fact that cannot be grounded in the source. That fallback is intentional: preserving fidelity takes priority over reduction percentage.

The safety boundary is also an authority boundary. A compaction result is a proposal for a smaller representation, not proof that the provider accepted it, that the user-visible answer is equivalent, or that the quoted savings were billed savings. Keep the original input available until the host has completed its own acceptance and reconciliation steps.

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

For every production request, preserve at least these fields together:

```text
request id · tenant/workspace · source hash · output hash · estimated input/output tokens
provider model · provider usage · cache status · actual cost · policy decision · timestamp
```

The package can produce most planning fields, but the host must attach provider usage and enforce tenant, retention, and access-control rules.

## Embedding recipe

1. Read the [getting started guide](GETTING_STARTED.md) and select the narrowest supported boundary.
2. Run the prompt or message transform before the provider call; retain the source and result hashes.
3. Treat `tokensSaved`, cache metrics, and catalog prices as estimates or planning signals.
4. Make the provider call in the host and attach authoritative usage to the same request record.
5. Run postflight checks for fidelity, cache isolation, budget policy, and cost reconciliation.
6. Update the [agent knowledge base](../.wiki/index.md) and an ADR when the ownership or evidence model changes.

PromptCompressor is deliberately not an agent loop, provider gateway, durable billing ledger, or automatic workspace mutator.
