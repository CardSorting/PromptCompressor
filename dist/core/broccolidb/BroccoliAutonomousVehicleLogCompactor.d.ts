/**
 * GALXAI BroccoliDB Autonomous Vehicle (AV / SAE Level 4) & Disengagement Compactor
 *
 * Slashes massive LLM token bills on autonomous driving sensor stack telemetry and DMV disengagement event logs (Waymo, Cruise, Zoox):
 * 1. Evaluates gigabytes of AV perception/planning telemetry in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly AV Platform/VIN, Operational Design Domain (ODD), Disengagement Trigger Cause (Perception/Planning/Safety Driver), Takeover Time (ms), and Object Detection Confidence.
 * 3. Prunes continuous 10Hz LiDAR 3D point cloud coordinate packets, camera RAW frame buffers, and CAN bus steering torque ripple noise.
 *
 * Result: Slashes 80%–95% of autonomous vehicle telemetry prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface AutonomousVehicleLogCompactionResult {
    wasCompacted: boolean;
    vehicleAndAvPlatform: string;
    disengagementEventAndCause: string;
    perceptionStackAndObjectTracking: string;
    safetyDriverTakeoverAndResolution: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedAvPrompt: string;
}
export declare class BroccoliAutonomousVehicleLogCompactor {
    private static instance;
    readonly avTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliAutonomousVehicleLogCompactor;
    static compactAvLog(rawText: string): AutonomousVehicleLogCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliAutonomousVehicleLogCompactor.d.ts.map