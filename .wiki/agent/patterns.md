# PromptCompressor patterns

## Preflight and postflight

1. Host captures the original request, tenant, task type, budget, and source hash.
2. Run the narrowest supported transformer and retain its result metadata.
3. Host applies route, cache, approval, and provider-call policy.
4. Provider returns authoritative usage and status.
5. Host reconciles estimates with actual usage, records deltas, and runs acceptance checks.

## Conversation compaction

Use `ContextCompactor` for older history while preserving the system message and newest turns. Keep the original history available until the host has validated the resulting conversation and completed any audit requirement.

## Cache-aware request preparation

Run prefix restructuring before a provider call when the host uses stable-prefix caching. Normalize semantic query keys only after including tenant, model, policy, and answer-changing inputs. Treat local hit counters as evidence about the local cache, not proof of provider cache behavior.

## Cost and governance reconciliation

Use `TokenCostCalculator`, `ModelCatalog`, spend leases, anomaly detection, and circuit controls to plan or guard a request. After the call, join provider usage and actual charge to the same request ID. Investigate deltas; do not overwrite the planning record.

## Documentation update

When a public contract changes, update the relevant task guide, `docs/ARCHITECTURE.md`, the agent playbook or troubleshooting page, and an ADR if ownership or evidence semantics changed. Run code tests, packaging checks, and `npm run docs:check`.

## Release and provenance check

Before a source or package release, inspect `docs/PROVENANCE.md`, review new dependencies and copied material, run `npm pack --dry-run`, and confirm the archive contains the intended README, contributing guide, and docs.
