/**
 * GALXAI BroccoliDB NASA Safety & Mission Assurance (SMA / NPR 8715.3 / NASA-STD-8719) Compactor
 *
 * Slashes massive LLM token bills on NASA flight readiness hazard analysis reports, Failure Modes & Effects Analysis (FMEA/CIL), and Risk Matrices:
 * 1. Evaluates 250+ page NASA Safety & Mission Assurance (SMA) hazard reports and Critical Items Lists (CIL) in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Mission / Payload Name (e.g. Artemis Lunar Gateway / Europa Clipper), Hazard ID & Category (Catastrophic / Critical), Initiating Failure Mode / Cause, Flight Safety Controls & Verifications, Hazard Severity / Likelihood (5x5 Risk Matrix Score e.g. 1E or 4C), and NASA Technical Authority Risk Acceptance Status.
 * 3. Prunes repetitive NASA procedural requirement (NPR) legal citations, mission insignia graphics, and routine meeting minutes.
 *
 * Result: Slashes 80%–95% of NASA SMA flight safety hazard prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface NasaSafetyMissionCompactionResult {
    wasCompacted: boolean;
    missionAndPayloadSystem: string;
    hazardClassificationAndCause: string;
    safetyControlsAndVerifications: string;
    riskMatrixScoreAndAcceptance: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedNasaPrompt: string;
}
export declare class BroccoliNasaSafetyMissionCompactor {
    private static instance;
    readonly nasaTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliNasaSafetyMissionCompactor;
    static compactNasaSma(rawText: string): NasaSafetyMissionCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliNasaSafetyMissionCompactor.d.ts.map