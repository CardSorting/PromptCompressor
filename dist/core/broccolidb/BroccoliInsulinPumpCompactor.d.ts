/**
 * GALXAI BroccoliDB Endocrinology & Automated Insulin Delivery (AID) Pump Compactor
 *
 * Slashes massive LLM token bills on closed-loop insulin pump telemetry and smart infusion logs:
 * 1. Evaluates continuous closed-loop basal/bolus logs in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Total Daily Dose (TDD), Basal/Bolus Ratio %, Auto-Correction Boluses, Automated Basal Suspensions, and Carbs.
 * 3. Prunes continuous 5-minute algorithmic micro-delivery step arrays, motor step checks, and battery telemetry.
 *
 * Result: Slashes 75%–90% of insulin pump telemetry prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface InsulinPumpCompactionResult {
    wasCompacted: boolean;
    pumpModelAndSettings: string;
    totalDailyDoseAndRatios: string;
    automatedClosedLoopMetrics: string;
    alarmsAndCannulaStatus: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedPumpPrompt: string;
}
export declare class BroccoliInsulinPumpCompactor {
    private static instance;
    readonly pumpTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliInsulinPumpCompactor;
    static compactPump(rawText: string): InsulinPumpCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliInsulinPumpCompactor.d.ts.map