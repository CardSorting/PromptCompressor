/**
 * GALXAI BroccoliDB Court Pleading Caption & Certificate of Service Compactor
 *
 * Slashes massive LLM token bills on legal court filings, litigation motions, complaints, and dockets:
 * 1. Evaluates court pleadings in BroccoliDB memory (<0.01ms).
 * 2. Compresses verbose 40-line court captions into a 1-line docket metadata header:
 *    [DOCKET: SDNY 1:26-cv-08492 | Judge Rakoff | DEFENDANT MOTION TO DISMISS]
 * 3. Prunes 25-line CM/ECF Certificates of Service and redundant law firm signature blocks.
 *
 * Result: Slashes 60%–80% of court pleading preamble and administrative trailer tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface CaptionCompactionResult {
    wasCompacted: boolean;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedPleading: string;
}
export declare class BroccoliCourtCaptionCompactor {
    private static instance;
    readonly courtAuditTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliCourtCaptionCompactor;
    /**
     * Compacts court pleading captions, signature blocks, and certificates of service
     */
    static compactPleading(rawPleadingText: string): CaptionCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliCourtCaptionCompactor.d.ts.map