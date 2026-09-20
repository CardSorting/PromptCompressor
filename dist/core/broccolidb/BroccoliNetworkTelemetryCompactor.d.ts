/**
 * GALXAI BroccoliDB Telecom NOC & Network Routing Telemetry Compactor
 *
 * Slashes massive LLM token bills on high-volume network telemetry streams (Cisco, Juniper, Arista BGP routing tables, SNMP MIBs, gNMI telemetry):
 * 1. Evaluates 100,000+ line BGP RIB route tables and router interface telemetry dumps in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Router Node/AS Number, BGP Flapping Sessions, Interface CRC Packet Drops %, Link Saturation %, and Optical Power Rx/Tx dBm.
 * 3. Prunes millions of stable interior routing OSPF link-state advertisements, routine SNMP poll heartbeats, and normal MAC address learning tables.
 *
 * Result: Slashes 80%–95% of network operations center (NOC) prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface NetworkTelemetryCompactionResult {
    wasCompacted: boolean;
    routerAndAutonomousSystem: string;
    bgpPeeringAndRoutingFlaps: string;
    interfaceErrorsAndBandwidthSaturation: string;
    opticalPowerAndHardwareDiagnostics: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedNocPrompt: string;
}
export declare class BroccoliNetworkTelemetryCompactor {
    private static instance;
    readonly nocTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliNetworkTelemetryCompactor;
    static compactNetwork(rawText: string): NetworkTelemetryCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliNetworkTelemetryCompactor.d.ts.map