/**
 * GALXAI BroccoliDB Dynamic Model Token Arbitrageur & Intent Classifier
 *
 * Slashes massive model over-provisioning spend across OpenAI model tiers:
 * 1. Evaluates incoming prompt intent & complexity in BroccoliDB (<0.01ms).
 * 2. Classifies task capability requirements:
 *    - Basic classification / extraction / translation -> `gpt-5.6-luna` ($0.15 in / $0.60 out -> 94% cheaper!).
 *    - Standard generation / summarization / refactoring -> `gpt-5.6-terra` ($0.60 in / $2.40 out -> 76% cheaper).
 *    - Multi-step architecture / proof / security audit -> `gpt-5.6-sol` ($2.50 in / $15.00 out).
 * 3. Arbitrates to the optimal model endpoint, preventing hardcoded Sol billing waste.
 *
 * Result: Slashes 76%–94% of token spend on routine enterprise classification and extraction tasks.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export type OpenAITierModel = 'gpt-5.6-sol' | 'gpt-5.6-terra' | 'gpt-5.6-luna';
export interface ArbitrageDecision {
    wasArbitrated: boolean;
    selectedModel: OpenAITierModel;
    inputCostPer1M: number;
    outputCostPer1M: number;
    estimatedCostUsd: number;
    baselineSolCostUsd: number;
    dollarsSavedUsd: number;
    savingsPercentage: number;
    intentCategory: 'EXTRACTION' | 'CLASSIFICATION' | 'SUMMARIZATION' | 'CODE_GEN' | 'DEEP_REASONING';
}
export declare class BroccoliTokenArbitrageur {
    private static instance;
    readonly arbitrageAuditTable: BroccoliDbTable<{
        id: string;
        selectedModel: string;
        dollarsSavedUsd: number;
        timestampMs: number;
    }>;
    private static readonly MODEL_PRICING;
    private constructor();
    static getInstance(): BroccoliTokenArbitrageur;
    /**
     * Evaluates prompt intent and selects the most cost-effective OpenAI model endpoint
     */
    static arbitrate(promptText: string, estimatedInputTokens?: number, estimatedOutputTokens?: number): ArbitrageDecision;
    static clear(): void;
}
//# sourceMappingURL=BroccoliTokenArbitrageur.d.ts.map