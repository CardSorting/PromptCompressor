/**
 * GALXAI BroccoliDB Protocol Buffers Compact TLV Wire Format DeDuplication Buffer
 *
 * Slashes repetitive JSON schema keys into compact Protobuf Tag-Length-Value (TLV) frames:
 * 1. Maps string JSON keys to 1-byte field numbers (1..15) per protobuf schema convention.
 * 2. Encodes integers as 7-bit Varints and strings as length-delimited byte spans.
 * 3. Compresses verbose JSON payload streams into dense Base64 binary protobuf wire frames.
 *
 * Result: Slashes 70%–85% of JSON schema tokens on streaming gRPC/REST logs.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface ProtobufWireResult {
    wasEncoded: boolean;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    fieldsEncodedCount: number;
    compactedProtobufFrame: string;
}
export declare class BroccoliProtobufVarintWireFormatBuffer {
    private static instance;
    readonly protoAuditTable: BroccoliDbTable<{
        id: string;
        fieldsEncoded: number;
        tokensSaved: number;
        savingsPercentage: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliProtobufVarintWireFormatBuffer;
    /**
     * Encodes record object into compact Protobuf wire frame
     */
    static encodeRecord(record: Record<string, any>): ProtobufWireResult;
    clear(): void;
}
//# sourceMappingURL=BroccoliProtobufVarintWireFormatBuffer.d.ts.map