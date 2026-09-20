/**
 * GALXAI BroccoliDB Veterinary Medicine SOAP Clinical Compactor
 *
 * Slashes massive LLM token bills on companion animal and equine veterinary records:
 * 1. Evaluates multi-page veterinary SOAP notes and biochemical profiles in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Patient Signalment (Species/Breed/Age/Weight), SOAP Findings, Diagnostic Blood Chemistry, Differential Diagnoses, and Treatment Rx.
 * 3. Prunes pet owner vaccination reminder postcards, pet insurance claim form brochures, and flea/tick marketing copy.
 *
 * Result: Slashes 70%–85% of veterinary clinical prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface VeterinaryCompactionResult {
    wasCompacted: boolean;
    patientSignalment: string;
    soapClinicalFindings: string;
    diagnosticChemistryAndImaging: string;
    treatmentPlanAndPrescription: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedVetPrompt: string;
}
export declare class BroccoliVeterinaryCompactor {
    private static instance;
    readonly vetTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliVeterinaryCompactor;
    static compactVeterinary(rawText: string): VeterinaryCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliVeterinaryCompactor.d.ts.map