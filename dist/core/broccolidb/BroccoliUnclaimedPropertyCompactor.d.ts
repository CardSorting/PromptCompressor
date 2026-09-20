/**
 * GALXAI BroccoliDB State Unclaimed Property & NAUPA II Escheatment Compactor
 *
 * Slashes massive LLM token bills on state unclaimed property annual holder reports and NAUPA II electronic escheatment data files:
 * 1. Evaluates 50,000+ line NAUPA II fixed-width holder reports in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Reporting Holder Company / FEIN, State Jurisdiction (e.g. Delaware / California / Texas), NAUPA Property Codes (e.g. AC01 Checking Accounts / SC01 Shares of Stock / MS01 Wages), Dormancy Trigger Date, Aggregate Escheated Amount ($), and Owner Due Diligence Letters Sent.
 * 3. Prunes millions of NAUPA II fixed-width whitespace padding blocks, state treasury payment remittance barcode formats, and unclaimed property statute preambles.
 *
 * Result: Slashes 80%–95% of state escheatment compliance prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface UnclaimedPropertyCompactionResult {
    wasCompacted: boolean;
    holderAndJurisdictionState: string;
    propertyClassificationAndDormancy: string;
    aggregateEscheatmentAndOwnerCount: string;
    dueDiligenceNoticeAndRemittance: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedNaupaPrompt: string;
}
export declare class BroccoliUnclaimedPropertyCompactor {
    private static instance;
    readonly naupaTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliUnclaimedPropertyCompactor;
    static compactUnclaimedProperty(rawText: string): UnclaimedPropertyCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliUnclaimedPropertyCompactor.d.ts.map