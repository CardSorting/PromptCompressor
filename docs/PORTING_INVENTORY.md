# Porting inventory

This package is a standalone extraction of the token-saving and query-spend logic from GALXAI. The source was copied into a package-local `src/core` tree and its relative imports were normalized to Node ESM `.js` specifiers.

The port follows a boundary-first rule: preserve reusable reduction, cache, pricing, routing, governance, and accounting concepts; leave application authority at the receiving host. The [architecture guide](ARCHITECTURE.md) explains that strategy, while [provenance notes](PROVENANCE.md) record what still needs review before redistribution.

## Included source

| Package path | Contents |
| --- | --- |
| `src/core/broccolidb/**` | Complete 403-file BroccoliDB directory: compaction facade, 150-domain compactors, stream reducers, compression/dedup buffers, spend substrate, table/WAL/CAS/kernel infrastructure, and evaluation helpers. |
| `src/core/optimization/ContextCompactor.ts` | Multi-turn history compaction. |
| `src/core/optimization/OutputVerbosityOptimizer.ts` | Concise-output directive injection. |
| `src/core/optimization/SemanticEdgeCache.ts` | Query-result caching and avoided-token accounting. |
| `src/core/governance/PromptPrefixRestructurer.ts` | Cache-sensitive prompt prefix reordering. |
| `src/core/governance/SpendAnomalyDetector.ts` | Spend velocity and anomaly detection. |
| `src/core/governance/GalxSpendGovernanceEngine.ts` | Deterministic route and budget policy evaluation. |
| `src/core/governance/AgentCircuitBreaker.ts` | Runaway agent-turn and repeated-error spend protection. |
| `src/core/governance/GovernanceAlertDispatcher.ts` | Spend-alert payload formatting. |
| `src/core/pricing/TokenCostCalculator.ts` | Token, cache, batch, image, audio, retail, and savings calculations. |
| `src/core/router/ModelCatalog.ts` | Model catalog and cost-aware model resolution. |
| `src/core/contracts/**` | The model/request contracts needed by the extracted governance and catalog code. |
| `src/core/evals/TierCascadingEvalHarness.ts` | Quality-gated lower-cost route evaluation. |

The package adds `src/PromptCompressor.ts` as a small composition layer; it does not replace any existing BroccoliDB implementation.

## Intentionally excluded

The following GALXAI application integrations were not copied because they are not prompt-compression algorithms and would make the package depend on the gateway application:

- Next.js pages and API routes
- Supabase, Stripe, queue, and worker integrations
- Credential pools, provider authentication, privacy gateways, and upstream adapters
- UI components, SDK client transport, and deployment configuration

Those integrations can call this package through the exported facade or their own adapter.

## Verification

The extracted package has been verified with:

```bash
npm run typecheck
npm test
```

The smoke suite covers the package-level pipeline, conversation compaction, concise-output optimization, prefix restructuring, cost accounting, the compaction facade, and semantic caching. `npm pack --dry-run` confirms that compiled output, declarations, README, and docs are included in the package payload.

Documentation and agent handoff material are verified separately with `npm run docs:check`. The check is intentionally structural: it confirms that the canonical guides, knowledge-base index, ADR index, and decision records exist and remain linked. It does not replace code tests, provider reconciliation, or a licensing review.
