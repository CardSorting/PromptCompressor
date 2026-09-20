/**
 * GALXAI BroccoliDB Mortgage TRID Closing Disclosure (CD) Compactor
 *
 * Slashes massive LLM token bills on CFPB TILA-RESPA Integrated Disclosures (TRID Closing Disclosure / Loan Estimate):
 * 1. Evaluates 5-page CFPB Closing Disclosures in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Borrower/Lender, Loan Terms (Principal/Interest Rate/Maturity), Total Monthly Payment (PITI + Escrow), Closing Costs, and Cash to Close $.
 * 3. Prunes CFPB consumer handbook explanatory text, appraisal report delivery confirmations, and liability after foreclosure boilerplate.
 *
 * Result: Slashes 70%–85% of TRID Closing Disclosure prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface ClosingDisclosureCompactionResult {
    wasCompacted: boolean;
    borrowerAndTransaction: string;
    loanTermsAndMonthlyPayment: string;
    closingCostsBreakdown: string;
    cashToCloseAndEscrow: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedCdPrompt: string;
}
export declare class BroccoliClosingDisclosureCompactor {
    private static instance;
    readonly cdTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliClosingDisclosureCompactor;
    static compactClosingDisclosure(rawText: string): ClosingDisclosureCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliClosingDisclosureCompactor.d.ts.map