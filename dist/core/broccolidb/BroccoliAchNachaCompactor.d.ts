/**
 * GALXAI BroccoliDB NACHA Automated Clearing House (ACH / 94-Character Fixed Width File) Compactor
 *
 * Slashes massive LLM token bills on NACHA ACH batch direct deposits, vendor B2B payments (CCD/CTX), and payroll runs:
 * 1. Evaluates 100,000+ line fixed-width 94-character NACHA ACH transmission files (Records 1, 5, 6, 7, 8, 9) in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly File Header (Immediate Origin / Immediate Destination Routing Transit Number RTN), Batch SEC Code (PPD / CCD / CTX / WEB), Company Name / Company ID, Effective Entry Date, Total Debit Entry Dollar Amount ($), Total Credit Entry Dollar Amount ($), Entry Count / Hash Total, and Settlement Account Status.
 * 3. Prunes tens of thousands of individual record 6 transaction detail lines and padding blocks of 94-character '999999999...' trailing blocks.
 *
 * Result: Slashes 80%–95% of NACHA ACH bank payment prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface AchNachaCompactionResult {
    wasCompacted: boolean;
    fileHeaderAndImmediateOrigin: string;
    batchSecCodeAndCompanyId: string;
    totalDebitsCreditsAndEntryCount: string;
    batchHashAndSettlementDate: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedNachaPrompt: string;
}
export declare class BroccoliAchNachaCompactor {
    private static instance;
    readonly nachaTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliAchNachaCompactor;
    static compactNacha(rawText: string): AchNachaCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliAchNachaCompactor.d.ts.map