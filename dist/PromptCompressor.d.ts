import { type DomainOptimizationResult } from './core/broccolidb/BroccoliCompactionFacade.js';
import { ContextCompactor, type CompactionResult, type MessageItem } from './core/optimization/ContextCompactor.js';
import { OutputVerbosityOptimizer, type OutputOptimizationResult } from './core/optimization/OutputVerbosityOptimizer.js';
import { type PrefixRestructureResult } from './core/governance/PromptPrefixRestructurer.js';
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
export declare class PromptCompressor {
    static compress(input: string, options?: PromptCompressionOptions): PromptCompressionResult;
    static compactMessages(messages: MessageItem[], options?: Parameters<typeof ContextCompactor.compact>[1]): CompactionResult;
    static optimizeOutput(messages: Array<{
        role: string;
        content: string;
    }>, options?: Parameters<typeof OutputVerbosityOptimizer.optimizeRequest>[1]): {
        optimizedMessages: Array<{
            role: string;
            content: string;
        }>;
        result: OutputOptimizationResult;
    };
    static estimateTokens(value: string): number;
}
export declare function compressPrompt(input: string, options?: PromptCompressionOptions): PromptCompressionResult;
//# sourceMappingURL=PromptCompressor.d.ts.map