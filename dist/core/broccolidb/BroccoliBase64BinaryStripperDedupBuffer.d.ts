/**
 * GALXAI BroccoliDB Base64 Binary & Inline Attachment DeDuplication Buffer
 *
 * Slashes massive multi-thousand-token Base64 image & PDF binary payload bloat in LLM prompts:
 * 1. Detects embedded data URIs (`data:image/png;base64,...`, `data:application/pdf;base64,...`) and raw Base64 blobs (>64 chars).
 * 2. Replaces inlined multi-megabyte Base64 strings with compact SHA-256 CAS content descriptors (`[ATTACHMENT:image/png:sha256:8f4920... / 45.2 KB]`).
 * 3. Preserves exact binary payloads in a localized binary content addressable store (CAS) for lossless retrieval.
 *
 * Result: Slashes 99%+ of Base64 binary token spend in multi-modal LLM requests.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface Base64StripperResult {
    wasStripped: boolean;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    attachmentsExtractedCount: number;
    compactedText: string;
    attachmentRegistry: Record<string, {
        mimeType: string;
        byteLength: number;
    }>;
}
export declare class BroccoliBase64BinaryStripperDedupBuffer {
    private static instance;
    private readonly binaryCasStore;
    readonly b64AuditTable: BroccoliDbTable<{
        id: string;
        attachmentsExtracted: number;
        tokensSaved: number;
        savingsPercentage: number;
        timestampMs: number;
    }>;
    private static readonly DATA_URI_REGEX;
    private constructor();
    static getInstance(): BroccoliBase64BinaryStripperDedupBuffer;
    private static computeSha256Simple;
    /**
     * Strips and deduplicates inlined Base64 data URIs into CAS content descriptors
     */
    static stripBase64Attachments(text: string): Base64StripperResult;
    /**
     * Re-inlines Base64 attachments from CAS store
     */
    static restoreBase64Attachments(compactedText: string): string;
    clear(): void;
}
//# sourceMappingURL=BroccoliBase64BinaryStripperDedupBuffer.d.ts.map