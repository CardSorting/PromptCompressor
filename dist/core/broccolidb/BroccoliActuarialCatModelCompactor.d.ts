/**
 * GALXAI BroccoliDB Actuarial Catastrophe Model (RMS/AIR) & Reinsurance Compactor
 *
 * Slashes massive LLM token bills on property insurance catastrophe risk modeling reports (Moody's RMS RiskLink, Verisk AIR Touchstone, KatRisk):
 * 1. Evaluates 100+ page actuarial catastrophe loss simulation reports in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Portfolio Scope, Perils Modeled (Hurricane/Earthquake/Flood/Wildfire), Average Annual Loss (AAL $), Exceedance Probability (EP) Return Periods (1-in-100 / 1-in-250 PML), and Tail Value at Risk (TVaR).
 * 3. Prunes millions of stochastic event table IDs, vulnerability curve mathematical formulation listings, and geographic geocoding coordinate arrays.
 *
 * Result: Slashes 80%–95% of actuarial cat modeling prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface ActuarialCatModelCompactionResult {
    wasCompacted: boolean;
    portfolioAndPerils: string;
    aalAndLossCostMetrics: string;
    pmlExceedanceProbabilities: string;
    reinsuranceLayerAttachmentAndLimits: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedCatModelPrompt: string;
}
export declare class BroccoliActuarialCatModelCompactor {
    private static instance;
    readonly catModelTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliActuarialCatModelCompactor;
    static compactCatModel(rawText: string): ActuarialCatModelCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliActuarialCatModelCompactor.d.ts.map