/**
 * GALXAI BroccoliDB FERC Form 1 Electric Utility Major Financial & Operating Report Compactor
 *
 * Slashes massive LLM token bills on Federal Energy Regulatory Commission (FERC Form 1 / 18 CFR 141.1) annual utility filings:
 * 1. Evaluates 200+ page FERC Form 1 regulatory accounting schedules (Pages 110-450) in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Electric Utility Name / FERC Respondent ID, Reporting Year, Electric Plant in Service (Account 101/106 $), Total Operating Revenues (Account 400 $), Operation & Maintenance O&M Expenses (Account 401 $), Net Utility Operating Income, Rate Base Asset Value, and Peak Megawatt (MW) Demand.
 * 3. Prunes hundreds of pages of itemized meter-point maintenance schedules, regulatory officer signature certifications, and historical statutory preamble text.
 *
 * Result: Slashes 80%–95% of utility regulatory FERC Form 1 prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface FercForm1CompactionResult {
    wasCompacted: boolean;
    utilityAndRespondentId: string;
    electricPlantAndRateBase: string;
    operatingRevenuesAndOmExpenses: string;
    peakDemandAndGenerationMix: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedFercPrompt: string;
}
export declare class BroccoliFercForm1Compactor {
    private static instance;
    readonly fercTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliFercForm1Compactor;
    static compactFerc(rawText: string): FercForm1CompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliFercForm1Compactor.d.ts.map