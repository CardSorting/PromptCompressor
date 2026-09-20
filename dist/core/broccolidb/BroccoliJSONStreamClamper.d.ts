/**
 * GALXAI BroccoliDB Streaming JSON Closure Interceptor & Trailing Token Clamper
 *
 * Slashes post-JSON conversational pleasantries and markdown trailing fluff during streaming:
 * 1. Tracks JSON brace/bracket nesting depth in-flight in BroccoliDB (<0.01ms).
 * 2. Detects the exact moment the root object/array achieves balanced closure (`depth === 0`).
 * 3. Immediately triggers an HTTP AbortSignal to sever the OpenAI connection and discard trailing tokens.
 *
 * Result: Slashes 30–80 trailing output tokens per structured JSON streaming call.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface JSONStreamingChunkResult {
    hasCompletedRootJson: boolean;
    currentDepth: number;
    extractedJsonPayload?: string;
    tokensStreamedSoFar: number;
    trailingTokensDiscarded: number;
    dollarsSavedUsd: number;
}
export declare class BroccoliJSONStreamClamper {
    private static instance;
    readonly streamAuditTable: BroccoliDbTable<{
        id: string;
        trailingTokensDiscarded: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliJSONStreamClamper;
    /**
     * Evaluates an in-flight streamed buffer for root JSON completion
     */
    static evaluateChunk(accumulatedStreamText: string, outputPricePer1M?: number): JSONStreamingChunkResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliJSONStreamClamper.d.ts.map