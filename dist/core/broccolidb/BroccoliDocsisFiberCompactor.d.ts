/**
 * GALXAI BroccoliDB Broadband DOCSIS 3.1 & GPON / XGS-PON Fiber Telemetry Compactor
 *
 * Slashes massive LLM token bills on high-volume broadband access telemetry (DOCSIS 3.1 Cable Modems, CMTS/CCAP, GPON / XGS-PON Optical Line Terminals OLT):
 * 1. Evaluates thousands of cable modem and fiber ONT telemetry profiles in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Modem MAC/ONT Serial, Downstream/Upstream SNR (dB) & Power Levels (dBmV / dBm), Uncorrectable FEC Codewords, Optical Rx Power, and Profile Flaps.
 * 3. Prunes micro-second OFDM subcarrier bit-loading frequency heatmaps, SNMP polling header packets, and TR-069 parameter dumps.
 *
 * Result: Slashes 80%–95% of broadband network access prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface DocsisFiberCompactionResult {
    wasCompacted: boolean;
    subscriberDeviceAndNode: string;
    docsisRfLevelsAndSnr: string;
    fecErrorsAndOfdmChannelStatus: string;
    gponOpticalPowerAndOntHealth: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedDocsisPrompt: string;
}
export declare class BroccoliDocsisFiberCompactor {
    private static instance;
    readonly docsisTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliDocsisFiberCompactor;
    static compactDocsisFiber(rawText: string): DocsisFiberCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliDocsisFiberCompactor.d.ts.map