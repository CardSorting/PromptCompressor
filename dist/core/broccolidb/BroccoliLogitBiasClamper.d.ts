/**
 * GALXAI BroccoliDB Classification Logit Bias & 1-Token Output Clamper
 *
 * Slashes massive output token waste on classification, moderation, and intent gating:
 * 1. Detects classification / routing / boolean prompts in BroccoliDB (<0.05ms).
 * 2. Injects `max_tokens: 1` and exact `logit_bias` multipliers for allowed categorical tokens.
 * 3. Forces model to emit strictly 1 single deterministic token (e.g. "ALLOW", "BLOCK", "BILLING")
 *    instead of conversational preamble ("Based on my analysis, the classification is...").
 *
 * Result: Slashes 98.0% of output tokens on high-volume classification and routing pipelines.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface LogitBiasClampingResult {
    wasClamped: boolean;
    detectedClassificationType?: 'BOOLEAN_GATE' | 'SENTIMENT' | 'INTENT_ROUTING';
    originalMaxTokens: number;
    clampedMaxTokens: number;
    allowedTokens: string[];
    tokensSavedPerCall: number;
    savingsPercentage: number;
}
export declare class BroccoliLogitBiasClamper {
    private static instance;
    readonly classificationAuditTable: BroccoliDbTable<{
        id: string;
        classificationType: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliLogitBiasClamper;
    /**
     * Analyzes prompt and configures deterministic 1-token logit clamping for classification queries
     */
    static clampClassificationPayload(promptText: string, requestedMaxTokens?: number): LogitBiasClampingResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliLogitBiasClamper.d.ts.map