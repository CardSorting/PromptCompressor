/**
 * GALXAI Prompt Prefix Restructurer
 *
 * Analyzes prompt structures, detects volatile tokens (timestamps, UUIDs, trace IDs)
 * prepended at prompt head that destroy prompt caching, and reorders the prompt:
 * [Static System & Schema Context (Cache Protected)] + [Dynamic Ephemeral Metadata].
 *
 * Unlocks the 75% compound prompt caching rebate on OpenAI models (>1,024 tokens).
 */
export interface PrefixRestructureResult {
    wasRestructured: boolean;
    detectedVolatileHeaders: string[];
    originalPrefixTokenEstimate: number;
    cacheEligibleTokens: number;
    restructuredPrompt: string;
}
export declare class PromptPrefixRestructurer {
    /**
     * Restructures a system or user prompt to maximize prompt cache hits (>1,024 tokens)
     */
    static restructure(prompt: string): PrefixRestructureResult;
}
//# sourceMappingURL=PromptPrefixRestructurer.d.ts.map