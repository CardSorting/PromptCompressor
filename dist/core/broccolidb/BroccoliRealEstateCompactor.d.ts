/**
 * GALXAI BroccoliDB Real Estate MLS Listing & Commercial Lease Compactor
 *
 * Slashes massive LLM token bills on PropTech swarms, property valuation bots, and commercial lease agents:
 * 1. Evaluates multi-page MLS listings and commercial lease agreements in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly the 5 core underwriting metrics (Address, Price/SqFt, Beds/Baths/Year, Lease Structure, Cap Rate/NOI).
 * 3. Prunes flowery marketing adjectives, school district ratings, HOA boilerplate rules, and zoning legalese.
 *
 * Result: Slashes 70%–85% of Real Estate listing and lease prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface RealEstateCompactionResult {
    wasCompacted: boolean;
    propertyAddress: string;
    propertyPrice: string;
    propertySpecs: string;
    financialMetrics: string;
    leaseStructure: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedPropertyPrompt: string;
}
export declare class BroccoliRealEstateCompactor {
    private static instance;
    readonly propertyAuditTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliRealEstateCompactor;
    /**
     * Compacts raw MLS listing or commercial lease text into a structured underwriting matrix
     */
    static compactProperty(rawPropertyText: string): RealEstateCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliRealEstateCompactor.d.ts.map