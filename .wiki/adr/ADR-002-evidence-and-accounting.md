# ADR-002: Separate estimates from provider accounting

Status: ACCEPTED
Date: 2026-09-20
Author: PromptCompressor maintainers
Implementing Surfaces:

- `src/core/pricing/TokenCostCalculator.ts`
- `src/core/router/ModelCatalog.ts`
- `src/core/governance/`
- `docs/ARCHITECTURE.md`
- `docs/OPERATIONS.md`

## 1. Context and motivation

The extracted code estimates tokens from characters, calculates catalog-based prices, tracks avoided tokens, and emits cache or route signals. Provider tokenizers, cache billing, retries, media charges, model agreements, and rounding can differ. Treating local estimates as invoices would create false savings and make reconciliation impossible.

## 2. Decision and architecture

The package exposes planning evidence and keeps it distinguishable from accounting evidence. Planning evidence includes estimated tokens, route recommendations, cache signals, and catalog-derived prices. The host attaches provider-reported usage and actual charges after invocation; those values are authoritative for durable billing.

Every host request record should preserve source/result hashes, the estimate, provider usage, model, cache status, actual cost, policy decision, and timestamp.

## 3. Technical implementation

Documentation labels package-derived counts and prices as estimates. `TokenCostCalculator` remains deterministic and offline. The operations guide defines reconciliation for cached input, reasoning, media, batch, retry, and route components. The host remains responsible for durable ledgers, tenant isolation, retention, and invoice policy.

## 4. Consequences and verification

Positive consequences:

- Savings claims can be audited against provider records.
- Model and cache optimizations remain independently measurable.
- Pricing changes do not silently rewrite historical charges.

Trade-offs:

- Hosts must build a reconciliation step and retain two evidence tracks.
- Local estimates can diverge from bills and require investigation rather than automatic correction.

Verify with focused cost tests, provider integration fixtures, and the reconciliation checks in [`docs/OPERATIONS.md`](../../docs/OPERATIONS.md).
