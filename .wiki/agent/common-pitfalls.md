# PromptCompressor common pitfalls

- Do not report `tokensSaved`, catalog prices, or local cache hits as settled provider savings.
- Do not bypass `BroccoliCompactionFacade` in production and then assume its input bounds or provenance checks still apply.
- Do not discard the original source before fidelity, tenant, and acceptance checks are complete.
- Do not move system instructions or recent turns out of a conversation without an explicit product policy.
- Do not build semantic-cache keys without tenant, model, policy, feature, and answer-changing inputs.
- Do not use the package's offline rate cards as an invoice without validating provider terms and actual usage.
- Do not put provider credentials, framework routes, database clients, or alert transports into the portable package.
- Do not edit `dist/` manually; regenerate it from `src/`.
- Do not assume process-local WAL, CAS, cache, lease, or analytics state is durable or cross-process.
- Do not let documentation drift from `src/index.ts`, the facade modes, or the smoke tests.
- Do not treat source extraction provenance as a license grant; review upstream and dependency terms before redistribution.
