/**
 * GALXAI BroccoliDB HL7 v2 & FHIR Clinical Message Compactor
 *
 * Slashes massive LLM token bills on healthcare integrations, hospital triage bots, and EHR swarms:
 * 1. Evaluates pipe-delimited HL7 v2 (ADT/ORU/ORM) messages in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Event Type/Patient ID, Attending/Location, Diagnosis/Vitals, and Insurance Status.
 * 3. Prunes MSH headers, national provider IDs, timestamps, processing control IDs, and null segments.
 *
 * Result: Slashes 75%–90% of HL7/FHIR healthcare integration prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface Hl7CompactionResult {
    wasCompacted: boolean;
    eventTypeAndPatient: string;
    locationAndPhysician: string;
    admittingDiagnosisOrObservation: string;
    insurancePayer: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedHl7Prompt: string;
}
export declare class BroccoliHl7Compactor {
    private static instance;
    readonly hl7AuditTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliHl7Compactor;
    /**
     * Compacts raw pipe-delimited HL7 v2 message stream
     */
    static compactHl7(rawHl7Text: string): Hl7CompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliHl7Compactor.d.ts.map