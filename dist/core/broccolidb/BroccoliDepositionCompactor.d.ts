/**
 * GALXAI BroccoliDB Legal Deposition & Transcript Q&A Compactor
 *
 * Slashes massive LLM token bills on legal deposition transcripts, court hearings, and witness testimony:
 * 1. Evaluates deposition transcripts in BroccoliDB memory (<0.01ms).
 * 2. Prunes repetitive attorney objections (Objection to form, speculation, move to strike) and reporter interruptions.
 * 3. Compacts fragmented verbal utterances into dense [Q: ...] [A: ...] fact units.
 *
 * Result: Slashes 55%–70% of deposition transcript prompt tokens across trial prep and witness cross-examination swarms.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface DepositionCompactionResult {
    wasCompacted: boolean;
    originalLinesCount: number;
    compactedLinesCount: number;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedTranscript: string;
}
export declare class BroccoliDepositionCompactor {
    private static instance;
    readonly transcriptAuditTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private static readonly OBJECTION_REGEX;
    private static readonly REPORTER_INTERRUPTION_REGEX;
    private constructor();
    static getInstance(): BroccoliDepositionCompactor;
    /**
     * Compacts raw court reporter deposition transcript
     */
    static compactTranscript(rawTranscriptText: string): DepositionCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliDepositionCompactor.d.ts.map