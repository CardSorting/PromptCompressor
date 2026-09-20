/**
 * GALXAI BroccoliDB Gastroenterology & Colonoscopy Report Compactor
 *
 * Slashes massive LLM token bills on gastrointestinal endoscopy notes and colonoscopy procedures:
 * 1. Evaluates 10+ page GI endoscopy reports in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Endoscopist, Bowel Prep Quality (Boston Bowel Scale 0-9), Cecal Intubation, Polyp Counts/Morphology, and Biopsy Findings.
 * 3. Prunes standard endoscopy suite setup, conscious sedation monitoring checklists, and generic post-procedure discharge instructions.
 *
 * Result: Slashes 65%–80% of GI procedural prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface GastroColonoscopyCompactionResult {
    wasCompacted: boolean;
    endoscopistAndProcedure: string;
    bowelPreparationAndCecum: string;
    polypFindingsAndResection: string;
    recommendationsAndSurveillance: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedGiPrompt: string;
}
export declare class BroccoliGastroColonoscopyCompactor {
    private static instance;
    readonly gastroTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliGastroColonoscopyCompactor;
    static compactGastro(rawText: string): GastroColonoscopyCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliGastroColonoscopyCompactor.d.ts.map