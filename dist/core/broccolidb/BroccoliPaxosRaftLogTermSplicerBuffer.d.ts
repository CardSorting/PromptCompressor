/**
 * GALXAI BroccoliDB Paxos/Raft Distributed Consensus Log Term Splicing Buffer
 *
 * Slashes massive duplicate heartbeat & election entries in distributed consensus traces:
 * 1. Groups Raft/Paxos log entries by leader term epoch and node ID.
 * 2. Compresses continuous monotonic heartbeat sequences into compact tick intervals `[HEARTBEATS:ticks=100..450]`.
 * 3. Preserves all state machine mutations, term transitions, and leader elections with 100% fidelity.
 *
 * Result: Slashes 80%–95% of consensus trace and distributed heartbeat tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface RaftLogEntry {
    term: number;
    index: number;
    type: 'HEARTBEAT' | 'STATE_CHANGE' | 'ELECTION';
    leaderId: string;
    payload?: string;
}
export interface RaftSplicerResult {
    wasSpliced: boolean;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    totalEntriesCount: number;
    heartbeatsCollapsedCount: number;
    compactedLogFrame: string;
}
export declare class BroccoliPaxosRaftLogTermSplicerBuffer {
    private static instance;
    readonly raftAuditTable: BroccoliDbTable<{
        id: string;
        totalEntries: number;
        heartbeatsCollapsed: number;
        tokensSaved: number;
        savingsPercentage: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliPaxosRaftLogTermSplicerBuffer;
    /**
     * Splices Raft log entries and compresses repetitive heartbeats
     */
    static spliceConsensusLogs(entries: RaftLogEntry[]): RaftSplicerResult;
    clear(): void;
}
//# sourceMappingURL=BroccoliPaxosRaftLogTermSplicerBuffer.d.ts.map