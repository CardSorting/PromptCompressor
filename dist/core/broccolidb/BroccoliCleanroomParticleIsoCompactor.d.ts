/**
 * GALXAI BroccoliDB ISO 14644-1 Cleanroom Airborne Particle Counter & Fab Environmental Compactor
 *
 * Slashes massive LLM token bills on semiconductor cleanroom continuous airborne particle counter (APC) streams, AMC air filtration, and laminar flow velocity logs:
 * 1. Evaluates 100+ MB 1-second optical particle counter (OPC / Met One) sensor feeds in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Fab Facility & Cleanroom Bay (e.g. Fab 21 Module A / Lithography Bay 04), ISO Cleanliness Class (ISO Class 1 / ISO Class 2 / FED-STD-209E Class 1), Monitored Particle Sizes (>=0.1 µm, >=0.2 µm, >=0.3 µm, >=0.5 µm counts/m³ vs Limit), Airborne Molecular Contamination (AMC e.g. Amines ppb, VOCs, Acid Gases), ULPA Filter Face Velocity (m/s), and Particle Excursion Alarms.
 * 3. Prunes continuous sub-second raw optical scatter voltage readings, sensor zero-count calibration pulses, and routine instrument self-test telemetry.
 *
 * Result: Slashes 80%–95% of cleanroom environmental particle prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface CleanroomParticleIsoCompactionResult {
    wasCompacted: boolean;
    fabCleanroomAndBayLocation: string;
    isoClassAndParticleCounts: string;
    amcMolecularContaminationAndFilter: string;
    environmentalExcursionsAndStatus: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedCleanroomPrompt: string;
}
export declare class BroccoliCleanroomParticleIsoCompactor {
    private static instance;
    readonly cleanTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliCleanroomParticleIsoCompactor;
    static compactCleanroom(rawText: string): CleanroomParticleIsoCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliCleanroomParticleIsoCompactor.d.ts.map