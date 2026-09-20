/**
 * GALXAI BroccoliDB Food Safety HACCP & USDA/FDA Compliance Compactor
 *
 * Slashes massive LLM token bills on commercial food manufacturing HACCP logs, CCP monitoring sheets, and FSMA sanitation records:
 * 1. Evaluates multi-shift food processing facility inspection logs in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Facility USDA/FDA Est#, Critical Control Points (CCPs), Critical Limits (Temp/Time/pH/Aw), Deviations, and Corrective Actions.
 * 3. Prunes routine shift supervisor sign-in sheets, boiler water treatment logs, and standard SSOP cleaning manual boilerplate.
 *
 * Result: Slashes 70%–85% of food safety HACCP prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface FoodSafetyHaccpCompactionResult {
    wasCompacted: boolean;
    facilityAndHaccpPlan: string;
    criticalControlPointMetrics: string;
    deviationsAndCorrectiveActions: string;
    microbiologicalVerificationAndRelease: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedHaccpPrompt: string;
}
export declare class BroccoliFoodSafetyHaccpCompactor {
    private static instance;
    readonly haccpTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliFoodSafetyHaccpCompactor;
    static compactHaccp(rawText: string): FoodSafetyHaccpCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliFoodSafetyHaccpCompactor.d.ts.map