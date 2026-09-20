# Operations and spend-control guide

PromptCompressor is most useful as a bounded preflight/postflight stage around a host-owned provider call. This guide describes the operating pattern without assuming a particular model SDK, database, queue, or billing vendor.

## Request lifecycle

```text
host capture → package transform → host route/cache decision → provider call
             → provider usage → reconciliation → durable request record
```

### Preflight

Capture the source prompt or message history before transforming it. Add the task type, tenant/workspace, sensitivity class, requested budget, and any acceptance constraints in the host record. Use the smallest package boundary that fits:

- `PromptCompressor.compress` for a text prompt and a single composition pipeline;
- `ContextCompactor` for multi-turn history where system and recent turns need protection;
- `BroccoliCompactionFacade` for typed batches, streams, incidents, and documents;
- `OutputVerbosityOptimizer` when the product can accept a concise-output instruction;
- prefix and semantic-cache helpers when request reuse is a deliberate part of the design.

Record the source hash before changing the representation.

### Transform and route

Use the supported facade for production compaction so its input bounds and provenance checks apply. Keep the original source next to the transformed output until the host has completed its own acceptance checks.

Treat these values as planning signals:

- `originalTokens`, `outputTokens`, `tokensSaved`, and `savingsPercentage`;
- catalog-derived model prices and route recommendations;
- avoided-token or cache-hit counters;
- spend-governance decisions and anomaly signals.

The host may use them for a budget guard or model-tier choice, but should not present them as settled charges.

### Provider call and reconciliation

The host owns the actual model invocation. After the provider responds, attach the provider's model, input/output/reasoning/cache usage, request status, latency, and charge to the same request record. Compare actual usage to the local estimate and retain the delta for diagnostics.

At minimum, reconcile:

| Field | Before the call | After the call |
| --- | --- | --- |
| Source/output hashes | Package and host | Confirm transformed request and response association |
| Token counts | Character-based or package estimate | Provider-reported usage |
| Model and route | Catalog/policy recommendation | Provider-accepted model and fallback path |
| Cache result | Expected prefix/semantic reuse | Provider or host cache hit/miss |
| Cost | Estimated net and avoided cost | Provider charge and durable ledger amount |
| Safety | Fallback/provenance metadata | Product acceptance and incident outcome |

## Safety controls

- Prefer `BroccoliCompactionFacade` over individual compactors for untrusted or production data.
- Treat a provenance fallback as a signal to preserve the original, not as a failed request to retry more aggressively.
- Protect system instructions and recent conversation turns when using `ContextCompactor`.
- Keep semantic-cache keys tenant-aware and include all fields that can change the answer.
- Do not use a catalog price as an invoice without validating the current provider agreement.
- Apply circuit breakers and spend leases at the host's request boundary when a workflow can loop or retry.
- Keep provider credentials, alert delivery, and durable accounting outside this package.

## Observability contract

Create one trace or request record per host invocation. Include:

```text
request id, tenant, source hash, output hash, transform path, mode/domain,
estimated tokens, provider usage, model, cache status, estimated cost,
actual cost, policy decision, fidelity status, latency, error, timestamp
```

Redact or hash prompt content according to the host's privacy policy. The package's in-process caches and WAL/CAS helpers are not automatically a durable retention or access-control solution.

## Runbook

### Estimated savings do not match the provider bill

1. Confirm that the host recorded the transformed request actually sent.
2. Compare the provider's tokenizer and usage fields with the package's `ceil(characters / 4)` estimate.
3. Check cached-input, batch, reasoning, audio, image, and completion components separately.
4. Check whether the model route changed or a retry was charged.
5. Keep the provider record authoritative and update the estimate model only as a planning improvement.

### A compaction result is rejected or loses a fact

1. Re-run the source and result through the facade's provenance path.
2. Inspect high-risk numbers, dates, percentages, identifiers, and measured values.
3. Preserve the original source and disable the affected reduction path for that workload until an acceptance fixture exists.
4. Add a regression test and update the relevant ADR if the safety contract changes.

### Cache hit rate falls after a prompt change

1. Compare stable and volatile prefix segments before and after restructuring.
2. Check that timestamps, UUIDs, trace IDs, and request-specific headers are not in the cache-sensitive prefix.
3. Verify normalization and tenant/model/feature flags in the semantic key.
4. Confirm the provider's cache policy independently; local prefix reuse is only a precondition.

### Spend guard or circuit breaker trips

Inspect the request velocity, retry count, repeated-error signal, lease reservation, model route, and policy decision. The package reports or blocks according to its configured boundary; the host decides whether to approve an exception, alert an operator, or stop the workflow.
