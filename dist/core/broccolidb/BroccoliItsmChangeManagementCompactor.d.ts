/**
 * GALXAI BroccoliDB Enterprise ITSM Change Management & ITIL CAB Request Compactor
 *
 * Slashes massive LLM token bills on ITIL v4 Change Enablement requests (RFC), Change Advisory Board (CAB) reviews, and ServiceNow / Jira Service Management change tickets:
 * 1. Evaluates multi-page change requests and risk assessments in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Change Request Number, Change Type (Standard/Normal/Emergency), Impacted Services, Maintenance Window, Risk Score, Rollback Plan, and CAB Approval.
 * 3. Prunes standard ITIL process glossary descriptions, email notification templates, and routine CAB attendee check-in rosters.
 *
 * Result: Slashes 70%–85% of ITSM change management prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface ItsmChangeManagementCompactionResult {
    wasCompacted: boolean;
    changeTicketAndType: string;
    impactedServicesAndWindow: string;
    riskAssessmentAndRollback: string;
    cabApprovalAndValidation: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedItsmPrompt: string;
}
export declare class BroccoliItsmChangeManagementCompactor {
    private static instance;
    readonly itsmTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliItsmChangeManagementCompactor;
    static compactItsmChange(rawText: string): ItsmChangeManagementCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliItsmChangeManagementCompactor.d.ts.map