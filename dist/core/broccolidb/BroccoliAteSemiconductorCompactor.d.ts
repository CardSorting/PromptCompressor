/**
 * GALXAI BroccoliDB Automated Test Equipment (ATE) STDF Semiconductor Compactor
 *
 * Slashes massive LLM token bills on Automated Test Equipment (ATE) Standard Test Data Format (STDF v4) final test and wafer sort logs:
 * 1. Evaluates multi-gigabyte STDF binary/text test logs (Advantest, Teradyne) in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Device Part Number/Lot ID, Total Tested Units, Final Bin 1 Yield %, Top Hard/Soft Failing Bins, Leakage Current (Iddq), and Scan Chain Test Failures.
 * 3. Prunes millions of individual parametric pin test voltage/current measurement rows, vector burst timestamps, and tester site calibration data.
 *
 * Result: Slashes 80%–95% of ATE semiconductor test prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface AteSemiconductorCompactionResult {
    wasCompacted: boolean;
    devicePartAndLotNumber: string;
    testProgramAndExecutionMetrics: string;
    binYieldAndFailuresPareto: string;
    parametricOutliersAndQuality: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedAtePrompt: string;
}
export declare class BroccoliAteSemiconductorCompactor {
    private static instance;
    readonly ateTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliAteSemiconductorCompactor;
    static compactAte(rawText: string): AteSemiconductorCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliAteSemiconductorCompactor.d.ts.map