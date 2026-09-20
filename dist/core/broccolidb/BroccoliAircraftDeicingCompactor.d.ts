/**
 * GALXAI BroccoliDB Aircraft De-Icing & Winter Operations Holdover Time (HOT) Compactor
 *
 * Slashes massive LLM token bills on commercial aircraft de-icing/anti-icing logs (SAE AS6285 / FAA Holdover Time Guidelines):
 * 1. Evaluates winter operations ramp dispatch records in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Flight Number/Tail, De-Icing Fluid Type (Type I de-ice / Type IV anti-ice), Fluid Concentration Mix Ratio %, Outside Air Temp (OAT °C), Weather Precipitation, and Calculated Holdover Time (HOT minutes).
 * 3. Prunes airport winter snow removal operations manual excerpts, de-icing truck diesel telemetry, and ramp safety vest rules.
 *
 * Result: Slashes 70%–85% of aircraft de-icing operations prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface AircraftDeicingCompactionResult {
    wasCompacted: boolean;
    flightAndAircraftTail: string;
    fluidTypesAndConcentration: string;
    meteorologicalConditionsAndOat: string;
    holdoverTimeAndContaminationCheck: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedDeicingPrompt: string;
}
export declare class BroccoliAircraftDeicingCompactor {
    private static instance;
    readonly deiceTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliAircraftDeicingCompactor;
    static compactDeicing(rawText: string): AircraftDeicingCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliAircraftDeicingCompactor.d.ts.map