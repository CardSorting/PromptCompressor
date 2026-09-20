# PromptCompressor agent memory

These are durable constraints for future agents.

1. **Keep the package host-neutral.** Model calls, credentials, provider SDKs, durable billing, external queues, and alert delivery belong to the receiving application.
2. **Use the supported safety boundary.** Production compaction should go through `BroccoliCompactionFacade` so input limits and provenance checks are applied.
3. **Fidelity outranks reduction percentage.** A provenance fallback is an intentional safe result; do not retry into a more aggressive lossy path without an acceptance decision.
4. **Treat estimates as estimates.** Character-based tokens, catalog prices, avoided-token counters, cache signals, and route recommendations are planning evidence, not settled charges.
5. **Reconcile with provider truth.** The host must attach provider-reported usage, model, cache status, latency, retries, and actual cost to the request record.
6. **Protect cache boundaries.** Semantic and prefix keys must be tenant-aware and include every answer-changing input, model, policy, and feature flag.
7. **Keep source and result traceable.** Preserve hashes and enough metadata to reproduce a transformation and explain a cost delta.
8. **Keep generated output synchronized.** Changes under `src/` should be followed by `npm run build`; never edit `dist/` by hand.
9. **Keep one documentation authority.** Update the canonical guide, wiki handoff material, and an ADR when a boundary or evidence rule changes.
10. **Review provenance before redistribution.** This package records extraction lineage; maintainers must confirm source and dependency rights before release.
