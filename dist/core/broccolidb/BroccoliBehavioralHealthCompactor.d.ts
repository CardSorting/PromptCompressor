/**
 * GALXAI BroccoliDB Behavioral & Mental Health DAP/BIRP Note Compactor
 *
 * Slashes massive LLM token bills on psychiatric evaluations, therapy progress notes (DAP/SOAP/BIRP), and psychometric scales:
 * 1. Evaluates 10+ page mental health session records in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly DSM-5 Diagnosis, Mental Status Exam (MSE), Psychometric Scores (PHQ-9/GAD-7), Columbia Suicide Severity (C-SSRS), and Treatment Modality.
 * 3. Prunes therapist narrative conversational transcripts, HIPAA compliance signatures, and clinic billing preambles.
 *
 * Result: Slashes 70%–85% of mental health clinical prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface BehavioralHealthCompactionResult {
    wasCompacted: boolean;
    dsm5DiagnosisAndTherapy: string;
    mentalStatusExam: string;
    psychometricScoresAndRisk: string;
    interventionsAndPlan: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedMentalHealthPrompt: string;
}
export declare class BroccoliBehavioralHealthCompactor {
    private static instance;
    readonly mentalHealthTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliBehavioralHealthCompactor;
    static compactMentalHealth(rawText: string): BehavioralHealthCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliBehavioralHealthCompactor.d.ts.map