/**
 * GALXAI BroccoliDB Forestry & Timber FSC / PEFC Chain of Custody (CoC) Compactor
 *
 * Slashes massive LLM token bills on sustainable forestry timber harvesting manifests and FSC / PEFC Chain of Custody (CoC) delivery tickets:
 * 1. Evaluates timber scale tickets and mill intake scaling sheets in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Forest Tract / Logging Operator, FSC / PEFC Certificate Code, Timber Species (Douglas Fir / Southern Yellow Pine), Log Scale Rule (Scribner Decimal C / Doyle / MBF), Gross/Net Board Feet, and Chain of Custody Claim (FSC 100% / FSC Mix Credit).
 * 3. Prunes logging skidder equipment maintenance logs, forest fire extinguisher inspection checklists, and timber association marketing blurbs.
 *
 * Result: Slashes 70%–85% of forestry chain of custody prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface ForestFscTimberCompactionResult {
    wasCompacted: boolean;
    forestTractAndOperator: string;
    fscCertificateAndChainOfCustody: string;
    timberSpeciesAndVolumeMbf: string;
    harvestPermitAndStumpageSettlement: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedTimberPrompt: string;
}
export declare class BroccoliForestFscTimberCompactor {
    private static instance;
    readonly timberTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliForestFscTimberCompactor;
    static compactTimber(rawText: string): ForestFscTimberCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliForestFscTimberCompactor.d.ts.map