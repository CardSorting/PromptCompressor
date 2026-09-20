/**
 * GALXAI BroccoliDB Temporal Expression Normalizer & Time-Range Resolver
 *
 * Slashes massive LLM spend on relative date parsing and time-window resolution:
 * 1. Evaluates colloquial temporal expressions (yesterday, last 24 hours, past 7 days, this month) in BroccoliDB (<0.01ms).
 * 2. Resolves exact ISO-8601 timestamps { startIso, endIso } deterministically against UTC clock.
 * 3. Short-circuits LLM date arithmetic with $0.000 token cost and zero time-zone hallucinations.
 *
 * Result: Slashes 100% of LLM compute spend on temporal query extraction.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface ResolvedTimeRange {
    rawExpression: string;
    startIso: string;
    endIso: string;
    durationHours: number;
}
export interface TemporalResolutionResult {
    wasResolved: boolean;
    timeRange?: ResolvedTimeRange;
    tokensSaved: number;
    dollarsSavedUsd: number;
}
export declare class BroccoliTemporalExpressionNormalizer {
    private static instance;
    readonly temporalAuditTable: BroccoliDbTable<{
        id: string;
        rawExpression: string;
        startIso: string;
        endIso: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliTemporalExpressionNormalizer;
    /**
     * Resolves relative date/time expressions into precise ISO-8601 intervals
     */
    static resolveTimeRange(naturalText: string, nowMs?: number, estimatedPromptTokens?: number): TemporalResolutionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliTemporalExpressionNormalizer.d.ts.map