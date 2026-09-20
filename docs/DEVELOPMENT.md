# Development and release guide

## Local workflow

```bash
npm install
npm run typecheck
npm run build
npm test
npm pack --dry-run
```

`npm test` rebuilds the package and runs the Node test suite in `test/`. The build script first runs `scripts/normalize-relative-specifiers.mjs`; this makes the copied extensionless source imports valid Node ESM imports. The normalizer is idempotent.

## Adding or changing a compactor

1. Keep the implementation under `src/core/broccolidb` when it is part of the BroccoliDB substrate.
2. Preserve the existing relative `.js` import convention.
3. Route externally supported behavior through `BroccoliCompactionFacade`.
4. Preserve input bounds and fail-closed provenance behavior.
5. Add or update a focused smoke/regression test.
6. Update [API.md](API.md) or [ARCHITECTURE.md](ARCHITECTURE.md) when the public surface changes.

## Testing guidance

Use deterministic fixtures. Assert both the transformed representation and its safety metadata. For cost code, test cached and uncached input separately, include zero-token and batch cases, and compare rounded values at the documented precision. For caches and spend tables, clear the relevant singleton table between tests.

Avoid treating the character-based token estimate as a billing truth. Provider-reported usage remains authoritative for production accounting.

## Release checklist

- `npm run typecheck` passes.
- `npm test` passes.
- `npm pack --dry-run` includes `dist`, `README.md`, and `docs`.
- `package.json` and `package-lock.json` versions match.
- README/API docs reflect new public methods or modes.
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
