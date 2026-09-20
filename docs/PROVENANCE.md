# Provenance and redistribution notes

This package is a standalone extraction of prompt compaction, compression, caching, routing, token-cost, and spend-governance concepts from the GALXAI source tree. It is a concept port and composition layer, not a copy of the GALXAI application.

## Source boundary

The port includes the reusable implementation under `src/core/broccolidb` and selected optimization, governance, pricing, routing, contract, and evaluation modules documented in [PORTING_INVENTORY.md](PORTING_INVENTORY.md). It intentionally excludes application integrations such as Next.js pages, Supabase/Stripe adapters, provider credentials, gateway transport, UI, deployment configuration, and host-specific workers.

`src/PromptCompressor.ts` is the package-level composition layer. It delegates to the extracted implementations and does not claim ownership of the excluded application systems.

## License boundary

The standalone distribution is licensed under the [Apache License, Version 2.0](../LICENSE), with the SPDX identifier `Apache-2.0` declared in `package.json`. The license applies to original PromptCompressor packaging, documentation, composition code, generated output, and contributions controlled by the maintainers unless a file or dependency states otherwise.

This file records engineering lineage and review obligations. It is not a warranty of provider pricing or a claim that every transitive dependency or extracted upstream file has the same terms as this package.

Before redistributing source or a package archive, maintainers should:

1. confirm the license and redistribution rights for the source material used in the extraction;
2. preserve required attribution, notices, and third-party license texts;
3. review the licenses of new runtime and development dependencies;
4. verify that generated output does not add unreviewed copied material;
5. keep this document, [`NOTICE`](../NOTICE), `LICENSE`, and the package metadata aligned with the confirmed result.

The `package.json` `files` list controls package contents; it does not replace full license or notice files when those are required by upstream terms. See [LICENSING.md](LICENSING.md) for the human-readable scope and contribution rules.

## Verification trail

The extraction was checked by TypeScript typechecking, a Node smoke suite, and `npm pack --dry-run`. Those checks establish build and packaging consistency, not legal clearance or semantic equivalence for every domain compactor. Host applications must add their own domain acceptance fixtures, provider reconciliation, privacy review, and release approval.
