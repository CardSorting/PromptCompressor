/**
 * GALXAI BroccoliDB International Trade Sanctions & BIS Export Control (EAR/OFAC) Compactor
 *
 * Slashes massive LLM token bills on export control screening logs, OFAC Specially Designated Nationals (SDN) checks, and BIS Commerce Control List (CCL/ECCN) audits:
 * 1. Evaluates multi-jurisdictional sanctions screening matches in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Screened Entity/Consignee, Match Confidence Score %, List Matched (OFAC SDN / BIS Entity List), Export Control Classification Number (ECCN), and BIS License Requirement.
 * 3. Prunes millions of non-matching global watch list records, automated fuzzy match algorithm diagnostics, and international trade treaty preambles.
 *
 * Result: Slashes 75%–90% of international trade sanctions prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface TradeSanctionsCompactionResult {
    wasCompacted: boolean;
    screenedPartyAndDestination: string;
    eccnAndExportControlJurisdiction: string;
    sanctionsListMatchesAndScore: string;
    exportLicensingDetermination: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedSanctionsPrompt: string;
}
export declare class BroccoliTradeSanctionsCompactor {
    private static instance;
    readonly sanctionsTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliTradeSanctionsCompactor;
    static compactSanctions(rawText: string): TradeSanctionsCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliTradeSanctionsCompactor.d.ts.map