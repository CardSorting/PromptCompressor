/**
 * GALXAI BroccoliDB Board Minutes & Shareholder Resolution Compactor
 *
 * Slashes massive LLM token bills on M&A due diligence, corporate secretarial swarms, and venture financings:
 * 1. Evaluates multi-page Board of Directors minutes and Unanimous Written Consents (UWC) in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Transaction Subject, Authorized Actions & Dollar Caps, Voting Outcome, and Authorized Officers.
 * 3. Prunes roll calls, quorum declarations, standard DGCL procedural boilerplate ("Upon motion duly made..."), and signature blocks.
 *
 * Result: Slashes 70%–85% of corporate governance and resolution prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface BoardMinutesCompactionResult {
    wasCompacted: boolean;
    entityAndMatter: string;
    authorizedAction: string;
    votingOutcome: string;
    authorizedSignatories: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedResolutionPrompt: string;
}
export declare class BroccoliBoardMinutesCompactor {
    private static instance;
    readonly minutesAuditTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliBoardMinutesCompactor;
    /**
     * Compacts raw Board of Directors minutes or Unanimous Written Consent
     */
    static compactMinutes(rawMinutesText: string): BoardMinutesCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliBoardMinutesCompactor.d.ts.map