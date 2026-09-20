/**
 * GALXAI BroccoliDB Web3 & Smart Contract Security Audit Compactor
 *
 * Slashes massive LLM token bills on Solidity smart contract security reports (OpenZeppelin, Trail of Bits, ConsenSys Diligence):
 * 1. Evaluates 50+ page smart contract AST audits in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Protocol/Contracts Audited, Severity Breakdown (Critical/High/Med/Low), Vulnerability Typologies (Reentrancy/Oracle/Access Control), and Remediation Status.
 * 3. Prunes repetitive Solidity AST printouts, tool configuration YAML files, and standard disclaimer boilerplate.
 *
 * Result: Slashes 75%–90% of smart contract security audit prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface SmartContractAuditCompactionResult {
    wasCompacted: boolean;
    protocolAndScope: string;
    severityVulnerabilityCount: string;
    criticalAndHighFindings: string;
    remediationAndVerification: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedAuditPrompt: string;
}
export declare class BroccoliSmartContractAuditCompactor {
    private static instance;
    readonly auditTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliSmartContractAuditCompactor;
    static compactContractAudit(rawText: string): SmartContractAuditCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliSmartContractAuditCompactor.d.ts.map