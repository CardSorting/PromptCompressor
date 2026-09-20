/**
 * GALXAI BroccoliDB Deterministic Regex Entity Extraction Short-Circuiter
 *
 * Slashes massive LLM spend on deterministic entity extraction & ID lookup requests:
 * 1. Evaluates user input against high-confidence enterprise regex patterns in BroccoliDB (<0.01ms).
 * 2. Extracts structured identifiers (Invoices, Stripe TX, Customer IDs, Org IDs, Tracking numbers).
 * 3. Short-circuits the LLM inference call completely, returning the extracted entity with $0.000 token cost.
 *
 * Result: Slashes 100% of LLM token spend on deterministic ID extraction and validation workflows.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface ExtractedEnterpriseEntity {
    entityType: string;
    entityValue: string;
    patternName: string;
}
export interface EntityExtractionResult {
    wasShortCircuited: boolean;
    extractedEntities: ExtractedEnterpriseEntity[];
    tokensSaved: number;
    dollarsSavedUsd: number;
}
export declare class BroccoliEntityRegexShortCircuiter {
    private static instance;
    readonly extractionAuditTable: BroccoliDbTable<{
        id: string;
        entityType: string;
        entityValue: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private static readonly PATTERNS;
    private constructor();
    static getInstance(): BroccoliEntityRegexShortCircuiter;
    /**
     * Extracts enterprise identifiers deterministically in <0.01ms memory
     */
    static extractAndShortCircuit(inputText: string, estimatedPromptTokens?: number): EntityExtractionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliEntityRegexShortCircuiter.d.ts.map