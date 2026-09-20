/**
 * GALXAI BroccoliDB Rabin-Karp Rolling Hash & Content-Defined Chunking (CDC) DeDuplication Buffer
 *
 * Slashes massive cross-document and multi-paragraph duplicate tokens:
 * 1. Computes rolling polynomial Rabin-Karp hashes over sliding windows (window size w=32 bytes) in <10ns.
 * 2. Uses boundary masks (e.g. hash & 0x1FFF === 0) for Content-Defined Chunking (CDC, average chunk size 8KB).
 * 3. Identifies and de-duplicates recurring contract paragraphs, code boilerplate, and nested sub-objects across different documents.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface ContentChunk {
    chunkHash: string;
    byteOffset: number;
    length: number;
    isDuplicate: boolean;
    duplicateCount: number;
    preview: string;
}
export declare class BroccoliRabinKarpRollingDedupBuffer {
    private static instance;
    private readonly chunkRegistry;
    private readonly windowSize;
    private readonly mask;
    private totalChunksProcessed;
    private totalDuplicateChunks;
    readonly rkAuditTable: BroccoliDbTable<{
        id: string;
        totalChunks: number;
        duplicateChunks: number;
        chunkRegistrySize: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(windowSize?: number, mask?: number): BroccoliRabinKarpRollingDedupBuffer;
    /**
     * Performs Content-Defined Chunking (CDC) with Rabin-Karp rolling hashes and deduplicates
     */
    chunkAndDeduplicate(text: string): {
        totalChunks: number;
        duplicateChunks: number;
        dedupRatio: number;
        chunks: ContentChunk[];
        deduplicatedText: string;
    };
    private computeSha1Simple;
    getStats(): {
        totalChunksProcessed: number;
        totalDuplicateChunks: number;
        uniqueChunksRegistered: number;
    };
    clear(): void;
}
//# sourceMappingURL=BroccoliRabinKarpRollingDedupBuffer.d.ts.map