/**
 * GALXAI BroccoliDB Venture Capital Investment Memo & Deal Due Diligence Compactor
 *
 * Slashes massive LLM token bills on venture capital partner investment memos, cap tables, and SaaS unit economics:
 * 1. Evaluates 40+ page VC deal memos in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Company Name/Founders, Round Size/Valuation, ARR Velocity & Growth %, Net Retention (NRR %), CAC Payback, and Investment Thesis.
 * 3. Prunes generic market size TAM infographics, founder pedigree praise narratives, and standard boilerplate confidentiality disclaimers.
 *
 * Result: Slashes 70%–85% of VC due diligence prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface VcInvestmentMemoCompactionResult {
    wasCompacted: boolean;
    companyAndRoundTerms: string;
    arrAndUnitEconomics: string;
    capTableAndOwnership: string;
    investmentThesisAndRisks: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedMemoPrompt: string;
}
export declare class BroccoliVcInvestmentMemoCompactor {
    private static instance;
    readonly vcTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliVcInvestmentMemoCompactor;
    static compactVcMemo(rawText: string): VcInvestmentMemoCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliVcInvestmentMemoCompactor.d.ts.map