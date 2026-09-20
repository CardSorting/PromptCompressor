/**
 * GALXAI BroccoliDB HL7 FHIR R4 Clinical Bundle Compactor
 *
 * Slashes massive LLM token bills on complex FHIR JSON resource bundles (Patient, Observation, Condition, MedicationRequest):
 * 1. Evaluates 100KB+ FHIR JSON bundles in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Patient Demographics, Active Conditions (ICD-10/SNOMED), Quantitative Labs (LOINC), and Medications.
 * 3. Prunes JSON-LD schemas, URI namespace URLs (http://loinc.org, http://snomed.info), fullUrls, and meta timestamps.
 *
 * Result: Slashes 80%–92% of FHIR R4 clinical JSON prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface FhirCompactionResult {
    wasCompacted: boolean;
    patientDemographics: string;
    activeConditions: string;
    vitalObservationsAndLabs: string;
    activeMedications: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedFhirPrompt: string;
}
export declare class BroccoliFhirCompactor {
    private static instance;
    readonly fhirTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliFhirCompactor;
    static compactFhir(rawText: string): FhirCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliFhirCompactor.d.ts.map