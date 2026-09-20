/**
 * GALXAI BroccoliDB Defense & Aerospace MIL-STD-810H / MIL-STD-461G Environmental Test Compactor
 *
 * Slashes massive LLM token bills on defense ruggedization and qualification test reports (MIL-STD-810H Vibration/Thermal Shock, MIL-STD-461G EMI/EMC, DO-160G):
 * 1. Evaluates 100+ page defense environmental test lab reports in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Unit Under Test (UUT) Part/Cage Code, Test Standard/Method (810H Method 514.8 Vibration / 461G RE102 Radiated Emissions), Test Severity Profile (Grms / dBµV/m), Functional Pass/Fail Outcome, and Structural Anomaly Log.
 * 3. Prunes thermal chamber thermocouple calibration certificates, electromagnetic anechoic chamber antenna positioning logs, and military specification glossaries.
 *
 * Result: Slashes 75%–90% of defense qualification test prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface MilStdDefenseCompactionResult {
    wasCompacted: boolean;
    unitUnderTestAndCageCode: string;
    militaryStandardAndTestMethod: string;
    testProfileAndStressLevels: string;
    functionalOutcomeAndAnomalies: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedMilPrompt: string;
}
export declare class BroccoliMilStdDefenseCompactor {
    private static instance;
    readonly milTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliMilStdDefenseCompactor;
    static compactMilStd(rawText: string): MilStdDefenseCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliMilStdDefenseCompactor.d.ts.map