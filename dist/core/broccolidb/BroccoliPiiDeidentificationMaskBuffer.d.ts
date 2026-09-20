/**
 * GALXAI BroccoliDB PII/PHI Entity DeIdentification & Token Normalization Buffer
 *
 * Slashes duplicate tokens and enforces HIPAA/GDPR privacy compliance on clinical & financial records:
 * 1. Detects sensitive entity occurrences (Patient Names, SSNs, Credit Card PANs, Email Addresses, MRNs).
 * 2. Maps identical entity mentions across multi-page documents to deterministic short surrogate tokens (`[SURROGATE:NAME_1]`, `[SURROGATE:SSN_1]`).
 * 3. Returns a request-scoped surrogate map for explicit client-side re-identification.
 *
 * This utility reduces direct identifier exposure; it is not, by itself, a HIPAA/GDPR compliance guarantee.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface PiiMaskResult {
    wasMasked: boolean;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    distinctEntitiesMasked: number;
    totalPiiOccurrencesReplaced: number;
    maskedText: string;
    surrogateMap: Record<string, string>;
}
export declare class BroccoliPiiDeidentificationMaskBuffer {
    private static instance;
    readonly piiAuditTable: BroccoliDbTable<{
        id: string;
        entitiesMasked: number;
        tokensSaved: number;
        savingsPercentage: number;
        timestampMs: number;
    }>;
    private static readonly SSN_REGEX;
    private static readonly EMAIL_REGEX;
    private static readonly CREDIT_CARD_REGEX;
    private static readonly PHONE_REGEX;
    private constructor();
    static getInstance(): BroccoliPiiDeidentificationMaskBuffer;
    /**
     * Masks and deduplicates PII/PHI entity strings into deterministic surrogate keys
     */
    static maskAndDeduplicate(text: string): PiiMaskResult;
    /**
     * Rehydrates surrogate tokens back to original entities on client return
     */
    static rehydrate(maskedText: string, surrogateMap: Readonly<Record<string, string>>): string;
    clear(): void;
}
//# sourceMappingURL=BroccoliPiiDeidentificationMaskBuffer.d.ts.map