/**
 * GALXAI BroccoliDB Anti-Money Laundering (AML) & KYC Compliance Compactor
 *
 * Slashes massive LLM token bills on AML transaction monitoring, FinCEN SAR narratives, and CIP Customer Due Diligence:
 * 1. Evaluates 50+ page AML transaction histories and PEP/OFAC sanctions screening reports in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Subject Entity, FinCEN Suspicious Activity Flags (Structuring/Rapid Movement), Aggregate Wire Amounts, PEP/OFAC Screening, and MLRO Decision.
 * 3. Prunes repetitive SWIFT payment routing codes, generic AML banking regulation text, and audit verification signature padding.
 *
 * Result: Slashes 75%–90% of AML/KYC investigative prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface AmlKycCompactionResult {
    wasCompacted: boolean;
    subjectAndCddProfile: string;
    suspiciousActivityTypology: string;
    wireTransactionsAndVolumes: string;
    pepOfacAndMlroDetermination: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedAmlPrompt: string;
}
export declare class BroccoliAmlKycCompactor {
    private static instance;
    readonly amlTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliAmlKycCompactor;
    static compactAml(rawText: string): AmlKycCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliAmlKycCompactor.d.ts.map