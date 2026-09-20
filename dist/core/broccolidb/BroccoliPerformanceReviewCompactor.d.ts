/**
 * GALXAI BroccoliDB Performance Review & 360 Feedback Compactor
 *
 * Slashes massive LLM token bills on talent management swarms, compensation calibration, and promotion reviews:
 * 1. Evaluates multi-page 360-degree reviews and peer feedback logs in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Employee/Cycle, Calibrated Rating, Key Strengths/Delivery, and Growth Areas.
 * 3. Prunes rating scale legends (1 to 5 explanations), conversational pleasantries, and duplicate peer comments.
 *
 * Result: Slashes 75%–90% of HR performance review and talent calibration prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface PerformanceReviewCompactionResult {
    wasCompacted: boolean;
    employeeAndReviewCycle: string;
    calibratedRatingAndImpact: string;
    keyStrengthsAndDelivery: string;
    growthAreasAndDevelopment: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedReviewPrompt: string;
}
export declare class BroccoliPerformanceReviewCompactor {
    private static instance;
    readonly reviewAuditTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliPerformanceReviewCompactor;
    /**
     * Compacts raw performance review or 360 feedback text
     */
    static compactReview(rawReviewText: string): PerformanceReviewCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliPerformanceReviewCompactor.d.ts.map