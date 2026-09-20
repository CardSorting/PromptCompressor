# PromptCompressor licensing and provenance

## License

PromptCompressor is distributed under the [Apache License, Version 2.0](../LICENSE). The SPDX identifier is `Apache-2.0`, and the package declares the same identifier in `package.json`.

The license applies to original PromptCompressor packaging, documentation, the package-level composition layer, generated output, examples, and contributions controlled by the maintainers unless a file or dependency states otherwise. [`NOTICE`](../NOTICE) carries the project attribution and extraction boundary.

## Provenance

PromptCompressor is a standalone extraction and composition of reusable prompt compaction, compression, cache, token-cost, routing, and spend-governance concepts from the GALXAI source tree. The port deliberately excludes application-specific gateway routes, provider credentials, framework integrations, UI, deployment configuration, and host persistence.

The complete source map is in [PORTING_INVENTORY.md](PORTING_INVENTORY.md), and the engineering lineage is described in [PROVENANCE.md](PROVENANCE.md). Those documents are informational; the complete legal terms are in [`LICENSE`](../LICENSE), and attribution obligations are in [`NOTICE`](../NOTICE).

## Contributions

Unless a contributor and the project maintainers agree otherwise in writing, a contribution intentionally submitted for inclusion in this repository is offered under the Apache License, Version 2.0. Contributors retain rights to their own work subject to the license's contribution and redistribution terms.

Contributors should:

- preserve existing copyright, license, and attribution notices;
- identify substantial changes when modifying an existing file;
- avoid copying upstream or third-party code without confirming its license and provenance;
- add a notice or license file when introducing material under a different license;
- document new host-boundary, ownership, or provenance decisions in `.wiki/adr/`.

## Third-party material

Apache-2.0 for this package does not relicense third-party dependencies, generated assets, or extracted material that carries separate terms. Before adding such material, record its source, license, and required notice in the repository. Dependency metadata and lockfiles are not a substitute for a human-readable attribution notice when one is required by the upstream license.

## Name and trademarks

Apache-2.0 grants copyright and patent rights under its terms; it does not grant permission to use project names, logos, or trademarks beyond reasonable description of origin. Refer to the license and project maintainers for branding questions.

This document explains the repository's intended licensing boundary; it is not individualized legal advice.
