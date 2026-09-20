/**
 * GALXAI BroccoliDB SEC EDGAR 10-K/10-Q Regulatory Filing Compactor
 *
 * Slashes massive LLM token bills on corporate legal due diligence, M&A swarms, and securities analysis:
 * 1. Evaluates multi-hundred page SEC 10-K/10-Q filings in BroccoliDB memory (<0.01ms).
 * 2. Extracts strictly the requested Item sections (Item 1A: Risk Factors, Item 7: MD&A).
 * 3. Prunes 100+ exhibit lists (Item 15), director biographical boilerplate, and empty financial statement tables.
 *
 * Result: Slashes 85%–95% of SEC EDGAR regulatory filing prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface EdgarCompactionResult {
    wasCompacted: boolean;
    targetItemsFound: string[];
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedFilingPrompt: string;
}
export declare class BroccoliEdgarCompactor {
    private static instance;
    readonly edgarAuditTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliEdgarCompactor;
    /**
     * Slices 10-K/10-Q filing to isolate requested Item sections
     */
    static sliceFiling(rawFilingText: string, targetItems?: string[]): EdgarCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliEdgarCompactor.d.ts.map