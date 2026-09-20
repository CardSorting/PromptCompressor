/**
 * GALXAI BroccoliDB Clinical Dental Charting & CDT Periodontal Exam Compactor
 *
 * Slashes massive LLM token bills on full-mouth dental charting, periodontal probing depth charts (Dentrix, Eaglesoft), and ADA claim forms:
 * 1. Evaluates 192-point periodontal probing matrices (6 sites per tooth, 32 teeth) in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Tooth Number (1-32), CDT Procedure Codes (e.g. D4341 SRP, D2740 Crown, D3330 Molar Endo), Pathologic Probe Depths (>=5mm with Bleeding on Probing BOP), and Caries.
 * 3. Prunes normal 1-3mm probing depth grids, dental office payment financing brochures, and post-op mouthwash instructions.
 *
 * Result: Slashes 70%–85% of dental EHR prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface DentalChartCompactionResult {
    wasCompacted: boolean;
    patientAndDentist: string;
    periodontalProbingAndBop: string;
    restorativeAndEndodonticFindings: string;
    cdtTreatmentPlanAndCost: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedDentalPrompt: string;
}
export declare class BroccoliDentalChartCompactor {
    private static instance;
    readonly dentalTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliDentalChartCompactor;
    static compactDental(rawText: string): DentalChartCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliDentalChartCompactor.d.ts.map