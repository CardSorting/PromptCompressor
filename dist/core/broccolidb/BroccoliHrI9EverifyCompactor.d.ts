/**
 * GALXAI BroccoliDB Human Resources Form I-9 & USCIS E-Verify Employment Eligibility Compactor
 *
 * Slashes massive LLM token bills on high-volume HR employee onboarding verification packets and DHS E-Verify case logs:
 * 1. Evaluates Form I-9 Employment Eligibility Verification forms in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Employee Legal Name / DOB, Citizenship / Immigration Status (US Citizen / Permanent Resident / Noncitizen Authorized to Work), List A / List B+C Verification Documents (Passport/DL/SSN), E-Verify Case Verification Number, and Final Case Result (Employment Authorized / Tentative Nonconfirmation TNC).
 * 3. Prunes Form I-9 paper instructional paragraphs, Privacy Act disclosures, and HR representative digital signature certificate metadata.
 *
 * Result: Slashes 70%–85% of HR compliance I-9 prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface HrI9EverifyCompactionResult {
    wasCompacted: boolean;
    employeeAndImmigrationStatus: string;
    identityAndWorkEligibilityDocuments: string;
    everifyCaseNumberAndResult: string;
    hrVerificationAndRehireStatus: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedI9Prompt: string;
}
export declare class BroccoliHrI9EverifyCompactor {
    private static instance;
    readonly i9Table: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliHrI9EverifyCompactor;
    static compactI9(rawText: string): HrI9EverifyCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliHrI9EverifyCompactor.d.ts.map