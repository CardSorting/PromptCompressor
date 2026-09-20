/**
 * GALXAI Output Token Verbosity & Schema Optimizer
 *
 * Output tokens are 4x–5x more expensive than input tokens ($15.00/1M on Sol).
 * When API endpoints and background services query models, conversational filler
 * ("Sure! Here is the information you requested...") wastes thousands of output tokens.
 *
 * This engine transparently attaches concise output directives to API workloads,
 * slashing output token generation by 40%–60% without altering task accuracy.
 */
export interface OutputOptimizationResult {
    wasOptimized: boolean;
    directiveInjected?: string;
    estimatedOutputTokensSavedPct: number;
}
export declare class OutputVerbosityOptimizer {
    private static CONCISE_DIRECTIVE;
    /**
     * Evaluates if a request should have concise output directives attached
     */
    static optimizeRequest(messages: Array<{
        role: string;
        content: string;
    }>, options?: {
        isApiCall?: boolean;
        workload?: string;
        responseFormat?: string | Record<string, unknown>;
    }): {
        optimizedMessages: Array<{
            role: string;
            content: string;
        }>;
        result: OutputOptimizationResult;
    };
}
//# sourceMappingURL=OutputVerbosityOptimizer.d.ts.map