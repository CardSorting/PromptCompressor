/**
 * GALXAI BroccoliDB Treasury ISO 20022 & SWIFT MT103 Wire Compactor
 *
 * Slashes massive LLM token bills on high-value interbank payment messages (ISO 20022 pacs.008, camt.053, pain.001, SWIFT MT103/MT940):
 * 1. Evaluates verbose XML/SWIFT financial messages in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Message Type, Debtor/Creditor Names, IBAN/BIC Routing, Transaction Amount & Currency, and Remittance Info (UETR).
 * 3. Prunes repetitive XML namespace schemas (xmlns:urn="iso:std:iso:20022:tech:xsd:pacs.008.001.08"), clearing system identifiers, and signature tags.
 *
 * Result: Slashes 75%–90% of ISO 20022 payment prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface Iso20022CompactionResult {
    wasCompacted: boolean;
    messageTypeAndUetr: string;
    debtorAndCreditorAccounts: string;
    instructedAmountAndCurrency: string;
    remittanceInformation: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedIsoPrompt: string;
}
export declare class BroccoliIso20022Compactor {
    private static instance;
    readonly isoTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliIso20022Compactor;
    static compactIso20022(rawText: string): Iso20022CompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliIso20022Compactor.d.ts.map