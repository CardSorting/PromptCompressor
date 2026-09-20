/**
 * GALXAI BroccoliDB Employee Benefits ERISA Form 5500 Annual 401(k) Report Compactor
 *
 * Slashes massive LLM token bills on employee benefit plan filings (DOL / IRS / PBGC Form 5500 Annual Return / Report of Employee Benefit Plan):
 * 1. Evaluates 100+ page 401(k) retirement plan Form 5500 filings, Schedule H financial statements, and independent auditor reports in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Plan Sponsor Name / EIN / Plan Number (PN 001), Plan Name (401k Defined Contribution / Defined Benefit), Total Active Plan Participants, Total Plan Net Assets ($), Employer / Employee Contributions ($), Administrative Fees ($), and Independent Qualified Public Accountant (IQPA) Audit Opinion.
 * 3. Prunes ERISA filing line instruction checkboxes, custodial trust agreement legal boilerplates, and PBGC premium calculation worksheets.
 *
 * Result: Slashes 75%–90% of ERISA 5500 retirement audit prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface Erisa5500CompactionResult {
    wasCompacted: boolean;
    planSponsorAndPlanNumber: string;
    planTypeAndParticipantCount: string;
    financialAssetsAndContributions: string;
    iqpaAuditOpinionAndCompliance: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedForm5500Prompt: string;
}
export declare class BroccoliErisa5500Compactor {
    private static instance;
    readonly erisaTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliErisa5500Compactor;
    static compactForm5500(rawText: string): Erisa5500CompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliErisa5500Compactor.d.ts.map