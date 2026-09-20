/**
 * GALXAI BroccoliDB Usage-Based Insurance (UBI) & Connected Vehicle Telematics Compactor
 *
 * Slashes massive LLM token bills on auto insurance UBI telematics feeds (Progressive Snapshot, State Farm Drive Safe & Save, Root Insurance):
 * 1. Evaluates 30-day driving behavioral sensor telemetry in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Policyholder/VIN, Total Miles Driven, Hard Braking Events/100 miles, Rapid Accelerations, Cornering G-Forces, Night Driving %, and Driving Safety Score (0-100).
 * 3. Prunes continuous 1Hz GPS breadcrumb trails, OBD-II bus ping handshakes, and smartphone gyroscope vibration noise.
 *
 * Result: Slashes 80%–95% of UBI telematics prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface UbiTelematicsCompactionResult {
    wasCompacted: boolean;
    policyholderAndVehicle: string;
    mileageAndDrivingExposure: string;
    behavioralEventsAndGForce: string;
    safetyScoreAndPremiumDiscount: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedUbiPrompt: string;
}
export declare class BroccoliUbiTelematicsCompactor {
    private static instance;
    readonly ubiTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliUbiTelematicsCompactor;
    static compactUbi(rawText: string): UbiTelematicsCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliUbiTelematicsCompactor.d.ts.map