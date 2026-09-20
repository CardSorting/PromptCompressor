/**
 * GALXAI BroccoliDB SWIFT MT103 Single Customer Credit Transfer Compactor
 *
 * Slashes massive LLM token bills on SWIFT FIN MT103 international wire transfers and correspondent banking payment messages:
 * 1. Evaluates raw SWIFT FIN message blocks ({1:}{2:}{3:}{4:}{5:}) in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Transaction Reference Number (Field 20 / UETR), Bank Operation Code (Field 23B), Value Date & Currency & Interbank Settled Amount (Field 32A e.g. 260828USD45000000,), Ordering Customer (Field 50K), Ordering / Sender Institution (Field 52A), Intermediary / Correspondent Bank (Field 56A), Beneficiary Institution (Field 57A BIC), Beneficiary Customer (Field 59 IBAN/Account), and Remittance Information (Field 70).
 * 3. Prunes repetitive SWIFT system trailers (MAC/PAC checksums, MUR numbers, CHIPS/Fedwire sequence tags).
 *
 * Result: Slashes 75%–90% of SWIFT MT103 international wire prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface SwiftMt103CompactionResult {
    wasCompacted: boolean;
    transactionReferenceAndUetr: string;
    settlementDateCurrencyAmount: string;
    orderingAndBeneficiaryParties: string;
    correspondentRoutingAndRemittance: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedMt103Prompt: string;
}
export declare class BroccoliSwiftMt103Compactor {
    private static instance;
    readonly mt103Table: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliSwiftMt103Compactor;
    static compactMt103(rawText: string): SwiftMt103CompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliSwiftMt103Compactor.d.ts.map