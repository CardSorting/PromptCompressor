/**
 * GALXAI BroccoliDB Basel III & Federal Reserve CCAR Bank Stress Test Compactor
 *
 * Slashes massive LLM token bills on bank capital adequacy filings (Basel III / IV, Dodd-Frank DFAST, Federal Reserve CCAR):
 * 1. Evaluates 100+ page regulatory stress test submissions in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Bank Holding Company, Baseline vs Severely Adverse Scenario, Post-Stress CET1 Ratio %, Leverage Ratio %, Total Loan Losses $, and Capital Distribution.
 * 3. Prunes repetitive macroeconomic statistical regression equations, supervisory model code listings, and regulatory appendix footnotes.
 *
 * Result: Slashes 75%–90% of banking regulatory stress testing prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface BaselStressTestCompactionResult {
    wasCompacted: boolean;
    bankAndReportingHorizon: string;
    stressScenariosAndMacroShocks: string;
    capitalRatiosAndPostStressCet1: string;
    loanLossesAndCapitalDistribution: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedBaselPrompt: string;
}
export declare class BroccoliBaselStressTestCompactor {
    private static instance;
    readonly baselTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliBaselStressTestCompactor;
    static compactStressTest(rawText: string): BaselStressTestCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliBaselStressTestCompactor.d.ts.map