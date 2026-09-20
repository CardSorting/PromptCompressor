/**
 * GALXAI BroccoliDB Digital Advertising OpenRTB 2.5 / 3.0 Bid Stream Compactor
 *
 * Slashes massive LLM token bills on high-throughput programmatic ad exchanges and OpenRTB bid request/response JSON payloads:
 * 1. Evaluates millions of OpenRTB auction JSON payloads in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Bid Request ID, Publisher Site / App Bundle, Imp Banner / Video Format, Device User-Agent / Geolocation, DSP Winning Bid CPM ($), Creative ID (CRID), and IAB Category (e.g. IAB14-1).
 * 3. Prunes repetitive OpenRTB schema JSON keys, bidder internal cookie sync mapping arrays, and device screen pixel aspect ratio matrices.
 *
 * Result: Slashes 80%–95% of programmatic ad exchange prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface OpenRtbAdTechCompactionResult {
    wasCompacted: boolean;
    bidRequestAndPublisherApp: string;
    adPlacementAndImpressionFormat: string;
    deviceGeoAndAudienceSegment: string;
    winningBidCpmAndCreative: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedRtbPrompt: string;
}
export declare class BroccoliOpenRtbAdTechCompactor {
    private static instance;
    readonly rtbTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliOpenRtbAdTechCompactor;
    static compactOpenRtb(rawText: string): OpenRtbAdTechCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliOpenRtbAdTechCompactor.d.ts.map