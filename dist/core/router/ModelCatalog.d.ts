import type { ModelSpecItem, ProviderType } from '../contracts/GalxContracts.js';
export type { ModelSpecItem, ProviderType };
import { BroccoliDbTable } from '../broccolidb/broccolidb-table.js';
import type { DbQueryOptions, DbAggregateQuery } from '../broccolidb/broccolidb.contracts.js';
/**
 * Exclusive Model Catalog for GALXAI.
 * Houses only the requested flagship modern generation LLMs & visual synthesis engines:
 * - OpenAI Codex & GPT-5.6 Suite: `gpt-5.6-sol`, `gpt-5.6-terra`, `gpt-5.6-luna`, `openai-gpt-image-2`, `openai-gpt-image-1.5`, `openai-gpt-image-1`
 *
 * Text-model rates are the OpenAI public API rates, verified 2026-08-27.
 * Any negotiated GALXAI rebate must be applied as an explicit billing contract,
 * never embedded here as an invented "wholesale" discount.
 * Source: https://developers.openai.com/api/docs/models/compare
 */
export declare const EXCLUSIVE_MODEL_CATALOG: ModelSpecItem[];
/**
 * Models visible in frontend UI components, calculators, pricing tables, and selectors.
 */
export declare const FRONTEND_VISIBLE_MODELS: ModelSpecItem[];
export declare class ModelCatalog {
    private static catalog;
    private static fastPathCache;
    /**
     * Hyper-Forgiving 0ms Model Alias Resolution.
     * Absorbs any developer mental model: prefixes, slashes, dashes, dots, spaces, shorthand aliases, intent tags, and fuzzy tokens.
     * Never throws or stalls on ambiguous inputs — always resolves to the optimal matching engine.
     */
    static resolveModel(requestedModel?: string | null): ModelSpecItem;
    private static computeResolution;
    static listAll(): ModelSpecItem[];
    static listModels(): ModelSpecItem[];
    static listFrontendModels(): ModelSpecItem[];
    static getSupportedModels(): ModelSpecItem[];
    static listByProvider(provider: ProviderType): ModelSpecItem[];
    static listByCategory(category: 'llm' | 'image' | 'embedding'): ModelSpecItem[];
    static getSpec(id: string): ModelSpecItem | null;
    private static dbTableInstance;
    static getTable(): BroccoliDbTable<ModelSpecItem>;
    /**
     * Executes deterministic offline natural language queries over the model catalog (<0.1ms).
     */
    static queryNatural(naturalQuery: string): ModelSpecItem[];
    /**
     * Evaluates rich operator filters ($gt, $between, $in, $regex) over the catalog.
     */
    static queryDSL(options: DbQueryOptions): ModelSpecItem[];
    /**
     * Performs statistical calculus over the model catalog (e.g. min/max/avg pricing by provider).
     */
    static aggregate(query: DbAggregateQuery): import("../broccolidb/broccolidb.contracts.js").DbAggregateResult;
    /**
     * Calculates sub-cent token cost and retail savings with micro-precision.
     */
    static calculateCost(modelId: string, usage: {
        promptTokens?: number;
        completionTokens?: number;
        cachedTokens?: number;
        imagesCount?: number;
    }): {
        modelId: string;
        modelName: string;
        category: "image";
        promptTokens: number;
        cachedTokens: number;
        completionTokens: number;
        totalTokens: number;
        imagesCount: number;
        promptCostUsd: number;
        cachedCostUsd: number;
        completionCostUsd: number;
        totalCostUsd: number;
        retailTotalCostUsd: number;
        savingsUsd: number;
        savingsPercentage: number;
    } | {
        modelId: string;
        modelName: string;
        category: "llm" | "embedding";
        promptTokens: number;
        cachedTokens: number;
        completionTokens: number;
        totalTokens: number;
        promptCostUsd: number;
        cachedCostUsd: number;
        completionCostUsd: number;
        totalCostUsd: number;
        retailTotalCostUsd: number;
        savingsUsd: number;
        savingsPercentage: number;
        imagesCount?: undefined;
    };
}
//# sourceMappingURL=ModelCatalog.d.ts.map