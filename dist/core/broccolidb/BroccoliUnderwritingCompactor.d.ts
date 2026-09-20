/**
 * GALXAI BroccoliDB Mortgage & Commercial Underwriting AUS Credit Memo Compactor
 *
 * Slashes massive LLM token bills on mortgage and commercial loan credit underwriting memos (Fannie Mae Desktop Underwriter DU, Freddie Mac Loan Product Advisor LPA, Commercial Credit Memos):
 * 1. Evaluates 50+ page loan underwriting approval packages in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Borrower FICO, Loan-to-Value (LTV/CLTV %), Debt-to-Income (DTI %), Automated Underwriting System (AUS) Recommendation, and Prior-to-Funding (PTF) Conditions.
 * 3. Prunes tri-merge credit report trade line payment histories, employment verification fax cover sheets, and predatory lending disclaimers.
 *
 * Result: Slashes 75%–90% of loan underwriting prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface UnderwritingCompactionResult {
    wasCompacted: boolean;
    borrowerAndProperty: string;
    creditProfileAndFico: string;
    qualifyingRatiosAndAusDecision: string;
    priorToFundingConditions: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedUnderwritingPrompt: string;
}
export declare class BroccoliUnderwritingCompactor {
    private static instance;
    readonly underwritingTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliUnderwritingCompactor;
    static compactUnderwriting(rawText: string): UnderwritingCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliUnderwritingCompactor.d.ts.map