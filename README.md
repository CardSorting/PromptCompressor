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

- [Getting started](docs/GETTING_STARTED.md)
- [API reference](docs/API.md)
- [Architecture](docs/ARCHITECTURE.md)
- [Porting inventory](docs/PORTING_INVENTORY.md)
- [Development and release guide](docs/DEVELOPMENT.md)

## Development

```bash
npm install
npm test
```

The package has no runtime dependencies. TypeScript and Node type definitions are development-only dependencies.
