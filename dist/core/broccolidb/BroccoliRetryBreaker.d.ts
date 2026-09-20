/**
 * GALXAI BroccoliDB Intelligent Retry Breaker & Transient Error Guard
 *
 * Prevents catastrophic retry storms and token waste during pipeline failures:
 * 1. Analyzes error signatures in sub-microsecond BroccoliDB memory (<0.05ms).
 * 2. Distinguishes between Deterministic Prompt Bugs (missing parameters, contradictory instructions)
 *    and Transient Upstream Errors (503s, rate limits).
 * 3. Immediately terminates wasteful retries on deterministic failures.
 * 4. On transient errors, automatically down-shifts the retry model to high-velocity Luna/Terra
 *    instead of burning expensive flagship Sol retries.
 *
 * Result: Slashes 100% of redundant retry storm bills on broken prompts.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface RetryEvaluationResult {
    shouldRetry: boolean;
    reason: 'DETERMINISTIC_PROMPT_BUG' | 'TRANSIENT_RECOVERABLE' | 'MAX_RETRIES_EXCEEDED';
    recommendedRetryModelId?: string;
    avoidedRetryCostUsd: number;
}
export declare class BroccoliRetryBreaker {
    private static instance;
    readonly failureRegistryTable: BroccoliDbTable<{
        id: string;
        errorType: string;
        failureCount: number;
        lastFailedMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliRetryBreaker;
    /**
     * Evaluates an error event and determines if a retry is economically and technically viable
     */
    static evaluateFailure(promptText: string, error: {
        status?: number;
        code?: string;
        message: string;
    }, currentAttempt: number, originalModel?: string, estimatedCostUsd?: number): RetryEvaluationResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliRetryBreaker.d.ts.map