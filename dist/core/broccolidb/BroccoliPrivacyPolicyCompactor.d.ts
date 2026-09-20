/**
 * GALXAI BroccoliDB Privacy Policy & Data Processing Agreement (DPA) Compactor
 *
 * Slashes massive LLM token bills on privacy compliance swarms, vendor DPA reviews, and GDPR/CCPA audits:
 * 1. Evaluates multi-page Privacy Policies and DPAs in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Data Controller, Data Categories/Purpose, AI Training Opt-Out/Sharing, and Retention/Sub-processors.
 * 3. Prunes standard cookie banner text, statutory definition re-statements, contact emails, and arbitration clauses.
 *
 * Result: Slashes 75%–90% of privacy policy and DPA review prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface PrivacyPolicyCompactionResult {
    wasCompacted: boolean;
    controllerAndFramework: string;
    dataCategoriesAndPurpose: string;
    aiTrainingAndSharing: string;
    retentionAndSubprocessors: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedPrivacyPrompt: string;
}
export declare class BroccoliPrivacyPolicyCompactor {
    private static instance;
    readonly privacyAuditTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliPrivacyPolicyCompactor;
    /**
     * Compacts raw Privacy Policy or DPA text
     */
    static compactPrivacyPolicy(rawPrivacyText: string): PrivacyPolicyCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliPrivacyPolicyCompactor.d.ts.map