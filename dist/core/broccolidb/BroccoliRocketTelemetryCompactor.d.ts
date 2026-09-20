/**
 * GALXAI BroccoliDB Orbital Rocket Launch & Propulsion Telemetry Compactor
 *
 * Slashes massive LLM token bills on orbital launch vehicle countdown and ascent telemetry (SpaceX Falcon/Starship, Rocket Lab Electron, ULA Vulcan):
 * 1. Evaluates 1,000Hz rocket propulsion and avionics sensor telemetry in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Launch Vehicle/Mission, T-Timeline Events (Liftoff/Max-Q/MECO/Stage Separation/SECO), Main Engine Chamber Pressures (bar/psi), Gimbal TVC Angles, Dynamic Pressure (Max-Q kPa), and Autonomous Flight Termination System (AFTS).
 * 3. Prunes continuous sub-millisecond cryo tank slosh sensor oscillation arrays, valve solenoid coil PWM voltage waveforms, and umbilical purge logs.
 *
 * Result: Slashes 80%–95% of rocket launch telemetry prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface RocketTelemetryCompactionResult {
    wasCompacted: boolean;
    launchVehicleAndMission: string;
    tTimelineAndAscentMilestones: string;
    propulsionAndChamberPressures: string;
    guidanceNavigationAndAftsStatus: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedRocketPrompt: string;
}
export declare class BroccoliRocketTelemetryCompactor {
    private static instance;
    readonly rocketTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliRocketTelemetryCompactor;
    static compactRocket(rawText: string): RocketTelemetryCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliRocketTelemetryCompactor.d.ts.map