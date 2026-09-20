# Getting started

PromptCompressor is an in-process Node.js package. It transforms prompt and telemetry representations before an application sends them to a model; it does not make model-provider calls itself.

For orientation, read the [documentation map](README.md), then the [architecture strategy](ARCHITECTURE.md). Agents maintaining the package should also read the [agent playbook](../.wiki/agent/playbook.md).

## Requirements

- Node.js 20 or newer
- npm

The package has no runtime dependencies. TypeScript and `@types/node` are development dependencies used for building from source.

## Install

From the published package or a local checkout:

```bash
npm install prompt-compressor
# or, while developing from GitHub:
npm install github:CardSorting/PromptCompressor
```

For a checkout, install and verify the package with:

```bash
npm install
npm test
```

## First prompt transformation

```ts
import { PromptCompressor } from 'prompt-compressor';

const result = PromptCompressor.compress(rawPrompt, {
  // Optional. If omitted, the domain detector selects a domain or Generic.
  domainHint: 'Interrogatory',
});

console.log({
  compactedPrompt: result.output,
  originalTokens: result.originalTokens,
  outputTokens: result.outputTokens,
  tokensSaved: result.tokensSaved,
  savingsPercentage: result.savingsPercentage,
  path: result.path,
});
```

The convenience pipeline first moves volatile headers toward the end of a prompt to improve cache-prefix stability. It then runs the requested domain compactor or the adaptive representation selector. Set `restructurePrefix: false` when you want only the representation transformation.

Token counts use the existing source heuristic of approximately four characters per token. They are planning estimates; use provider-reported usage for billing reconciliation.

## Compact a conversation history

```ts
import { ContextCompactor } from 'prompt-compressor';

const result = ContextCompactor.compact(messages, {
  maxUncompactedTokens: 2_000,
  preserveRecentTurns: 3,
});

if (result.wasCompacted) {
  sendToModel(result.compactedMessages);
}
```

The system message and newest turns remain intact. Older turns are represented as a bounded structured history block.

## Use a typed compaction mode

```ts
import { BroccoliCompactionFacade } from 'prompt-compressor';

const result = BroccoliCompactionFacade.compact({
  mode: 'log_stream',
  logs: logLines,
  options: { maxClusters: 100, preserveVerbatimSamples: 3 },
});
```

The facade supports `domain`, `batch`, `log_stream`, `metric_stream`, `trace_stream`, `structured_stream`, `network_stream`, `orderbook_stream`, `window_stream`, `sensor_stream`, `clickstream`, `genomic_stream`, `stream_envelope`, `ebpf_stream`, `k8s_watch_stream`, `geospatial_stream`, `arrow_dict_stream`, `incident`, and `document`.

## Estimate query spend

```ts
import { TokenCostCalculator } from 'prompt-compressor';

const cost = TokenCostCalculator.calculateCost('gpt-5.6-luna', {
  promptTokens: result.outputTokens,
  cachedTokens: 1_000,
  completionTokens: 500,
});

console.log(cost.netCostUsd, cost.totalSavingsUsd, cost.executiveSummary);
```

`TokenCostCalculator` is deterministic and offline. The catalog and rate cards are package data; applications should validate them against their own commercial agreements before using them for invoices.

## Recommended host workflow

Use the package as one bounded step in a larger request lifecycle:

1. Capture the source prompt, message history, task type, tenant, and budget in the host.
2. Transform with `PromptCompressor`, `ContextCompactor`, or `BroccoliCompactionFacade`.
3. Record the source/result hashes and estimated token metadata.
4. Let the host choose a model and make the provider call.
5. Attach provider-reported usage, cache status, latency, and actual charge to the same request record.
6. Reconcile the estimate with the provider record; investigate large deltas instead of silently rewriting history.

The package's estimates are useful for routing and guardrails. They are not a billing authority.
