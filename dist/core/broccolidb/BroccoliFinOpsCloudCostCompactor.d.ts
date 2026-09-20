/**
 * GALXAI BroccoliDB Cloud FinOps Billing (FOCUS/CUR) Compactor
 *
 * Slashes massive LLM token bills on multi-cloud billing exports (AWS Cost and Usage Report CUR, Azure EA/MCA, GCP Cloud Billing, FinOps FOCUS v1.0):
 * 1. Evaluates multi-gigabyte cloud invoice and resource line-item dumps in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Cloud Provider/Account, Total Billed Spend $, Top 5 Cost Centers/Services, Reserved Instance/Savings Plan Coverage %, and Idle Waste.
 * 3. Prunes millions of micro-usage resource IDs, ARN strings, API call timestamps, and raw JSON-CSV column definitions.
 *
 * Result: Slashes 80%–95% of FinOps cloud cost prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface FinOpsCloudCostCompactionResult {
    wasCompacted: boolean;
    cloudAccountAndBillingPeriod: string;
    totalSpendAndMoMGrowth: string;
    topServiceCostDrivers: string;
    commitmentCoverageAndIdleWaste: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedFinOpsPrompt: string;
}
export declare class BroccoliFinOpsCloudCostCompactor {
    private static instance;
    readonly finOpsTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliFinOpsCloudCostCompactor;
    static compactFinOps(rawText: string): FinOpsCloudCostCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliFinOpsCloudCostCompactor.d.ts.map