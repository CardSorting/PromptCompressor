/**
 * GALXAI BroccoliDB Architecture & Governance Invariant Compactor
 *
 * Epistemic Representation Selection:
 * Specifically engineered to preserve active system invariants, cryptographic
 * requirements, and binding runtime constraints while stripping away
 * archival minutes, superseded ADRs, stale RFCs, and governance ceremony.
 */
export interface ArchitectureInvariantDigest {
    activeInvariants: string[];
    prunedHistoricalSections: number;
    compactedText: string;
    originalTokens: number;
    compactedTokens: number;
    savingsPercentage: number;
}
export declare class BroccoliArchitectureInvariantCompactor {
    static readonly DOMAIN = "ArchitectureGovernance";
    /**
     * Transforms institutionally noisy repo context into action-safe code invariants.
     */
    static compact(rawText: string): ArchitectureInvariantDigest;
}
//# sourceMappingURL=BroccoliArchitectureInvariantCompactor.d.ts.map