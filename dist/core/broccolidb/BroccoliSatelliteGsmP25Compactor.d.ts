/**
 * GALXAI BroccoliDB APCO Project 25 (P25 Phase 1 & Phase 2) Public Safety Land Mobile Radio (LMR) Compactor
 *
 * Slashes massive LLM token bills on emergency public safety dispatch logs, P25 trunking control channel packets (TSBK), and voice channel assignments:
 * 1. Evaluates multi-megabyte APCO P25 trunking system activity and digital voice logs in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly System ID & WACN (Wide Area Communications Network e.g. System 492 / WACN BEE00), Radio Talkgroup ID (TGID e.g. TG 101 County Fire Dispatch / TG 204 Police Tactical), Unit ID (UID / Radio ID), Control Channel Frequency & Site (MHz), Call Type (Group Voice / Emergency Alarm / Private Call), Digital Encryption Status (P25 AES-256 / Clear Voice), and Channel Access Grant Latency (ms).
 * 3. Prunes continuous 9600 bps control channel Trunking Signaling Block (TSBK) sync words, link control word repetitions, and routine radio affiliate polling logs.
 *
 * Result: Slashes 80%–95% of APCO P25 public safety radio prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface SatelliteGsmP25CompactionResult {
    wasCompacted: boolean;
    systemAndWacnIdentity: string;
    talkgroupAndCallingUnit: string;
    rfSiteFrequencyAndEncryption: string;
    emergencyAlertAndCallDuration: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedP25Prompt: string;
}
export declare class BroccoliSatelliteGsmP25Compactor {
    private static instance;
    readonly p25Table: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliSatelliteGsmP25Compactor;
    static compactP25(rawText: string): SatelliteGsmP25CompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliSatelliteGsmP25Compactor.d.ts.map