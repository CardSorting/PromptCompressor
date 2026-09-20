/**
 * GALXAI BroccoliDB Theatrical Film Digital Cinema Package (DCP) & KDM License Compactor
 *
 * Slashes massive LLM token bills on DCI-compliant Digital Cinema Package (DCP) asset maps, Composition Playlists (CPL XML), and Key Delivery Messages (KDM):
 * 1. Evaluates multi-megabyte theatrical CPL/PKL/KDM XML files in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Movie Title / Content Title Text, DCI CPL UUID, Picture Format (4K DCI Flat/Scope / 24fps / JPEG 2000), Audio Channels (Dolby Atmos / 5.1/7.1), KDM Validity Window (Start/End UTC), and Target Cinema Media Block Certificate.
 * 3. Prunes millions of raw AES-128 cryptographic key ciphertexts, XML DSig signatures, and per-frame SMPTE 429 edit unit timecode lists.
 *
 * Result: Slashes 80%–95% of digital cinema distribution prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface FilmDcpKdmCompactionResult {
    wasCompacted: boolean;
    movieTitleAndCplUuid: string;
    pictureFormatAndAudioChannels: string;
    kdmValidityWindowAndKeyIds: string;
    exhibitionTheaterAndSecurityBlock: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedDcpPrompt: string;
}
export declare class BroccoliFilmDcpKdmCompactor {
    private static instance;
    readonly dcpTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliFilmDcpKdmCompactor;
    static compactDcp(rawText: string): FilmDcpKdmCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliFilmDcpKdmCompactor.d.ts.map