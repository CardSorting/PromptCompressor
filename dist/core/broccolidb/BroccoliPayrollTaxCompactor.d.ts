/**
 * GALXAI BroccoliDB Enterprise Payroll Tax & ACA Form 941/1095-C Compactor
 *
 * Slashes massive LLM token bills on quarterly employment tax returns (IRS Form 941), ACA employer mandates (Form 1095-C), and state payroll filings:
 * 1. Evaluates 50+ page payroll ledger tax summaries in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Employer EIN, Total Employee Count, Total Compensation/Wages, Taxable FICA/Medicare, Total Tax Withheld, and ACA Coverage Codes.
 * 3. Prunes individual employee SSN payroll stub rows, standard IRS tax computation instructions, and electronic filing PIN confirmations.
 *
 * Result: Slashes 75%–90% of payroll tax accounting prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface PayrollTaxCompactionResult {
    wasCompacted: boolean;
    employerAndQuarter: string;
    wagesAndEmployeeCount: string;
    taxLiabilityAndWithholding: string;
    acaComplianceAndSafeHarbor: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedPayrollPrompt: string;
}
export declare class BroccoliPayrollTaxCompactor {
    private static instance;
    readonly payrollTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliPayrollTaxCompactor;
    static compactPayroll(rawText: string): PayrollTaxCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliPayrollTaxCompactor.d.ts.map