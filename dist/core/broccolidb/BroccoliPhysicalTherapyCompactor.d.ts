/**
 * GALXAI BroccoliDB Physical & Occupational Therapy (PT/OT) Compactor
 *
 * Slashes massive LLM token bills on musculoskeletal physical therapy initial evaluations and progress re-assessments:
 * 1. Evaluates 10+ page orthopedic PT/OT rehabilitation charts in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Impairment Diagnosis, Active/Passive Range of Motion (AROM degrees), Manual Muscle Testing (MMT 0-5), Functional Outcome Scales (Oswestry/LEFS/DASH), and Plan of Care.
 * 3. Prunes gym equipment orientation checklists, ice pack application policies, and clinic attendance policy disclaimers.
 *
 * Result: Slashes 70%–85% of physical therapy clinical prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface PhysicalTherapyCompactionResult {
    wasCompacted: boolean;
    orthopedicDiagnosisAndTherapist: string;
    romAndManualMuscleTesting: string;
    functionalOutcomeMeasures: string;
    planOfCareAndSmartGoals: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedPtPrompt: string;
}
export declare class BroccoliPhysicalTherapyCompactor {
    private static instance;
    readonly ptTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliPhysicalTherapyCompactor;
    static compactPhysicalTherapy(rawText: string): PhysicalTherapyCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliPhysicalTherapyCompactor.d.ts.map