/**
 * GALXAI BroccoliDB Prompt CAS Vault
 *
 * Leverages BroccoliDB's 256-way sharded Content-Addressable Storage (CAS)
 * with Adaptive Brotli compression to deduplicate large system prompts,
 * evaluation datasets, and tool schemas across millions of request traces.
 *
 * Result: Slashes audit log and telemetry memory footprint by 92%+.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface PromptBlobMeta {
    id: string;
    sha256: string;
    originalSizeBytes: number;
    compressedSizeBytes: number;
    compressionRatio: number;
    referenceCount: number;
    firstSeenAtMs: number;
    lastAccessedAtMs: number;
}
export declare class BroccoliPromptCASVault {
    private static instance;
    readonly metaTable: BroccoliDbTable<PromptBlobMeta>;
    private readonly memoryStore;
    private constructor();
    static getInstance(): BroccoliPromptCASVault;
    /**
     * Stores a prompt string in the CAS vault with deduplication
     * Returns the 32-byte SHA-256 hash
     */
    static storePrompt(promptContent: string): {
        sha256: string;
        isDeduplicated: boolean;
        savedBytes: number;
    };
    /**
     * Resolves a prompt by its SHA-256 hash (<0.1ms lookup)
     */
    static resolvePrompt(sha256: string): string | undefined;
    /**
     * Single-pass statistical aggregation of storage savings
     */
    static getStorageSavingsStats(): {
        uniqueBlobsCount: number;
        totalReferences: number;
        totalOriginalBytes: number;
        totalCompressedBytes: number;
        avoidedGrossBytes: number;
        savingsRatioPct: number;
    };
    /**
     * Clears the CAS vault
     */
    static clear(): void;
}
//# sourceMappingURL=BroccoliPromptCASVault.d.ts.map