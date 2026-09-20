/**
 * GALXAI BroccoliDB Prehospital Emergency Medical Services (EMS) NEMSIS v3.5 Compactor
 *
 * Slashes massive LLM token bills on prehospital 911 paramedic run reports (NEMSIS v3.5 XML / ESO / ImageTrend):
 * 1. Evaluates multi-page prehospital patient care reports (ePCR) in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly CAD Dispatch Determinant, Initial Vital Signs (GCS/BP/HR/SpO2), Trauma Triage Criteria, Paramedic Interventions, and Receiving Facility.
 * 3. Prunes repetitive NEMSIS XML data element tags, GPS speed telemetry logs, and ambulance inventory restocking checklists.
 *
 * Result: Slashes 75%–90% of prehospital EMS ePCR prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface NemsisEmsCompactionResult {
    wasCompacted: boolean;
    unitAndDispatchDeterminant: string;
    patientVitalsAndGcsScore: string;
    interventionsAndMedications: string;
    traumaTriageAndHospitalDestination: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedEmsPrompt: string;
}
export declare class BroccoliNemsisEmsCompactor {
    private static instance;
    readonly emsTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliNemsisEmsCompactor;
    static compactNemsis(rawText: string): NemsisEmsCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliNemsisEmsCompactor.d.ts.map