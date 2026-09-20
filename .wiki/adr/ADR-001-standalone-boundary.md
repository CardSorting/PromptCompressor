# ADR-001: Standalone compression and spend boundary

Status: ACCEPTED
Date: 2026-09-20
Author: PromptCompressor maintainers
Implementing Surfaces:

- `src/PromptCompressor.ts`
- `src/core/optimization/`
- `src/core/governance/`
- `src/core/pricing/`
- `src/core/router/`
- `src/core/broccolidb/`
- `docs/ARCHITECTURE.md`

## 1. Context and motivation

The GALXAI source tree contains reusable prompt reduction and query-spend logic alongside framework routes, provider adapters, credentials, queues, UI, and application persistence. Copying the whole application would make a portable package depend on a particular host and would blur who is allowed to make a model call or record a bill.

## 2. Decision and architecture

PromptCompressor keeps deterministic transformation, caching helpers, cost calculations, routing signals, governance checks, and extracted compaction substrate in one standalone package. The host owns provider calls, credentials, durable persistence, approvals, billing reconciliation, and external side effects.

The supported integration path is:

```text
host capture → package transform → host route/call → provider usage → reconciliation
```

The package may advise or guard a request, but it does not become the authority for the external system.

## 3. Technical implementation

`PromptCompressor` composes existing optimizers. `BroccoliCompactionFacade` is the bounded production boundary for typed compaction. The package root exports common helpers while `prompt-compressor/broccolidb` and `prompt-compressor/eval` expose the extracted implementation surfaces. Application integrations listed in [PORTING_INVENTORY.md](../../docs/PORTING_INVENTORY.md) remain outside the package.

## 4. Consequences and verification

Positive consequences:

- Different hosts can embed the package without adopting GALXAI's runtime.
- Transformation and governance behavior is deterministic and testable in process.
- Provider authority and durable accounting remain explicit.

Trade-offs:

- Hosts must supply provider, persistence, credentials, and alert adapters.
- Host acceptance and billing checks are required after the package returns a result.

Verify with:

```sh
npm run check
npm test
npm run build
npm pack --dry-run
```
