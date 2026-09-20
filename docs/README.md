# PromptCompressor documentation

This directory is the canonical documentation entry point for the standalone PromptCompressor package. It follows the JoyZoning documentation strategy: one architecture guide, task-oriented module guides, an agent-facing knowledge base, explicit decision records, and a repeatable documentation audit.

## Documentation authority

- [`ARCHITECTURE.md`](ARCHITECTURE.md) defines the strategy loop, ownership map, safety boundary, and evidence model.
- [`GETTING_STARTED.md`](GETTING_STARTED.md) is the shortest path to a working integration.
- [`API.md`](API.md) describes public exports, modes, errors, and evidence semantics.
- [`OPERATIONS.md`](OPERATIONS.md) describes preflight/postflight use, spend controls, and production runbooks.
- [`PORTING_INVENTORY.md`](PORTING_INVENTORY.md) maps the extracted source and intentional exclusions.
- [`PROVENANCE.md`](PROVENANCE.md) records source lineage and the redistribution review boundary.
- [`DEVELOPMENT.md`](DEVELOPMENT.md) defines the code, documentation, test, and release workflow.
- [`../README.md`](../README.md) gives the package overview and quick-start example.
- [`../.wiki/index.md`](../.wiki/index.md) is the agent-facing knowledge base and handoff index.
- [`../CONTRIBUTING.md`](../CONTRIBUTING.md) defines contribution and documentation rules.

Generated JavaScript and declarations in `dist/` are build artifacts. The maintainable sources of truth are the TypeScript under `src/`, the tests under `test/`, and the documents linked above.

## Validation gate

Run the complete local gate before a release or a public contract change:

```sh
npm run check
npm test
npm run build
npm pack --dry-run
npm run docs:check
```

`docs:check` verifies required guides, knowledge-base links, ADR structure, and local Markdown targets. It does not prove compaction fidelity, provider billing, or licensing rights; those require the code tests, host integration checks, and provenance review described in the other guides.

## Documentation maintenance

When changing a public API, compaction mode, safety rule, cache behavior, or cost semantic:

1. Update the relevant module guide and `ARCHITECTURE.md`.
2. Update the agent playbook, memory, patterns, pitfalls, or troubleshooting page when the handoff behavior changes.
3. Add or update an ADR when ownership, authority, persistence, provenance, or evidence semantics change.
4. Run the code and documentation gates, then inspect `npm pack --dry-run`.

Keep the docs focused on contracts, ownership, evidence, and safe integration. Do not turn them into a copy of the extracted application runtime.
