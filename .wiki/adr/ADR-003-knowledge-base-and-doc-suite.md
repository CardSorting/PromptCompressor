# ADR-003: Canonical documentation and agent knowledge base

Status: ACCEPTED
Date: 2026-09-20
Author: PromptCompressor maintainers
Implementing Surfaces:

- `docs/README.md`
- `docs/ARCHITECTURE.md`
- `docs/GETTING_STARTED.md`
- `docs/API.md`
- `docs/OPERATIONS.md`
- `docs/PROVENANCE.md`
- `.wiki/agent/`
- `.wiki/adr/`
- `scripts/audit-docs.mjs`

## 1. Context and motivation

The package contains many extracted modules and has two audiences: application integrators need focused API and operations guidance, while agents and maintainers need durable handoff knowledge about boundaries, evidence, pitfalls, and validation. A single README cannot carry both without becoming stale or losing the reason behind important constraints.

## 2. Decision and architecture

Use a layered documentation suite:

1. `docs/README.md` is the authority map and validation gate.
2. `docs/ARCHITECTURE.md` is the compact cross-module strategy and ownership guide.
3. Task guides explain integration, API behavior, operations, porting, provenance, and development.
4. `.wiki/agent/` contains short-lived operational orientation and durable agent memory.
5. `.wiki/adr/` records decisions that change ownership, authority, persistence, provenance, or evidence semantics.
6. `scripts/audit-docs.mjs` verifies required files, links, and ADR structure.

## 3. Technical implementation

The docs audit is intentionally structural and dependency-free. It checks the canonical files, wiki index links, ADR index entries, required ADR markers, package scripts, and local Markdown targets. Code tests, provider reconciliation, and licensing review remain separate proof obligations.

## 4. Consequences and verification

Positive consequences:

- New agents have a short, repeatable orientation path.
- Integrators can find operational guidance without reading source history.
- Boundary decisions remain reviewable instead of living only in prose or memory.

Trade-offs:

- Public changes require updates across more than one document.
- The audit proves document structure, not semantic completeness.

Verify with `npm run docs:check`, the package tests, `npm pack --dry-run`, and manual review of links and public exports.
