# PromptCompressor key findings

## 1. Token savings are a composition, not one algorithm

The package combines representation reduction, history compaction, output directives, prefix restructuring, semantic caching, and tier routing. A reduction percentage from one stage must not be reported as total request savings without accounting for the other stages.

## 2. Fidelity is a first-class output

The compaction facade applies bounds and provenance checks. When a high-risk fact cannot be grounded, returning the original source is safer than maximizing compression. Tests should assert safety metadata and the representation together.

## 3. Cost control has separate levers

Prompt reduction, cache reuse, avoided requests, lower-cost model routing, and spend governance affect different parts of the lifecycle. Keep their evidence separate so an optimization is explainable and reversible.

## 4. Provider usage is the accounting authority

The package's `Math.ceil(characters / 4)` heuristic and catalog prices are useful for planning. Provider-reported usage and the host's durable ledger determine actual spend.

## 5. The standalone boundary is intentional

Application gateway code, provider authentication, framework routes, external persistence, and operational delivery were excluded so the package can be embedded into different hosts. Add adapters at the host boundary instead of reintroducing those dependencies here.

## 6. Documentation is part of the contract

The docs explain ownership and proof obligations; the wiki gives agents the short handoff path; ADRs preserve why the package separates transforms from provider authority. Keeping all three linked prevents implementation and integration guidance from drifting apart.
