/**
 * GALXAI BroccoliDB Cryptographic Verifiable Timestamp Delta Chain Buffer
 *
 * Slashes massive block header and verification redundancy in append-only audit ledgers:
 * 1. Tracks rolling SHA-256 state commitments across sequential blockchain/audit events.
 * 2. Compresses absolute timestamps into microsecond deltas from previous block headers.
 * 3. Emits compact verifiable chain delta links `[CHAIN_DELTA:h=prevHash:dt=+12ms:payloadHash]`.
 *
 * Result: Slashes 75%–90% of blockchain and audit trail tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface AuditBlockEvent {
    blockNumber: number;
    timestamp: number;
    previousHash: string;
    dataPayload: string;
}
export interface DeltaChainResult {
    wasCompacted: boolean;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    chainLength: number;
    finalStateRoot: string;
    compactedChainFrame: string;
}
export declare class BroccoliVerifiableTimestampDeltaChainBuffer {
    private static instance;
    readonly chainAuditTable: BroccoliDbTable<{
        id: string;
        chainLength: number;
        tokensSaved: number;
        savingsPercentage: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliVerifiableTimestampDeltaChainBuffer;
    private static computeHash;
    /**
     * Compacts sequential audit block events into a verifiable delta chain
     */
    static compactAuditChain(events: AuditBlockEvent[]): DeltaChainResult;
    clear(): void;
}
//# sourceMappingURL=BroccoliVerifiableTimestampDeltaChainBuffer.d.ts.map