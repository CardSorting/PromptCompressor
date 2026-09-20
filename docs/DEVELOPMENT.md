# Development and release guide

This guide follows the package's [documentation strategy](README.md): source changes, public contracts, agent handoff knowledge, and verification evidence should move together.

## Local workflow

```bash
npm install
npm run typecheck
npm run build
npm test
npm pack --dry-run
npm run docs:check
```

`npm test` rebuilds the package and runs the Node test suite in `test/`. The build script first runs `scripts/normalize-relative-specifiers.mjs`; this makes the copied extensionless source imports valid Node ESM imports. The normalizer is idempotent.

## Adding or changing a compactor

1. Keep the implementation under `src/core/broccolidb` when it is part of the BroccoliDB substrate.
2. Preserve the existing relative `.js` import convention.
3. Route externally supported behavior through `BroccoliCompactionFacade`.
4. Preserve input bounds and fail-closed provenance behavior.
5. Add or update a focused smoke/regression test.
6. Update [API.md](API.md) or [ARCHITECTURE.md](ARCHITECTURE.md) when the public surface changes.
7. Update the relevant [knowledge-base page](../.wiki/index.md), and add an ADR when ownership, authority, persistence, or evidence semantics change.

## Testing guidance

Use deterministic fixtures. Assert both the transformed representation and its safety metadata. For cost code, test cached and uncached input separately, include zero-token and batch cases, and compare rounded values at the documented precision. For caches and spend tables, clear the relevant singleton table between tests.

Avoid treating the character-based token estimate as a billing truth. Provider-reported usage remains authoritative for production accounting.

## Release checklist

- `npm run typecheck` passes.
- `npm test` passes.
- `npm pack --dry-run` includes `dist`, `README.md`, `LICENSE`, `NOTICE`, `CONTRIBUTING.md`, `SECURITY.md`, `CHANGELOG.md`, and `docs`.
- `npm run docs:check` passes and the package documentation map points to every maintained guide.
- `package.json` and `package-lock.json` versions match.
- README/API docs reflect new public methods or modes.
- `LICENSE`, `NOTICE`, `docs/LICENSING.md`, and `package.json` agree on the declared license and scope.
- Provenance and licensing review is complete for any newly copied source or dependency.
- No credentials, local database files, `node_modules`, or generated secrets are committed.

## GitHub repository workflow

The canonical repository is:

```text
https://github.com/CardSorting/PromptCompressor.git
```

For a normal change:

```bash
git status
git add .
git commit -m "Describe the change"
git push origin main
```

If the default branch differs, inspect it with `git remote show origin` before pushing. Never commit provider keys or local `.env` files.
