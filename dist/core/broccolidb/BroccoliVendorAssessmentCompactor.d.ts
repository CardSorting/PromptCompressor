/**
 * GALXAI BroccoliDB Third-Party Vendor Risk Assessment (GRC / SIG Lite) Compactor
 *
 * Slashes massive LLM token bills on third-party vendor risk assessments (SIG Lite, CSA CAIQ, ISO 27001 GRC Questionnaires):
 * 1. Evaluates 200+ question security questionnaires in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Vendor Name/Tier, GRC Framework (SIG Lite/CAIQ), High-Risk Gaps (MFA, Encryption at Rest, Sub-processors), Compliance Certifications (SOC2 Type II, ISO 27001), and Overall Inherent/Residual Risk Score.
 * 3. Prunes repetitive standard "Yes/No" radio questions, generic corporate marketing descriptions, and legal questionnaire preambles.
 *
 * Result: Slashes 75%–90% of vendor security review prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface VendorAssessmentCompactionResult {
    wasCompacted: boolean;
    vendorAndTier: string;
    frameworkAndCertifications: string;
    highRiskGapsAndFindings: string;
    riskRatingAndApproval: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedVendorPrompt: string;
}
export declare class BroccoliVendorAssessmentCompactor {
    private static instance;
    readonly vendorTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliVendorAssessmentCompactor;
    static compactVendorAssessment(rawText: string): VendorAssessmentCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliVendorAssessmentCompactor.d.ts.map