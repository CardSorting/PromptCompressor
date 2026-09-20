/**
 * GALXAI BroccoliDB Clinical Medication & Prescription Sig Compactor
 *
 * Slashes massive LLM token bills on patient pharmacy lists and medication reconciliation:
 * 1. Evaluates prescription entries in BroccoliDB memory (<0.01ms).
 * 2. Normalizes verbose English directions into standard clinical pharmacy sig shorthand:
 *    - "Take 1 tablet by mouth twice daily with meals" -> "1 tab PO BID w/ meals"
 *    - "Take 1 tablet by mouth once daily in the morning" -> "1 tab PO QAM"
 *    - "Take 1 tablet by mouth once daily at bedtime" -> "1 tab PO QHS"
 * 3. Prunes redundant administrative noise (Quantity, refills, prescriber NPI, NDC codes).
 *
 * Result: Slashes 65%–80% of medication reconciliation prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface MedicationEntry {
    name: string;
    dosage: string;
    rawSig: string;
    prescriber?: string;
    quantity?: number;
    refills?: number;
}
export interface MedicationCompactionResult {
    wasCompacted: boolean;
    totalMedicationsCount: number;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedMedList: string;
}
export declare class BroccoliMedicationCompactor {
    private static instance;
    readonly medAuditTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private static readonly SIG_PHRASES;
    private constructor();
    static getInstance(): BroccoliMedicationCompactor;
    /**
     * Normalizes a raw prescription sig direction string
     */
    static compactSig(rawSig: string): string;
    /**
     * Compacts a medication list into a dense pharmacy matrix
     */
    static compactMedicationList(medications: MedicationEntry[]): MedicationCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliMedicationCompactor.d.ts.map