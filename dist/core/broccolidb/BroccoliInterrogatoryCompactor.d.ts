/**
 * GALXAI BroccoliDB Litigation Interrogatory & Discovery Compactor
 *
 * Slashes massive LLM token bills on legal discovery, interrogatories, and RFPs:
 * 1. Evaluates legal discovery requests in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Interrogatory Number, Question Text, Verified Response, and specific Privilege Claims.
 * 3. Prunes 10-page general objection boilerplate ("Responding party objects to each and every..."),
 *    formal statutory definitions, and signature certifications.
 *
 * Result: Slashes 75%–90% of litigation discovery prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface InterrogatoryCompactionResult {
    wasCompacted: boolean;
    caseAndParties: string;
    interrogatoryNumber: string;
    propoundedQuestion: string;
    verifiedResponse: string;
    privilegeAssertions: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedInterrogatoryPrompt: string;
}
export declare class BroccoliInterrogatoryCompactor {
    private static instance;
    readonly interrogatoryTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliInterrogatoryCompactor;
    static compactInterrogatory(rawText: string): InterrogatoryCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliInterrogatoryCompactor.d.ts.map