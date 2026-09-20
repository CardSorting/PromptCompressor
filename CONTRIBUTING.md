# Contributing to PromptCompressor

PromptCompressor is a portable concept package. Contributions should improve deterministic prompt reduction, cache-aware planning, cost accounting, and host integration contracts without pulling provider or application infrastructure into the library.

## Before changing code

Read [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md), the relevant module guide, [docs/PROVENANCE.md](docs/PROVENANCE.md), [docs/LICENSING.md](docs/LICENSING.md), and the [agent playbook](.wiki/agent/playbook.md). Inspect the source and public exports before changing a contract.

## Development loop

```sh
npm install
npm run check
npm test
npm run build
npm pack --dry-run
npm run docs:check
```

Tests should cover public behavior, safety fallbacks, and the host boundary. If a change affects a public export, compaction mode, cache key, cost semantic, spend policy, or evidence contract, update the relevant documentation and add or update an ADR.

## Design rules

- Keep transforms deterministic, bounded, and safe to call in-process.
- Keep model calls, credentials, provider SDKs, durable billing, queues, and external alert delivery in host adapters.
- Treat token counts and catalog prices as planning estimates until provider usage is attached.
- Use `BroccoliCompactionFacade` as the production compaction boundary unless a deliberate lower-level exception is documented.
- Preserve source/result provenance and make fidelity fallbacks visible.
- Keep generated `dist/` output synchronized with `npm run build`; do not edit it manually.
- Avoid introducing a second cost, cache, compaction, or policy schema when an existing contract can be extended.

## Documentation changes

Use `docs/ARCHITECTURE.md` for cross-module contracts, the task guides for detailed behavior, `.wiki/agent/` for handoff knowledge, and `.wiki/adr/` for decisions. Run `npm run docs:check` after changing links or adding a guide.

## Pull request checklist

- [ ] Scope stays inside the standalone host boundary.
- [ ] `npm run check` passes.
- [ ] `npm test` passes.
- [ ] `npm run build` has refreshed `dist/` when source changed.
- [ ] `npm pack --dry-run` includes the intended package docs.
- [ ] README, API, architecture, and operations docs reflect public behavior.
- [ ] The agent knowledge base and ADRs are updated for boundary or evidence changes.
- [ ] `LICENSE`, `NOTICE`, `docs/LICENSING.md`, and `package.json` remain consistent.
- [ ] Provenance and dependency-license review is complete for newly copied material.
- [ ] No credentials, local databases, generated secrets, or `node_modules` are committed.
