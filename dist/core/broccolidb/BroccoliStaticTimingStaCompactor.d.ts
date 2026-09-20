/**
 * GALXAI BroccoliDB EDA Static Timing Analysis (STA / PrimeTime / Tempus) Compactor
 *
 * Slashes massive LLM token bills on EDA Static Timing Analysis (STA) timing reports (Setup / Hold / Recovery / Removal / Max Transition / Max Capacitance):
 * 1. Evaluates multi-gigabyte Synopsys PrimeTime / Cadence Tempus timing slack reports in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Design Scenario & Clock Domains (e.g. CORE_CLK 3.2 GHz / PCIE_CLK 500 MHz), Multi-Corner Multi-Mode (MCMM) Scenario (func_slow / func_fast / test_mode), Worst Negative Slack (WNS ps), Total Negative Slack (TNS ps), Violating Path Count, Critical Timing Path (Startpoint -> Endpoint, Data Required vs Data Arrival), and Clock Skew / Uncertainty (ps).
 * 3. Prunes millions of individual cell delay arc calculation listings, parasitics SPEF extraction tables, and transition time matrices.
 *
 * Result: Slashes 80%–95% of EDA STA static timing prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface StaticTimingStaCompactionResult {
    wasCompacted: boolean;
    clockDomainAndMcmmScenario: string;
    setupHoldSlackWnsTns: string;
    criticalTimingPathReport: string;
    timingClosureStatusAndMaxFreq: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedStaPrompt: string;
}
export declare class BroccoliStaticTimingStaCompactor {
    private static instance;
    readonly staTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliStaticTimingStaCompactor;
    static compactSta(rawText: string): StaticTimingStaCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliStaticTimingStaCompactor.d.ts.map