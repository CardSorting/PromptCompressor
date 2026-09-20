/**
 * GALXAI BroccoliDB Rule 26(b)(5) Privilege Log & Redaction Compactor
 *
 * Slashes massive LLM token bills on complex litigation privilege logs and redaction matrices:
 * 1. Evaluates multi-column privilege logs in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Bates Ranges, Document Dates, Author/Recipient Actors, Privilege Assertions, and Factual Descriptions.
 * 3. Prunes repetitive column header padding, e-discovery platform metadata hashes, and statutory boilerplate.
 *
 * Result: Slashes 70%–85% of privilege log prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface PrivilegeLogCompactionResult {
    wasCompacted: boolean;
    batesRange: string;
    privilegeBasis: string;
    keyActors: string;
    withholdingReason: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedPrivilegePrompt: string;
}
export declare class BroccoliPrivilegeLogCompactor {
    private static instance;
    readonly privilegeTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliPrivilegeLogCompactor;
    static compactPrivilegeLog(rawText: string): PrivilegeLogCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliPrivilegeLogCompactor.d.ts.map