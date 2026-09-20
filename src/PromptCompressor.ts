import {
  BroccoliCompactionFacade,
  type DomainOptimizationResult,
} from './core/broccolidb/BroccoliCompactionFacade.js';
import {
  ContextCompactor,
  type CompactionResult,
  type MessageItem,
} from './core/optimization/ContextCompactor.js';
import {
  OutputVerbosityOptimizer,
  type OutputOptimizationResult,
} from './core/optimization/OutputVerbosityOptimizer.js';
import {
  PromptPrefixRestructurer,
  type PrefixRestructureResult,
} from './core/governance/PromptPrefixRestructurer.js';

export interface PromptCompressionOptions {
  /** Optional domain signature routed through the hardened domain compaction facade. */
  domainHint?: string;
  /** Optional task label used by the adaptive representation selector. */
  taskType?: string;
  /** Optional budget passed to the adaptive representation selector. */
  tokenBudget?: number;
  /** Reorder volatile prompt headers to improve provider cache reuse. Defaults to true. */
  restructurePrefix?: boolean;
}

export interface PromptCompressionResult {
  input: string;
  output: string;
  originalTokens: number;
  outputTokens: number;
  tokensSaved: number;
  savingsPercentage: number;
  path: 'identity' | 'representation' | 'domain';
  domainResult?: DomainOptimizationResult;
  prefixRestructure?: PrefixRestructureResult;
}

/**
 * Small package-level entry point for the existing compaction substrate.
 *
 * It composes the existing cache-prefix optimizer with either the hardened
 * domain compactor or the adaptive representation selector. It does not call
 * a model and has no provider, database, or web-framework dependency.
 */
export class PromptCompressor {
  public static compress(
    input: string,
    options: PromptCompressionOptions = {}
  ): PromptCompressionResult {
    if (typeof input !== 'string') {
      throw new TypeError('input must be a string');
    }

    const originalTokens = this.estimateTokens(input);
    let output = input;
    let prefixRestructure: PrefixRestructureResult | undefined;

    if (options.restructurePrefix !== false) {
      prefixRestructure = PromptPrefixRestructurer.restructure(output);
      output = prefixRestructure.restructuredPrompt;
    }

    let path: PromptCompressionResult['path'] = 'identity';
    let domainResult: DomainOptimizationResult | undefined;

    if (options.domainHint) {
      domainResult = BroccoliCompactionFacade.compactDomain(output, options.domainHint);
      output = domainResult.compactedPrompt;
      path = 'domain';
    } else {
      const selection = BroccoliCompactionFacade.selectRepresentation({
        text: output,
        taskType: options.taskType,
        tokenBudget: options.tokenBudget,
      });
      output = selection.selectedRepresentation;
      path = selection.decision === 'BYPASS_IDENTITY' ? 'identity' : 'representation';
    }

    const outputTokens = this.estimateTokens(output);
    const tokensSaved = Math.max(0, originalTokens - outputTokens);

    return {
      input,
      output,
      originalTokens,
      outputTokens,
      tokensSaved,
      savingsPercentage: originalTokens > 0
        ? Number(((tokensSaved / originalTokens) * 100).toFixed(1))
        : 0,
      path,
      domainResult,
      prefixRestructure,
    };
  }

  public static compactMessages(
    messages: MessageItem[],
    options: Parameters<typeof ContextCompactor.compact>[1] = {}
  ): CompactionResult {
    return ContextCompactor.compact(messages, options);
  }

  public static optimizeOutput(
    messages: Array<{ role: string; content: string }>,
    options: Parameters<typeof OutputVerbosityOptimizer.optimizeRequest>[1] = {}
  ): {
    optimizedMessages: Array<{ role: string; content: string }>;
    result: OutputOptimizationResult;
  } {
    return OutputVerbosityOptimizer.optimizeRequest(messages, options);
  }

  public static estimateTokens(value: string): number {
    return Math.ceil(value.length / 4);
  }
}

export function compressPrompt(
  input: string,
  options: PromptCompressionOptions = {}
): PromptCompressionResult {
  return PromptCompressor.compress(input, options);
}
