/**
 * GALXAI BroccoliDB M&A Due Diligence & Disclosure Schedules Compactor
 *
 * Slashes massive LLM token bills on M&A definitive acquisition agreements (SPA/APA) and disclosure schedules:
 * 1. Evaluates 100+ page disclosure schedules in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Target Entity, Section/Schedule Number, Listed Exceptions/Liabilities, and Material Thresholds.
 * 3. Prunes repetitive agreement cross-reference boilerplate, defined term recitals, and standard statutory savings clauses.
 *
 * Result: Slashes 70%–85% of M&A due diligence prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface MnaDisclosureCompactionResult {
    wasCompacted: boolean;
    dealAndParties: string;
    scheduleSection: string;
    disclosedExceptions: string;
    financialMateriality: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedMnaPrompt: string;
}
export declare class BroccoliMnaDisclosureCompactor {
    private static instance;
    readonly mnaTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliMnaDisclosureCompactor;
    static compactMnaDisclosure(rawText: string): MnaDisclosureCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliMnaDisclosureCompactor.d.ts.map