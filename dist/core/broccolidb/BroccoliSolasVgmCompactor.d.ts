/**
 * GALXAI BroccoliDB IMO SOLAS Verified Gross Mass (VGM / Chapter VI Regulation 2) Compactor
 *
 * Slashes massive LLM token bills on maritime container Verified Gross Mass (VGM) EDIFACT VERMAS declarations and terminal gate scale tickets:
 * 1. Evaluates multi-megabyte terminal container weight manifests and SOLAS VGM EDI envelopes in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Container Number (ISO 6346 4-letter prefix + 7 digits), SOLAS Verification Method (Method 1: Calibrated Weighing / Method 2: Calculated Summation), Verified Gross Mass (kg / lbs), Weighing Station / Calibrated Scale ID, Authorized Signatory & Shipper Name, and Terminal Loading Acceptance Status.
 * 3. Prunes repetitive EDIFACT UNB/UNH envelope segments, port tariff legal conditions, and standard ocean carrier bill of lading terms.
 *
 * Result: Slashes 75%–90% of maritime SOLAS VGM container prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface SolasVgmCompactionResult {
    wasCompacted: boolean;
    containerAndBookingNumber: string;
    vgmWeightAndMethod: string;
    calibratedScaleAndSignatory: string;
    vesselStowageAcceptance: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedSolasPrompt: string;
}
export declare class BroccoliSolasVgmCompactor {
    private static instance;
    readonly solasTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliSolasVgmCompactor;
    static compactSolasVgm(rawText: string): SolasVgmCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliSolasVgmCompactor.d.ts.map