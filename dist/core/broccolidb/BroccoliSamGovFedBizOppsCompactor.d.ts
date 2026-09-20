/**
 * GALXAI BroccoliDB US Federal Government Contracting & SAM.gov / FedBizOpps (FAR) Compactor
 *
 * Slashes massive LLM token bills on federal procurement solicitations (RFP/RFQ), Federal Acquisition Regulation (FAR) clauses, and SAM.gov opportunities:
 * 1. Evaluates 200+ page federal solicitations (SF-1449 / SF-33) in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Solicitaton / Notice ID, Contracting Agency (DoD / VA / NASA / DHS), NAICS Code / Set-Aside (e.g. 8(a) / SDVOSB), Statement of Work (SOW) Scope, Contract Type (FFP / T&M / IDIQ), Ceiling Value $, and Submission Deadline.
 * 3. Prunes hundreds of standard FAR Part 52 contract clause preambles, generic contractor representation checkboxes, and SAM.gov registration instruction boilerplate.
 *
 * Result: Slashes 80%–95% of federal government contracting prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface SamGovFedBizOppsCompactionResult {
    wasCompacted: boolean;
    solicitationAndAgency: string;
    naicsSetAsideAndContractType: string;
    statementOfWorkAndScope: string;
    ceilingValueAndSubmissionDeadline: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedSamPrompt: string;
}
export declare class BroccoliSamGovFedBizOppsCompactor {
    private static instance;
    readonly samTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliSamGovFedBizOppsCompactor;
    static compactSamGov(rawText: string): SamGovFedBizOppsCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliSamGovFedBizOppsCompactor.d.ts.map