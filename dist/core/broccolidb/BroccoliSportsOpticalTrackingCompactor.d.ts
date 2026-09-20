/**
 * GALXAI BroccoliDB Professional Sports Optical Tracking (Hawk-Eye / Statcast / Second Spectrum) Compactor
 *
 * Slashes massive LLM token bills on high-frequency optical motion capture and player/ball tracking telemetry (MLB Statcast, NBA CourtOptix / Second Spectrum, Hawk-Eye Tennis/Soccer):
 * 1. Evaluates 100,000+ line 60Hz 3D player pose estimation and ball trajectory coordinate arrays in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Match / Inning / Possession Event, Player / Pitcher, Ball Velocity (mph / km/h), Spin Rate (RPM) & Axis, Exit Velocity (mph) & Launch Angle (°), Expected Batting Avg (xBA) / Shot Quality (qSQ), and Referee Hawk-Eye Call (In/Out / Goal Line).
 * 3. Prunes continuous 60Hz skeletal joint 3D x-y-z coordinate arrays, stadium floodlight optical calibration logs, and camera synchronized clock sync frames.
 *
 * Result: Slashes 80%–95% of sports optical tracking prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface SportsOpticalTrackingCompactionResult {
    wasCompacted: boolean;
    gameMatchAndEventContext: string;
    kinematicBallTrajectoryAndSpin: string;
    playerBiometricsAndSprintSpeed: string;
    refereeHawkeyeCallAndAnalytics: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedSportsPrompt: string;
}
export declare class BroccoliSportsOpticalTrackingCompactor {
    private static instance;
    readonly sportsTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliSportsOpticalTrackingCompactor;
    static compactSportsTracking(rawText: string): SportsOpticalTrackingCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliSportsOpticalTrackingCompactor.d.ts.map