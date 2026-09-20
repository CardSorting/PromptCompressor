/**
 * Official OpenAI Model Rate Cards & Billed Cost Calculator
 *
 * Accurately models inference boundary expenditure per million tokens:
 * - Standard Uncached Input ($ / M tokens)
 * - Prompt-Cached Read Input ($ / M tokens)
 * - Output & Reasoning Generation Tokens ($ / M tokens)
 */
export interface OpenAiModelRateCard {
    modelId: string;
    displayName: string;
    contextWindowTokens: number;
    maxOutputTokens: number;
    inputCostPerMillionUSD: number;
    cachedInputCostPerMillionUSD: number;
    outputCostPerMillionUSD: number;
    supportsReasoningTokens?: boolean;
}
export interface InferenceTokenUsage {
    inputTokens: number;
    outputTokens: number;
    cachedTokens?: number;
    reasoningTokens?: number;
}
export interface BilledCostBreakdown {
    modelId: string;
    uncachedInputCostUSD: number;
    cachedInputCostUSD: number;
    outputCostUSD: number;
    totalBilledCostUSD: number;
    effectiveCostPerThousandTokensUSD: number;
}
export declare const OPENAI_MODEL_RATE_CARDS: Record<string, OpenAiModelRateCard>;
export declare class OpenAiRateCardRegistry {
    static getRateCard(modelId: string): OpenAiModelRateCard;
    /**
     * Calculates actual billed expenditure at the OpenAI inference boundary.
     */
    static calculateBilledCost(modelId: string, usage: InferenceTokenUsage): BilledCostBreakdown;
}
//# sourceMappingURL=ProviderRateCards.d.ts.map