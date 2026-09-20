/**
 * GALXAI BroccoliDB Music Publishing Common Works Registration (CWR v2.1/v3.0) Compactor
 *
 * Slashes massive LLM token bills on music publishing rights society registrations (CWR flat files for ASCAP, BMI, PRS, SACEM, GEMA):
 * 1. Evaluates 50,000+ line CWR fixed-width text files in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Musical Work Title, ISWC Number, Interested Parties (Writers/Publishers / IPI Name Numbers), Performing & Mechanical Right Ownership Splits (PR/MR %), and Society Acceptance Status.
 * 3. Prunes millions of fixed-width space padding characters, transaction header/trailer control records (HDR/TRL, GRH/GRT), and society territorial code matrices.
 *
 * Result: Slashes 80%–95% of music publishing CWR prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface MusicPublishingCwrCompactionResult {
    wasCompacted: boolean;
    workTitleAndIswc: string;
    interestedPartiesAndIpi: string;
    ownershipSplitsAndSocieties: string;
    societyRegistrationAndAckStatus: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedCwrPrompt: string;
}
export declare class BroccoliMusicPublishingCwrCompactor {
    private static instance;
    readonly cwrTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliMusicPublishingCwrCompactor;
    static compactCwr(rawText: string): MusicPublishingCwrCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliMusicPublishingCwrCompactor.d.ts.map