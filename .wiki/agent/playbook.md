# PromptCompressor agent playbook

This is the shortest orientation path for agents working in the standalone PromptCompressor package.

## Current snapshot

PromptCompressor is a TypeScript ESM library that extracts prompt compaction, representation reduction, cache-aware layout, token-cost calculation, model routing, and spend-governance helpers from GALXAI. It operates in process and does not make provider calls, own credentials, or perform durable billing by itself.

The main public surfaces are:

- `src/PromptCompressor.ts` for the package-level composition pipeline;
- `src/core/optimization/` for history, output, and semantic-cache helpers;
- `src/core/governance/` for prefix, spend, anomaly, and circuit controls;
- `src/core/pricing/` and `src/core/router/` for cost and model catalog semantics;
- `src/core/broccolidb/` for the compaction facade and complete extracted substrate;
- `src/index.ts` for the package boundary.

## Orientation loop

1. Read [`docs/ARCHITECTURE.md`](../../docs/ARCHITECTURE.md).
2. Read the relevant guide: [`GETTING_STARTED.md`](../../docs/GETTING_STARTED.md), [`API.md`](../../docs/API.md), or [`OPERATIONS.md`](../../docs/OPERATIONS.md).
3. Inspect the specific source and test before changing a contract.
4. Run the validation commands below.
5. Update the relevant guide, knowledge-base page, and ADR when ownership or evidence semantics change.

## Validation commands

```sh
npm run check
npm test
npm run build
npm pack --dry-run
npm run docs:check
```

## Safe integration loop

```text
capture source → transform through supported boundary → retain hashes/estimates
               → host provider call → attach actual usage → reconcile and verify
```

The package can advise or calculate; the host decides, invokes, persists, bills, and alerts.

## Handoff links

- [Agent memory](agent-memory.md)
- [Key findings](key-findings.md)
- [Patterns](patterns.md)
- [Common pitfalls](common-pitfalls.md)
- [Troubleshooting](troubleshooting.md)
- [Architecture](../../docs/ARCHITECTURE.md)
- [Operations](../../docs/OPERATIONS.md)
- [Provenance](../../docs/PROVENANCE.md)
- [ADR-001](../adr/ADR-001-standalone-boundary.md)
- [ADR-002](../adr/ADR-002-evidence-and-accounting.md)
- [ADR-003](../adr/ADR-003-knowledge-base-and-doc-suite.md)
