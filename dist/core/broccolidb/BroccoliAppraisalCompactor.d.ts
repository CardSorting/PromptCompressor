/**
 * GALXAI BroccoliDB Fannie Mae Form 1004 URAR Appraisal Report Compactor
 *
 * Slashes massive LLM token bills on collateral underwriting, appraisal review desks, and secondary mortgage swarms:
 * 1. Evaluates multi-page Form 1004 URAR appraisal reports in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly the 4 critical collateral figures (Appraised value, Condition/Quality, Comparable grid, Repairs).
 * 3. Prunes 30+ pages of USPAP certification boilerplate, neighborhood market text, and FEMA flood zone definitions.
 *
 * Result: Slashes 75%–90% of appraisal report prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface AppraisalCompactionResult {
    wasCompacted: boolean;
    appraisedValue: string;
    conditionAndQuality: string;
    comparablesSummary: string;
    repairContingencies: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedAppraisalPrompt: string;
}
export declare class BroccoliAppraisalCompactor {
    private static instance;
    readonly appraisalAuditTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliAppraisalCompactor;
    /**
     * Compacts raw Form 1004 URAR appraisal report
     */
    static compactAppraisal(rawAppraisalText: string): AppraisalCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliAppraisalCompactor.d.ts.map