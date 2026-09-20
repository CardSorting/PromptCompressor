import { BroccoliCompactionFacade, } from './core/broccolidb/BroccoliCompactionFacade.js';
import { ContextCompactor, } from './core/optimization/ContextCompactor.js';
import { OutputVerbosityOptimizer, } from './core/optimization/OutputVerbosityOptimizer.js';
import { PromptPrefixRestructurer, } from './core/governance/PromptPrefixRestructurer.js';
/**
 * Small package-level entry point for the existing compaction substrate.
 *
 * It composes the existing cache-prefix optimizer with either the hardened
 * domain compactor or the adaptive representation selector. It does not call
 * a model and has no provider, database, or web-framework dependency.
 */
export class PromptCompressor {
    static compress(input, options = {}) {
        if (typeof input !== 'string') {
            throw new TypeError('input must be a string');
        }
        const originalTokens = this.estimateTokens(input);
        let output = input;
        let prefixRestructure;
        if (options.restructurePrefix !== false) {
            prefixRestructure = PromptPrefixRestructurer.restructure(output);
            output = prefixRestructure.restructuredPrompt;
        }
        let path = 'identity';
        let domainResult;
        if (options.domainHint) {
            domainResult = BroccoliCompactionFacade.compactDomain(output, options.domainHint);
            output = domainResult.compactedPrompt;
            path = 'domain';
        }
        else {
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
    static compactMessages(messages, options = {}) {
        return ContextCompactor.compact(messages, options);
    }
    static optimizeOutput(messages, options = {}) {
        return OutputVerbosityOptimizer.optimizeRequest(messages, options);
    }
    static estimateTokens(value) {
        return Math.ceil(value.length / 4);
    }
}
export function compressPrompt(input, options = {}) {
    return PromptCompressor.compress(input, options);
}
//# sourceMappingURL=PromptCompressor.js.map