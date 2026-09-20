/**
 * GALXAI BroccoliDB Pharmacy & PBM NCPDP SCRIPT e-Prescription Compactor
 *
 * Slashes massive LLM token bills on pharmacy adjudication records, NCPDP SCRIPT XML messages, and PBM claim responses:
 * 1. Evaluates complex NCPDP SCRIPT e-Rx XML transactions in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Prescriber NPI, Patient Name, Dispensed Drug (NDC 11-digit), Sig Dosing Instructions, Refills Allowed, and PBM Copay/Deductible.
 * 3. Prunes repetitive XML tag structures, telecommunication segment delimiters, and PBM network legal disclaimers.
 *
 * Result: Slashes 75%–90% of pharmacy e-Rx prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface NcpdpPrescriptionCompactionResult {
    wasCompacted: boolean;
    prescriberAndPatient: string;
    drugAndNdcPackage: string;
    sigDosingAndQuantity: string;
    pbmAdjudicationAndCopay: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedNcpdpPrompt: string;
}
export declare class BroccoliNcpdpPrescriptionCompactor {
    private static instance;
    readonly ncpdpTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliNcpdpPrescriptionCompactor;
    static compactNcpdp(rawText: string): NcpdpPrescriptionCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliNcpdpPrescriptionCompactor.d.ts.map