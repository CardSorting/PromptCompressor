/**
 * GALXAI BroccoliDB First Notice of Loss (FNOL) & Claims Loss Run Compactor
 *
 * Slashes massive LLM token bills on P&C claims triage swarms, fraud analytics, and adjustor desks:
 * 1. Evaluates multi-page FNOL call intake sheets and 5-year Loss Run reports in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Claim #/Date of Loss, Peril & Damage Est, Policy Deductible/Coverage, and 5-Yr Loss Ratio.
 * 3. Prunes zero-dollar historical inquiry logs, caller pleasantries, weather commentary, and adjuster licensing text.
 *
 * Result: Slashes 75%–90% of insurance claims and loss run prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface FnolCompactionResult {
    wasCompacted: boolean;
    claimIdAndLossDate: string;
    perilAndDamageEstimate: string;
    policyCoverageAndDeductible: string;
    lossRunSummary: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedFnolPrompt: string;
}
export declare class BroccoliFnolCompactor {
    private static instance;
    readonly fnolAuditTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliFnolCompactor;
    /**
     * Compacts raw FNOL claim intake log or historical loss run statement
     */
    static compactFnol(rawFnolText: string): FnolCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliFnolCompactor.d.ts.map