# Provenance and redistribution notes

This package is a standalone extraction of prompt compaction, compression, caching, routing, token-cost, and spend-governance concepts from the GALXAI source tree. It is a concept port and composition layer, not a copy of the GALXAI application.

## Source boundary

The port includes the reusable implementation under `src/core/broccolidb` and selected optimization, governance, pricing, routing, contract, and evaluation modules documented in [PORTING_INVENTORY.md](PORTING_INVENTORY.md). It intentionally excludes application integrations such as Next.js pages, Supabase/Stripe adapters, provider credentials, gateway transport, UI, deployment configuration, and host-specific workers.

`src/PromptCompressor.ts` is the package-level composition layer. It delegates to the extracted implementations and does not claim ownership of the excluded application systems.

## What this document means

This file records engineering lineage and review obligations. It is not a license grant, a warranty of provider pricing, or a claim that every transitive dependency has the same terms as this package.

Before redistributing source or a package archive, maintainers should:

1. confirm the license and redistribution rights for the source material used in the extraction;
2. preserve required attribution, notices, and third-party license texts;
3. review the licenses of new runtime and development dependencies;
4. verify that generated output does not add unreviewed copied material;
5. keep this document and the package metadata aligned with the confirmed result.

The `package.json` `files` list controls package contents; it does not replace full license or notice files when those are required by upstream terms.

## Verification trail

The extraction was checked by TypeScript typechecking, a Node smoke suite, and `npm pack --dry-run`. Those checks establish build and packaging consistency, not legal clearance or semantic equivalence for every domain compactor. Host applications must add their own domain acceptance fixtures, provider reconciliation, privacy review, and release approval.
