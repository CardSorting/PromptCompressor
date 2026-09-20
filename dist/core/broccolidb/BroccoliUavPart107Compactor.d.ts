/**
 * GALXAI BroccoliDB Commercial Drone & UAV FAA Part 107 Flight Log Compactor
 *
 * Slashes massive LLM token bills on commercial drone flight logs, FAA Part 107 airspace authorizations (LAANC), and sensor payload missions:
 * 1. Evaluates multi-hour UAV flight telemetry in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Remote Pilot in Command (RPIC), FAA Registration #, LAANC Airspace Authorization, Max Altitude AGL (ft), Battery Voltage Depletion %, and Geofence/RTH Status.
 * 3. Prunes continuous 10Hz GPS waypoint coordinates, IMU accelerometer gyro noise, and video gimbal motor PID loop logs.
 *
 * Result: Slashes 80%–95% of commercial UAV telemetry prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface UavPart107CompactionResult {
    wasCompacted: boolean;
    rpicAndDroneRegistration: string;
    airspaceAndLaancAuthorization: string;
    flightParametersAndBatteryHealth: string;
    missionPayloadAndGeofenceSafety: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedUavPrompt: string;
}
export declare class BroccoliUavPart107Compactor {
    private static instance;
    readonly uavTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliUavPart107Compactor;
    static compactUav(rawText: string): UavPart107CompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliUavPart107Compactor.d.ts.map