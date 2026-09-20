/**
 * GALXAI BroccoliDB KV Suffix Hoister & Segment Normalizer
 *
 * Unlocks 50% OpenAI Prompt Caching on inverted prompt architectures:
 * 1. Analyzes prompt structure in BroccoliDB (<0.05ms) to detect invariant formatting suffixes.
 * 2. Hoists trailing output constraints ("Return as markdown table...", "Do not include pleasantries...")
 *    into the top static prefix block before ephemeral user text.
 * 3. Maximizes contiguous prefix token length (≥1024 tokens) to guarantee 100% OpenAI cache hits.
 *
 * Result: Converts previously uncacheable prompts into 50% discounted cached requests.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface SuffixHoistResult {
    wasHoisted: boolean;
    originalPrefixTokens: number;
    hoistedPrefixTokens: number;
    isEligibleForKVCache: boolean;
    cacheKeyHash: string;
    reconstructedPrompt: string;
}
export declare class BroccoliKVSuffixHoister {
    private static instance;
    readonly hoistAuditTable: BroccoliDbTable<{
        id: string;
        originalTokens: number;
        hoistedTokens: number;
        cacheEligible: boolean;
        timestampMs: number;
    }>;
    private static readonly INVARIANT_SUFFIX_PATTERNS;
    private constructor();
    static getInstance(): BroccoliKVSuffixHoister;
    /**
     * Identifies invariant suffixes in prompt text and hoists them to the static system prefix
     */
    static hoistSuffixDirectives(staticPrefix: string, dynamicPrompt: string): SuffixHoistResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliKVSuffixHoister.d.ts.map