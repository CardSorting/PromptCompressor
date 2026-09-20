/**
 * GALXAI BroccoliDB Corporate ESG Carbon Accounting & GHG Protocol Compactor
 *
 * Slashes massive LLM token bills on corporate Greenhouse Gas (GHG Protocol Scope 1, Scope 2, Scope 3) carbon accounting audit packages:
 * 1. Evaluates multi-facility enterprise emissions ledgers in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Reporting Entity / Fiscal Year, Scope 1 Direct Emissions (tCO2e), Scope 2 Market/Location-Based Indirect Emissions (tCO2e), Scope 3 Value Chain Categories (tCO2e), Total Carbon Footprint, and Carbon Intensity Metric.
 * 3. Prunes utility meter reading line item invoices, corporate social responsibility PR blurbs, and standard EPA emission factor table lists.
 *
 * Result: Slashes 75%–90% of ESG carbon accounting prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface EsgCarbonAccountingCompactionResult {
    wasCompacted: boolean;
    reportingEntityAndFiscalYear: string;
    scope1DirectEmissionsBreakdown: string;
    scope2MarketLocationEmissions: string;
    scope3ValueChainAndIntensity: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedEsgPrompt: string;
}
export declare class BroccoliEsgCarbonAccountingCompactor {
    private static instance;
    readonly esgTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliEsgCarbonAccountingCompactor;
    static compactEsg(rawText: string): EsgCarbonAccountingCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliEsgCarbonAccountingCompactor.d.ts.map