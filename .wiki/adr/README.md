# PromptCompressor architecture decision records

This index records decisions that protect the standalone package boundary. Module behavior is documented in the root guides and [`docs/ARCHITECTURE.md`](../../docs/ARCHITECTURE.md).

| ADR | Decision | Status |
| --- | --- | --- |
| [ADR-001](ADR-001-standalone-boundary.md) | Keep reusable compression and spend-planning contracts portable while leaving provider authority to the host | Accepted |
| [ADR-002](ADR-002-evidence-and-accounting.md) | Separate planning estimates from provider-reported accounting truth | Accepted |
| [ADR-003](ADR-003-knowledge-base-and-doc-suite.md) | Use a canonical docs map plus agent wiki, ADRs, and an audit script as the maintenance handoff | Accepted |
| [ADR-004](ADR-004-licensing-and-provenance.md) | Declare Apache-2.0 for standalone materials while preserving upstream and dependency boundaries | Accepted |
