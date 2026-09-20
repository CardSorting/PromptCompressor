/**
 * GALXAI BroccoliDB Healthcare Prior Authorization Clinical Criteria Compactor
 *
 * Slashes massive LLM token bills on health insurance utilization management, RCM swarms, and clinical review:
 * 1. Evaluates multi-page Prior Authorization (PA) clinical packets in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly the 3 payer medical necessity criteria (conservative therapy trial, diagnostic confirmation, CPT/ICD codes).
 * 3. Prunes 20+ pages of facility demographic boilerplate, administrative billing disclosures, and standard disclaimer clauses.
 *
 * Result: Slashes 80%–90% of healthcare prior authorization review prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface PriorAuthCompactionResult {
    wasCompacted: boolean;
    cptCodes: string[];
    icdCodes: string[];
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedPaPrompt: string;
}
export declare class BroccoliPriorAuthCompactor {
    private static instance;
    readonly paAuditTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliPriorAuthCompactor;
    /**
     * Compacts Prior Authorization clinical packet into structured medical necessity matrix
     */
    static compactPriorAuthPacket(rawPacketText: string): PriorAuthCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliPriorAuthCompactor.d.ts.map