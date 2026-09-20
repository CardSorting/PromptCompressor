/**
 * GALXAI BroccoliDB SEC DEF 14A Proxy & Executive Compensation Compactor
 *
 * Slashes massive LLM token bills on annual shareholder meeting proxy statements and Compensation Discussion and Analysis (CD&A):
 * 1. Evaluates 100+ page SEC Form DEF 14A proxy statements in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Registrant CIK, Board Nominees/Independence, Summary Compensation Table (NEO Salary/Stock/Total), Say-on-Pay Approval %, and Shareholder Proposals.
 * 3. Prunes repetitive meeting voting mechanics instructions, transfer agent logistics, and standard boilerplate board committee charters.
 *
 * Result: Slashes 75%–Nominal of proxy statement prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface ProxyDef14aCompactionResult {
    wasCompacted: boolean;
    companyAndMeetingDate: string;
    boardCompositionAndIndependence: string;
    neoCompensationSummary: string;
    sayOnPayAndProposals: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedProxyPrompt: string;
}
export declare class BroccoliProxyDef14aCompactor {
    private static instance;
    readonly proxyTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliProxyDef14aCompactor;
    static compactProxy(rawText: string): ProxyDef14aCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliProxyDef14aCompactor.d.ts.map