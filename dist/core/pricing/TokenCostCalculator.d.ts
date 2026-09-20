import { ModelSpecItem } from '../router/ModelCatalog.js';
export type ServiceTier = 'standard' | 'batch' | 'flex';
export interface TokenUsageInput {
    promptTokens?: number;
    completionTokens?: number;
    cachedTokens?: number;
    cacheCreationTokens?: number;
    reasoningTokens?: number;
    imagesCount?: number;
    quality?: 'standard' | 'hd';
    audioInputTokens?: number;
    audioOutputTokens?: number;
    audioInputSeconds?: number;
    audioOutputSeconds?: number;
    serviceTier?: ServiceTier;
}
export type VolumeDiscountTier = 'hobby' | 'startup' | 'scale' | 'enterprise';
export interface VolumeTierInfo {
    tier: VolumeDiscountTier;
    label: string;
    minMonthlySpendUsd: number;
    additionalRebatePct: number;
}
export declare const VOLUME_TIERS: Record<VolumeDiscountTier, VolumeTierInfo>;
export type SupportedCurrency = 'USD' | 'EUR' | 'GBP' | 'JPY' | 'CAD' | 'AUD' | 'CHF' | 'SGD';
export declare const CURRENCY_FX_RATES: Record<SupportedCurrency, {
    rate: number;
    symbol: string;
    decimals: number;
}>;
export interface OptimizationRecommendation {
    type: 'caching' | 'model_selection' | 'batch_mode' | 'prompt_reduction';
    title: string;
    description: string;
    estimatedMonthlySavingsUsd: number;
    impactLevel: 'high' | 'medium' | 'low';
}
export interface GranularCostBreakdown {
    modelId: string;
    modelName: string;
    category: 'llm' | 'image' | 'embedding';
    serviceTier: ServiceTier;
    promptTokens: number;
    cachedTokens: number;
    cacheCreationTokens: number;
    nonCachedPromptTokens: number;
    completionTokens: number;
    reasoningTokens: number;
    totalTokens: number;
    imagesCount?: number;
    audioInputTokens?: number;
    audioOutputTokens?: number;
    promptCostUsd: number;
    cachedCostUsd: number;
    cacheCreationCostUsd: number;
    completionCostUsd: number;
    reasoningCostUsd: number;
    audioCostUsd?: number;
    imageCostUsd?: number;
    batchDiscountUsd: number;
    totalCostUsd: number;
    volumeTier: VolumeDiscountTier;
    volumeTierRebateUsd: number;
    netCostUsd: number;
    retailPromptCostUsd: number;
    retailCompletionCostUsd: number;
    retailTotalCostUsd: number;
    wholesaleSavingsUsd: number;
    cachingSavingsUsd: number;
    totalSavingsUsd: number;
    savingsPercentage: number;
    estimatedEnergyWattHours: number;
    estimatedCarbonGramsCO2e: number;
    executiveSummary: string;
}
export interface ModelPricingSummary {
    modelId: string;
    name: string;
    provider: string;
    category: 'llm' | 'image' | 'embedding';
    inputPricePer1M: number;
    outputPricePer1M: number;
    cachedInputPricePer1M: number;
    listPricePer1MInput: number;
    listPricePer1MOutput: number;
    discountPercentage: number;
    promptPricePer1k: number;
    completionPricePer1k: number;
    cachedPricePer1k: number;
    batchPricePer1MInput: number;
    batchPricePer1MOutput: number;
    formattedRateDisplay: string;
}
export declare class TokenCostCalculator {
    /**
     * Resolves the user's active volume discount tier based on 30-day trailing spend.
     */
    static resolveVolumeTier(monthlySpendUsd: number): VolumeTierInfo;
    /**
     * Calculates exact sub-cent token or image cost with micro-precision ($0.000001)
     * for LLMs, prompt caching rebates, reasoning chains, embedding models, and image diffusion engines.
     */
    static calculateCost(modelSpecOrId: ModelSpecItem | string, usage: TokenUsageInput, options?: {
        monthlySpendUsd?: number;
        customVolumeTier?: VolumeDiscountTier;
    }): GranularCostBreakdown;
    /**
     * Generates actionable optimization recommendations for a given workload.
     */
    static recommendOptimizations(breakdown: GranularCostBreakdown, monthlyQueries?: number): OptimizationRecommendation[];
    /**
     * Converts a USD amount into target international currency.
     */
    static convertCurrency(amountUsd: number, targetCurrency?: SupportedCurrency): {
        amount: number;
        formatted: string;
        currency: SupportedCurrency;
        fxRate: number;
    };
    /**
     * Returns human-readable pricing summary with per-1K and per-1M token rates
     * suitable for friendly UI tables and non-technical cards.
     */
    static getPricingSummary(modelSpecOrId: ModelSpecItem | string): ModelPricingSummary;
    /**
     * Compares multiple models side-by-side for a specific token workload.
     */
    static compareModels(modelIds: string[], usage: TokenUsageInput): GranularCostBreakdown[];
    /**
     * Formats a micro-cost amount for display with adaptive decimal places.
     * e.g. $0.007750, $0.15, $14.20
     */
    static formatCost(amountUsd: number): string;
    /**
     * Formats token counts compactly (e.g. 1.2K, 4.8M, 120.5M).
     */
    static formatTokensCompact(tokens: number): string;
    /**
     * Estimates token count from raw text based on content modality.
     */
    static estimateTokensFromText(text: string, modality?: 'prose' | 'code' | 'json'): number;
    /**
     * Projects remaining wallet runway (in days and request capacity)
     * given a balance and daily query volume.
     */
    static projectRunway(params: {
        balanceUsd: number;
        dailyRequests: number;
        avgPromptTokens?: number;
        avgCompletionTokens?: number;
        avgCachedPct?: number;
        modelId?: string;
    }): {
        estimatedDays: number;
        dailyCostUsd: number;
        monthlyCostUsd: number;
        totalRequestCapacity: number;
        costPer1kRequestsUsd: number;
        monthlySavingsUsd: number;
    };
}
//# sourceMappingURL=TokenCostCalculator.d.ts.map