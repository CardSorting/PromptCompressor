/**
 * GALXAI BroccoliDB AS9100D / ISO 9001 Aerospace Quality Management System Audit Compactor
 *
 * Slashes massive LLM token bills on AS9100D aerospace quality audits, OASIS database non-conformance reports (NCR), and First Article Inspections (FAI / AS9102):
 * 1. Evaluates 100+ page aerospace quality management surveillance audits in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Audited Aerospace Organization / OASIS OIN, Registrar / CB (e.g. DNV / BSI / PRI), Audit Scope (Design, Manufacturing, Assembly of Flight Hardware), Major / Minor Non-Conformities (CAR / NCR), Risk-Based Thinking (Clause 6.1), and AS9100D Certification Status.
 * 3. Prunes repetitive AS9100 clause narrative headers, auditor flight itinerary logs, and company general quality manual boilerplate.
 *
 * Result: Slashes 75%–90% of AS9100 aerospace quality audit prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface As9100AerospaceCompactionResult {
    wasCompacted: boolean;
    auditedOrganizationAndOasisId: string;
    auditScopeAndRegistrar: string;
    nonConformancesAndCorrectiveActions: string;
    certificationRecommendationAndValidity: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedAs9100Prompt: string;
}
export declare class BroccoliAs9100AerospaceCompactor {
    private static instance;
    readonly asTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliAs9100AerospaceCompactor;
    static compactAs9100(rawText: string): As9100AerospaceCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliAs9100AerospaceCompactor.d.ts.map