# PromptCompressor

Standalone extraction of GALXAI's prompt compaction and inference-economics code.
It runs in-process on Node.js and does not depend on Next.js, Supabase, a provider SDK, or the GALXAI gateway.

## Included capabilities

- Hardened BroccoliDB compaction facade: domain, batch, stream, incident, and document modes.
- All existing domain compactors and algorithmic deduplication/compression buffers from `src/core/broccolidb`.
- Prompt CAS/Brotli storage, semantic response caching, KV/prefix cache helpers, and tool/output deduplication.
- Multi-turn context compaction, context slicing/pruning, code and structured-output reduction, and token clamping.
- Prefix restructuring for cache reuse and concise-output directives.
- Model-tier cascading, speculative early exits, token-cost calculation, prompt-cache economics, and spend governance.
- Spend leases, WAL/analytics/timeline bookkeeping, live spend guards, anomaly detection, and lifecycle orchestration.
- The original BroccoliDB table, WAL, CAS, aggregation, natural-query, kernel, and mutex substrate.

The port carries the complete 403-file `src/core/broccolidb` directory, including its evaluation helpers, plus the small set of standalone governance, pricing, routing, contract, and optimizer dependencies required to run it outside the app.

## Quick start

```ts
import {
  PromptCompressor,
  ContextCompactor,
  TokenCostCalculator,
  BroccoliCompactionFacade,
} from 'prompt-compressor';

const prompt = PromptCompressor.compress(longPrompt, {
  domainHint: 'Interrogatory',
});

console.log(prompt.output, prompt.tokensSaved);

const history = ContextCompactor.compact(messages, {
  maxUncompactedTokens: 2_000,
  preserveRecentTurns: 3,
});

const spend = TokenCostCalculator.calculateCost('gpt-5.6-luna', {
  promptTokens: prompt.outputTokens,
  completionTokens: 500,
});

const stream = BroccoliCompactionFacade.compact({
  mode: 'log_stream',
  logs: rawLogs,
});
```

`PromptCompressor.compress()` is a convenience pipeline. For full control, use the exported classes directly or import the complete implementation surface from `prompt-compressor/broccolidb`.

## Documentation

- Start with the [documentation map](docs/README.md).
- Read the [architecture and strategy guide](docs/ARCHITECTURE.md) for ownership and proof obligations.
- Use the [getting started guide](docs/GETTING_STARTED.md) for the first integration.
- Consult the [API reference](docs/API.md) and [operations guide](docs/OPERATIONS.md) for runtime behavior.
- Use the [porting inventory](docs/PORTING_INVENTORY.md) and [provenance notes](docs/PROVENANCE.md) when tracing the extraction.
- The [agent knowledge base](.wiki/index.md) contains handoff rules, patterns, pitfalls, and ADRs.
- The [development and release guide](docs/DEVELOPMENT.md) covers validation and package maintenance.
- [License and provenance](docs/LICENSING.md) explains the Apache-2.0 scope and extracted-source boundary.
- [Security policy](SECURITY.md) covers sensitive prompts, cache isolation, and responsible reporting.
- [Changelog](CHANGELOG.md) records package-level releases and documentation milestones.

## Development

```bash
npm install
npm test
```

For the full local gate, run:

```bash
npm run check
npm test
npm run build
npm pack --dry-run
npm run docs:check
```

The package has no runtime dependencies. TypeScript and Node type definitions are development-only dependencies. It transforms and accounts for data locally; the host application still owns model calls, credentials, durable billing records, and provider reconciliation.

## License

The standalone package is distributed under the [Apache License, Version 2.0](LICENSE). See [NOTICE](NOTICE) and the [licensing guide](docs/LICENSING.md) for provenance and third-party material boundaries.
