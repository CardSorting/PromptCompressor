# PromptCompressor troubleshooting

## Package validation

Run the complete local gate:

```sh
npm run check
npm test
npm run build
npm pack --dry-run
npm run docs:check
```

If declarations or `dist/` are stale, run `npm run build` and rerun the checks. If the docs audit fails, read its first missing-file or broken-link message before changing content.

## A request shows zero or negative savings

Inspect the selected path, prefix restructuring result, token heuristic, and whether the input was already compact. Zero savings can be correct. Negative savings should be clamped or treated as a regression according to the relevant API contract.

## A result falls back to the source

Inspect `fidelityStatus`, high-risk facts, source/result hashes, and the compaction mode. Preserve the fallback, add a focused fixture, and only change the safety rule through a documented decision.

## Estimated cost differs from provider cost

Compare tokenizer semantics, cached-input fields, reasoning/output components, batch or media charges, model route, retries, and rounding. Keep provider-reported usage authoritative and record the delta for planning improvements.

## Cache hit rate falls

Compare stable and volatile prefixes, normalized keys, tenant/model/policy fields, TTL, and provider cache semantics. A local `SemanticEdgeCache` hit does not guarantee a provider-side cache hit.

## Spend guard or circuit breaker trips

Inspect request velocity, retry count, repeated errors, leases, selected model, policy decision, and budget state. The host decides whether to stop, approve an exception, or alert an operator; the package does not own incident response.

## Import or package errors

Confirm Node.js 20+, run `npm run build`, and inspect the exported subpath in `package.json`. If a source import is extensionless, run the normalizer through the package scripts rather than patching generated output by hand.
