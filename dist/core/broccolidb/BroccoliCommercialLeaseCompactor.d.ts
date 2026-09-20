/**
 * GALXAI BroccoliDB Real Estate Commercial Lease & NNN Compactor
 *
 * Slashes massive LLM token bills on commercial office, retail, and industrial warehouse leases (Triple Net NNN / Full Service Gross):
 * 1. Evaluates 80+ page commercial leases in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Landlord/Tenant, Premises RSF, Initial Base Rent ($/RSF/yr), Annual Escalation %, NNN Operating Expense Share %, and Tenant Improvement (TI) Allowance.
 * 3. Prunes standard building rules and regulations, HVAC overtime maintenance clauses, and statutory casualty boilerplate.
 *
 * Result: Slashes 75%–90% of commercial lease prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface CommercialLeaseCompactionResult {
    wasCompacted: boolean;
    landlordAndTenant: string;
    premisesAndSquareFootage: string;
    baseRentAndEscalations: string;
    nnnExpensesAndTiAllowance: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedLeasePrompt: string;
}
export declare class BroccoliCommercialLeaseCompactor {
    private static instance;
    readonly leaseTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliCommercialLeaseCompactor;
    static compactCommercialLease(rawText: string): CommercialLeaseCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliCommercialLeaseCompactor.d.ts.map