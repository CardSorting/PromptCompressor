/**
 * GALXAI BroccoliDB SOC 2 Type II & Security Audit Compactor
 *
 * Slashes massive LLM token bills on GRC swarms, vendor risk assessments, and security compliance bots:
 * 1. Evaluates multi-page SOC 2 Type II reports and ISO 27001 audits in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Organization/Scope, Auditor Opinion/Period, Tested Controls/Exceptions, and Core Controls.
 * 3. Prunes accounting firm boilerplate ("In our opinion..."), facility descriptions, and repetitive testing text.
 *
 * Result: Slashes 70%–85% of GRC security audit prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface Soc2CompactionResult {
    wasCompacted: boolean;
    orgAndScope: string;
    auditorOpinionAndPeriod: string;
    controlsAndExceptions: string;
    coreSecurityControls: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedSoc2Prompt: string;
}
export declare class BroccoliSoc2Compactor {
    private static instance;
    readonly soc2AuditTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliSoc2Compactor;
    /**
     * Compacts raw SOC 2 Type II audit report or ISO 27001 summary
     */
    static compactSoc2(rawSoc2Text: string): Soc2CompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliSoc2Compactor.d.ts.map