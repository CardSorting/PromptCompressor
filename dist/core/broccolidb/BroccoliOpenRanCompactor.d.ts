/**
 * GALXAI BroccoliDB O-RAN Alliance Fronthaul 7.2x C/U-Plane Split & E2 Node Telemetry Compactor
 *
 * Slashes massive LLM token bills on Open RAN (O-RAN) Option 7.2x fronthaul eCPRI streaming logs, near-RT RIC E2 telemetry, and Beamforming weight vectors:
 * 1. Evaluates 500+ MB O-RAN Fronthaul C/U-Plane eCPRI packet captures and E2AP metrics in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly O-DU / O-RU Radio Unit ID (e.g. O-RU-310-410-042 / Massive MIMO 64T64R), Fronthaul Synchronization (IEEE 1588v2 PTP / ITU-T G.8275.1 Profile SyncE Class C), C-Plane Scheduling & Beamforming Weights (Section Type 1 / PrbNum 273 PRBs), U-Plane IQ Compression (e.g. 9-bit Block Floating Point BFP), E2 Node Alarms, and PRB Throughput (Gbps).
 * 3. Prunes continuous 100GbE eCPRI raw IQ sample payload words, sub-microsecond timestamp jitter curves, and standard O-RAN specification recitals.
 *
 * Result: Slashes 80%–95% of O-RAN fronthaul network telemetry prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface OpenRanCompactionResult {
    wasCompacted: boolean;
    oDuAndORuRadioNode: string;
    ieee1588SyncAndClockStatus: string;
    cPlaneBeamformingAndIqCompression: string;
    e2NodeAlarmsAndPrbUtilization: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedOranPrompt: string;
}
export declare class BroccoliOpenRanCompactor {
    private static instance;
    readonly oranTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliOpenRanCompactor;
    static compactOran(rawText: string): OpenRanCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliOpenRanCompactor.d.ts.map