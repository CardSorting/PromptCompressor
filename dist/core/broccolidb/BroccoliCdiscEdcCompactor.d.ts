/**
 * GALXAI BroccoliDB Clinical Trials CDISC ODM & EDC Electronic Case Report Compactor
 *
 * Slashes massive LLM token bills on electronic clinical trial records (EDC / CDISC ODM XML / Medidata Rave / Veeva Vault CDMS):
 * 1. Evaluates 100+ page clinical study visit CRF exports in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Protocol ID, Subject ID/Visit, Study Drug Administration, CTCAE Adverse Events (Grade 1-5), and Primary Efficacy Endpoints.
 * 3. Prunes repetitive CDISC ODM XML tag wrappers, audit trail query histories, and electronic signature timecodes.
 *
 * Result: Slashes 75%–90% of clinical trial EDC prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface CdiscEdcCompactionResult {
    wasCompacted: boolean;
    protocolAndSubject: string;
    studyVisitAndDosing: string;
    adverseEventsAndCtcae: string;
    efficacyEndpointsAndLabs: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedEdcPrompt: string;
}
export declare class BroccoliCdiscEdcCompactor {
    private static instance;
    readonly edcTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliCdiscEdcCompactor;
    static compactEdc(rawText: string): CdiscEdcCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliCdiscEdcCompactor.d.ts.map