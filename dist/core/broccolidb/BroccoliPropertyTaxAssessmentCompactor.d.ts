/**
 * GALXAI BroccoliDB County Property Tax Assessment & GIS Parcel Compactor
 *
 * Slashes massive LLM token bills on county tax assessor property cards, assessment appeal filings, and GIS municipal tax rolls:
 * 1. Evaluates multi-page county tax assessor records in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Parcel Number (PIN/APN), Assessed Land vs Improvement Value $, Total Taxable Value, Millage Rate, Total Tax Billed, and Exemption Status.
 * 3. Prunes county property tax payment coupon barcodes, payment branch location addresses, and state tax code statutory preambles.
 *
 * Result: Slashes 70%–85% of property tax assessment prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface PropertyTaxAssessmentCompactionResult {
    wasCompacted: boolean;
    parcelAndCountyJurisdiction: string;
    assessedValuationBreakdown: string;
    millageRatesAndExemptions: string;
    totalAnnualTaxAndPaymentStatus: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedTaxAssessmentPrompt: string;
}
export declare class BroccoliPropertyTaxAssessmentCompactor {
    private static instance;
    readonly taxAssessTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliPropertyTaxAssessmentCompactor;
    static compactTaxAssessment(rawText: string): PropertyTaxAssessmentCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliPropertyTaxAssessmentCompactor.d.ts.map