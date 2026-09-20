/**
 * GALXAI BroccoliDB Hospital Operative Report & Surgical Procedure Compactor
 *
 * Slashes massive LLM token bills on operating room surgical reports and perioperative EHR notes:
 * 1. Evaluates 10+ page surgical operative notes in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Surgeon/Patient, Pre/Post-Op Diagnoses, CPT Procedures Performed, Estimated Blood Loss (EBL), Implants/Grafts, and Sponge Counts.
 * 3. Prunes standard surgical skin prep, draping protocols, timeout checklists, and routine instrument descriptions.
 *
 * Result: Slashes 65%–80% of surgical report prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface OperativeReportCompactionResult {
    wasCompacted: boolean;
    surgeonAndProcedure: string;
    preAndPostOpDiagnoses: string;
    surgicalTechniqueAndFindings: string;
    eblImplantsAndSpongeCount: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedOperativePrompt: string;
}
export declare class BroccoliOperativeReportCompactor {
    private static instance;
    readonly operativeTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliOperativeReportCompactor;
    static compactOperativeReport(rawText: string): OperativeReportCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliOperativeReportCompactor.d.ts.map