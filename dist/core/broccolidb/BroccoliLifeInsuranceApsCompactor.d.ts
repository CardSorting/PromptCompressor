/**
 * GALXAI BroccoliDB Life Insurance Attending Physician Statement (APS) Underwriting Compactor
 *
 * Slashes massive LLM token bills on life insurance underwriting APS packages, MIB codes, and prescription drug history summaries:
 * 1. Evaluates 200+ page medical records and Milliman IntelliScript Rx reports in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Proposed Insured, Face Amount $, Significant Medical Impairments (CAD/Diabetes/Cancer), MIB Codes, Rx History, and Table Rating / Flat Extra.
 * 3. Prunes routine annual checkup normal notes, redundant hospital administrative intake facesheets, and HIPAA release forms.
 *
 * Result: Slashes 80%–95% of life insurance underwriting prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface LifeInsuranceApsCompactionResult {
    wasCompacted: boolean;
    insuredAndCoverageAmount: string;
    majorMedicalImpairments: string;
    mibAndPrescriptionHistory: string;
    underwritingRateClassAndTable: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedApsPrompt: string;
}
export declare class BroccoliLifeInsuranceApsCompactor {
    private static instance;
    readonly apsTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliLifeInsuranceApsCompactor;
    static compactAps(rawText: string): LifeInsuranceApsCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliLifeInsuranceApsCompactor.d.ts.map