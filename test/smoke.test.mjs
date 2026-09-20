import assert from 'node:assert/strict';
import test from 'node:test';

import {
  BroccoliCompactionFacade,
  ContextCompactor,
  OutputVerbosityOptimizer,
  PromptCompressor,
  PromptPrefixRestructurer,
  SemanticEdgeCache,
  TokenCostCalculator,
} from '../dist/index.js';

test('package-level prompt pipeline is usable without the app runtime', () => {
  const input = [
    'ACTIVE CODE BASE INVARIANTS',
    'Invariant 1: preserve BroccoliCompactionSafety.',
    'INSTITUTIONAL GOVERNANCE',
    'Historical memorandum and superseded ceremony text. '.repeat(60),
  ].join('\n');

  const result = PromptCompressor.compress(input, { restructurePrefix: false });

  assert.equal(result.path, 'representation');
  assert.match(result.output, /ACTIVE ACTION-SAFE CODE INVARIANTS/);
  assert.ok(result.outputTokens <= result.originalTokens);
});

test('message compaction and concise-output optimization remain available', () => {
  const messages = [
    { role: 'system', content: 'You are a helpful assistant.' },
    ...Array.from({ length: 8 }, (_, index) => ({
      role: index % 2 === 0 ? 'user' : 'assistant',
      content: `Turn ${index}: ${'context '.repeat(80)}`,
    })),
  ];

  const compacted = ContextCompactor.compact(messages, {
    maxUncompactedTokens: 100,
    preserveRecentTurns: 3,
  });
  assert.equal(compacted.wasCompacted, true);
  assert.ok(compacted.tokensSaved > 0);

  const optimized = OutputVerbosityOptimizer.optimizeRequest(messages, { isApiCall: true });
  assert.equal(optimized.result.wasOptimized, true);
  assert.match(optimized.optimizedMessages[0].content, /Concise response mode/);
});

test('prefix caching and provider cost accounting are standalone', () => {
  const prompt = `${'Stable schema line. '.repeat(12)}\nCurrent Time: 2026-09-20T12:00:00Z`;
  const prefix = PromptPrefixRestructurer.restructure(prompt);
  assert.equal(prefix.wasRestructured, true);
  assert.ok(prefix.cacheEligibleTokens > 0);

  const cost = TokenCostCalculator.calculateCost('gpt-5.6-luna', {
    promptTokens: 2_000,
    cachedTokens: 1_000,
    completionTokens: 200,
  });
  assert.equal(cost.totalTokens, 2_200);
  assert.ok(cost.netCostUsd >= 0);
});

test('BroccoliDB facade and semantic cache remain directly callable', () => {
  const short = BroccoliCompactionFacade.selectRepresentation({ text: 'short prompt' });
  assert.equal(short.decision, 'BYPASS_IDENTITY');

  SemanticEdgeCache.clear();
  SemanticEdgeCache.store('What is 2 + 2?', 'gpt-5.6-luna', '4', 12);
  const hit = SemanticEdgeCache.lookup('  WHAT IS 2 + 2?  ', 'gpt-5.6-luna');
  assert.equal(hit.hit, true);
  assert.equal(hit.entry?.responseContent, '4');
  SemanticEdgeCache.clear();
});
