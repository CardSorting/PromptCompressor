/**
 * GALXAI BroccoliDB SWIFT MT700 Issue of a Documentary Letter of Credit (LC / UCP 600) Compactor
 *
 * Slashes massive LLM token bills on SWIFT FIN MT700 trade finance documentary credits and standby letters of credit:
 * 1. Evaluates 50+ page documentary letters of credit and commercial invoice verification packets in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Sender / Receiver BIC, Form of Documentary Credit (Field 40A e.g. IRREVOCABLE), LC Number (Field 20), Date and Place of Expiry (Field 31D), Applicant (Field 50), Beneficiary (Field 59), Currency & Amount (Field 32B), Partial Shipments / Transhipment (Field 43P/43T), Description of Goods (Field 45A), Documents Required (Field 46A e.g. 3/3 Clean on Board Ocean B/L, Commercial Invoice, Certificate of Origin), and Additional Conditions (Field 47A).
 * 3. Prunes repetitive SWIFT FIN protocol headers, UCP 600 legal article recitals, and standard issuing bank disclaimer text.
 *
 * Result: Slashes 75%–90% of SWIFT MT700 Letter of Credit prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface SwiftMt700CompactionResult {
    wasCompacted: boolean;
    lcNumberAndCreditType: string;
    applicantBeneficiaryAndExpiry: string;
    creditAmountAndShipmentTerms: string;
    goodsDescriptionAndRequiredDocuments: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedMt700Prompt: string;
}
export declare class BroccoliSwiftMt700Compactor {
    private static instance;
    readonly mt700Table: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliSwiftMt700Compactor;
    static compactMt700(rawText: string): SwiftMt700CompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliSwiftMt700Compactor.d.ts.map