/**
 * GALXAI BroccoliDB Forensic Accounting & CFE Fraud Investigation Compactor
 *
 * Slashes massive LLM token bills on corporate fraud investigations, embezzlement audits, and Certified Fraud Examiner (CFE) reports:
 * 1. Evaluates 100+ page forensic audit findings and ledger reconstruction logs in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Target Subject/Entity, Fraud Scheme Typology (Benford's Law/Ghost Vendors), Quantified Financial Exposure $, Evidence Tracing, and Expert Conclusion.
 * 3. Prunes repetitive general ledger transaction dumps, bank account statement image OCR text, and standard audit engagement letters.
 *
 * Result: Slashes 75%–90% of forensic accounting prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface ForensicAccountingCompactionResult {
    wasCompacted: boolean;
    subjectAndEngagement: string;
    fraudSchemeTypology: string;
    quantifiedLossAndExposure: string;
    evidenceChainAndConclusion: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedForensicPrompt: string;
}
export declare class BroccoliForensicAccountingCompactor {
    private static instance;
    readonly forensicTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliForensicAccountingCompactor;
    static compactForensicAccounting(rawText: string): ForensicAccountingCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliForensicAccountingCompactor.d.ts.map