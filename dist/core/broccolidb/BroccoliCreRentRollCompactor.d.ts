/**
 * GALXAI BroccoliDB Commercial Real Estate (CRE) Rent Roll & Stacking Plan Compactor
 *
 * Slashes massive LLM token bills on multifamily, industrial, and retail commercial property rent rolls (Yardi, RealPage, MRI Software):
 * 1. Evaluates 500+ unit property rent rolls in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Property Name/Units, Physical & Economic Occupancy %, Total Gross In-Place Rent $, Weighted Average Lease Term (WALT), and Tenant Aging (>60 Days).
 * 3. Prunes micro-tenant resident pet deposit codes, garage parking spot numbers, and individual utility sub-metering line items.
 *
 * Result: Slashes 80%–95% of CRE rent roll prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface CreRentRollCompactionResult {
    wasCompacted: boolean;
    propertyAndUnitCount: string;
    occupancyAndGrossScheduledRent: string;
    leaseRolloverAndWalt: string;
    tenantArAgingAndCollections: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedRentRollPrompt: string;
}
export declare class BroccoliCreRentRollCompactor {
    private static instance;
    readonly rentRollTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliCreRentRollCompactor;
    static compactRentRoll(rawText: string): CreRentRollCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliCreRentRollCompactor.d.ts.map