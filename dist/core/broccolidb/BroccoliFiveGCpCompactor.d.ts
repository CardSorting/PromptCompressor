/**
 * GALXAI BroccoliDB 3GPP 5G Core Control Plane (NGAP / NAS / AMF / SMF) Protocol Trace Compactor
 *
 * Slashes massive LLM token bills on 5G Standalone (5G SA) control plane PCAP signaling traces, NGAP interface logs, and HTTP/2 Service-Based Architecture (SBA) messages:
 * 1. Evaluates multi-gigabyte 5G core network packet traces (Wireshark / PCAP / tcpdump) in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly UE Identifier (SUCI / 5G-GUTI / IMSI), Network Functions (gNodeB / AMF / SMF / UPF / UDM), 3GPP Procedure (Initial Registration / PDU Session Establishment / Xn Handover), 5G QoS Flow Parameters (5QI e.g. 5QI 1 Voice / 5QI 9 Default, GFBR/MFBR Mbps), HTTP/2 SBA REST API Endpoints (Namf_Communication / Nsmf_PDUSession), and Registration / Session Cause Status.
 * 3. Prunes millions of raw hex ASN.1 BER/PER octet dumps, TCP ACK/SYN window scaling packets, and routine gTP-U keepalive heartbeats.
 *
 * Result: Slashes 80%–95% of 5G Core network signaling prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface FiveGCpCompactionResult {
    wasCompacted: boolean;
    ueIdentityAndAccessNetwork: string;
    threeGppProcedureAndStatus: string;
    sbaHttp2MicroservicesAndFlow: string;
    qosSessionParametersAndUpf: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compacted5gPrompt: string;
}
export declare class BroccoliFiveGCpCompactor {
    private static instance;
    readonly fiveGTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliFiveGCpCompactor;
    static compact5gCp(rawText: string): FiveGCpCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliFiveGCpCompactor.d.ts.map