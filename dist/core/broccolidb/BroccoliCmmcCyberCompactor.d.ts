/**
 * GALXAI BroccoliDB DoD Cybersecurity Maturity Model Certification (CMMC 2.0 / NIST SP 800-171) Compactor
 *
 * Slashes massive LLM token bills on Department of Defense (DoD) defense industrial base (DIB) cybersecurity assessments and System Security Plans (SSP / SPRS / POA&M):
 * 1. Evaluates 200+ page NIST SP 800-171 System Security Plans (SSP) and C3PAO third-party assessment results in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Contractor Name / CAGE Code, CMMC Target Level (Level 2 - Advanced / 110 Practices), SPRS Score (Supplier Performance Risk System score out of 110), Controlled Unclassified Information (CUI) Boundary, Deficient Practice Items, and Plan of Action & Milestones (POA&M) Closeout Deadlines.
 * 3. Prunes repetitive NIST SP 800-171 control objective boilerplate descriptions, standard company security policy prose, and C3PAO assessor biographical listings.
 *
 * Result: Slashes 80%–95% of defense cybersecurity compliance prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface CmmcCyberCompactionResult {
    wasCompacted: boolean;
    contractorAndCageCode: string;
    cmmcLevelAndSprsScore: string;
    cuiBoundaryAndKeyControls: string;
    poamDeficienciesAndCloseout: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedCmmcPrompt: string;
}
export declare class BroccoliCmmcCyberCompactor {
    private static instance;
    readonly cmmcTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliCmmcCyberCompactor;
    static compactCmmc(rawText: string): CmmcCyberCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliCmmcCyberCompactor.d.ts.map