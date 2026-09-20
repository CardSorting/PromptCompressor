# ADR-004: Explicit licensing and provenance boundary

Status: ACCEPTED
Date: 2026-09-20
Author: PromptCompressor maintainers
Implementing Surfaces:

- `LICENSE`
- `NOTICE`
- `package.json`
- `docs/LICENSING.md`
- `docs/PROVENANCE.md`
- `SECURITY.md`

## 1. Context and motivation

The standalone package needs a complete license and attribution trail for source checkouts and package archives. The GALXAI source tree used for the extraction did not include an upstream `LICENSE` or `NOTICE` file, while the extracted tree also contains concepts that may have separate provenance from the new package wrapper.

## 2. Decision and architecture

PromptCompressor declares Apache License, Version 2.0 for standalone materials controlled by the maintainers: the package composition layer, documentation, generated output, packaging files, and accepted contributions unless a file or dependency states otherwise.

The distribution carries:

1. the complete `LICENSE` text;
2. a `NOTICE` file naming the project, maintainers, repository, and extraction boundary;
3. `package.json` metadata with the SPDX identifier `Apache-2.0`;
4. human-readable scope and provenance guidance in `docs/LICENSING.md` and `docs/PROVENANCE.md`;
5. a release audit that verifies the license, notice, docs, package metadata, and archive contents.

The declaration does not silently relicense third-party dependencies or separately licensed upstream material. Required notices and terms remain applicable.

## 3. Technical implementation

`LICENSE`, `NOTICE`, `docs/LICENSING.md`, `SECURITY.md`, and `CHANGELOG.md` travel in the package file allowlist. `scripts/audit-docs.mjs` checks the files, required license text, notice provenance, SPDX metadata, package inclusion, links, and ADR index. Contributors must review rights before adding copied or third-party material.

## 4. Consequences and verification

Positive consequences:

- Source checkouts and npm archives carry complete licensing and attribution context.
- Maintainers and consumers can distinguish standalone work from extracted or third-party material.
- Security and release workflows have an explicit place to record ownership and disclosure boundaries.

Trade-offs:

- License, notice, metadata, and provenance docs must stay synchronized.
- Legal clearance for extracted source and new dependencies still requires maintainer review; an SPDX field is not a substitute for that review.

Verify with:

```sh
npm run docs:check
npm pack --dry-run
```
