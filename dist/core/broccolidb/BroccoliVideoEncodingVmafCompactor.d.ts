/**
 * GALXAI BroccoliDB Video Encoding, Transcoding & Netflix VMAF Quality Compactor
 *
 * Slashes massive LLM token bills on video transcoding logs and per-frame Video Multi-Method Assessment Fusion (VMAF / SSIM / PSNR) quality metrics (FFmpeg, SVT-AV1, libvmaf):
 * 1. Evaluates 100,000+ line per-frame VMAF scores and encoder QP bitrate dumps in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Source Video Asset, Codec / Ladder Profile (AV1 / HEVC / H.264), Resolution/Bitrate (e.g. 4K 2160p @ 6.2 Mbps), Harmonic Mean VMAF Score (0-100), 1st Percentile VMAF (Worst-case drop), and PSNR / SSIM.
 * 3. Prunes millions of per-frame floating-point VMAF timestamps, macroblock motion vector arrays, and FFmpeg command-line compilation flag strings.
 *
 * Result: Slashes 80%–95% of video encoding quality prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface VideoEncodingVmafCompactionResult {
    wasCompacted: boolean;
    videoAssetAndCodecProfile: string;
    bitrateAndResolutionLadder: string;
    vmafScoreAndPerceptualMetrics: string;
    encodingEfficiencyAndBitrateSavings: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedVmafPrompt: string;
}
export declare class BroccoliVideoEncodingVmafCompactor {
    private static instance;
    readonly vmafTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliVideoEncodingVmafCompactor;
    static compactVmaf(rawText: string): VideoEncodingVmafCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliVideoEncodingVmafCompactor.d.ts.map