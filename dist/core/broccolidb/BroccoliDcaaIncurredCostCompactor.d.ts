/**
 * GALXAI BroccoliDB Defense Contract Audit Agency (DCAA) Incurred Cost Electronic (ICE) Compactor
 *
 * Slashes massive LLM token bills on DCAA annual Incurred Cost Electronic (ICE) submissions (Schedules A through O) and Forward Pricing Rate Agreements (FPRA / FAR Part 42):
 * 1. Evaluates multi-megabyte Excel/CSV DCAA ICE model cost accounting schedules in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Contractor Name / CAGE Code, Fiscal Year, Cumulative Allowable Incurred Costs ($), Direct Labor / Direct Material, Fringe / Overhead / G&A Indirect Rates %, Cumulative Contract Billings vs Costs Claimed ($ Over/Underbillings), and Questioned Costs.
 * 3. Prunes millions of individual payroll transaction line items, routine sub-tier vendor voucher references, and standard FAR Part 31 cost principle text.
 *
 * Result: Slashes 80%–95% of defense accounting DCAA ICE prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface DcaaIncurredCostCompactionResult {
    wasCompacted: boolean;
    contractorAndFiscalYear: string;
    directCostsAndIndirectPools: string;
    indirectRatesFringeOvhGa: string;
    cumulativeBillingsAndQuestionedCosts: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedDcaaPrompt: string;
}
export declare class BroccoliDcaaIncurredCostCompactor {
    private static instance;
    readonly dcaaTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliDcaaIncurredCostCompactor;
    static compactDcaa(rawText: string): DcaaIncurredCostCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliDcaaIncurredCostCompactor.d.ts.map