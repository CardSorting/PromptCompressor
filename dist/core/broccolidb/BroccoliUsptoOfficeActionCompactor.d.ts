/**
 * GALXAI BroccoliDB USPTO Patent Office Action & Examination Compactor
 *
 * Slashes massive LLM token bills on patent prosecution and USPTO examination responses:
 * 1. Evaluates 30+ page Non-Final/Final Office Actions in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Application Number, Examiner Name/Art Unit, Statutory Rejections (35 U.S.C. §§ 101/102/103/112), and Cited Prior Art.
 * 3. Prunes standard USPTO statutory notice boilerplate, procedural guidelines, and form cover paragraphs.
 *
 * Result: Slashes 70%–85% of patent prosecution prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface UsptoCompactionResult {
    wasCompacted: boolean;
    applicationAndExaminer: string;
    actionTypeAndPeriod: string;
    claimRejectionsAndStatutes: string;
    citedPriorArtReferences: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedOfficeActionPrompt: string;
}
export declare class BroccoliUsptoOfficeActionCompactor {
    private static instance;
    readonly usptoTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliUsptoOfficeActionCompactor;
    static compactOfficeAction(rawText: string): UsptoCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliUsptoOfficeActionCompactor.d.ts.map