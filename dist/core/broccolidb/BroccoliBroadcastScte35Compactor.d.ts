/**
 * GALXAI BroccoliDB Television Broadcast SCTE-35 / SCTE-104 Ad Insertion Compactor
 *
 * Slashes massive LLM token bills on cable/OTT live television broadcast automation and SCTE-35 digital cue injection packets (MPEG-TS, HLS #EXT-X-DATERANGE, DASH MPD):
 * 1. Evaluates MPEG-TS transport stream SCTE-35 binary hex splice descriptors in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Splice Event ID, Command Type (0x05 splice_insert / 0x06 time_signal), Splice PTS Presentation Timestamp, Break Duration (secs), Unique Program ID (UPID), and Segmentation Type (e.g. 0x30 Provider Ad Start / 0x34 Placement Opportunity).
 * 3. Prunes continuous MPEG-2 transport stream NULL packet padding (PID 0x1FFF), audio PES stream timestamps, and private data CRC-32 polynomials.
 *
 * Result: Slashes 80%–95% of SCTE-35 broadcast cue prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface BroadcastScte35CompactionResult {
    wasCompacted: boolean;
    spliceEventAndCommandType: string;
    spliceTimingAndPtsTimestamp: string;
    breakDurationAndAutoReturn: string;
    segmentationDescriptorAndUpid: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedSctePrompt: string;
}
export declare class BroccoliBroadcastScte35Compactor {
    private static instance;
    readonly scteTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliBroadcastScte35Compactor;
    static compactScte35(rawText: string): BroadcastScte35CompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliBroadcastScte35Compactor.d.ts.map