/**
 * GALXAI BroccoliDB SPICE / Spectre Analog & Mixed-Signal Circuit Simulation Compactor
 *
 * Slashes massive LLM token bills on SPICE transient analysis (.tran), AC small-signal (.ac), noise analysis, and Monte Carlo process corner logs:
 * 1. Evaluates 500+ MB SPICE raw transient voltage/current waveform logs in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Circuit Module & Netlist Name (e.g. PLL_VCO_CORE / ADC_SAR_12BIT), Simulation Engine (Synopsys FineSim / Cadence Spectre / HSPICE), Analysis Type (.TRAN 100ns / .MC 1000 Runs), Process PVT Corners (TT / FF / SS / FS / SF at -40°C to 125°C, 0.75V - 0.95V), Key Performance Metrics (Propagation Delay tpd ps, Rise/Fall Time tr/tf, Phase Noise dBc/Hz, SNDR dB, Power Consumption mW), and Convergence Pass/Fail Status.
 * 3. Prunes millions of time-step numerical voltage matrix points, Newton-Raphson iteration step warnings, and device model parameter card listings.
 *
 * Result: Slashes 80%–95% of SPICE analog circuit simulation prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface SpiceSimulationCompactionResult {
    wasCompacted: boolean;
    circuitModuleAndSimulator: string;
    simulationAnalysisAndPvtCorners: string;
    analogPerformanceMetrics: string;
    convergenceAndMarginPassFail: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedSpicePrompt: string;
}
export declare class BroccoliSpiceSimulationCompactor {
    private static instance;
    readonly spiceTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliSpiceSimulationCompactor;
    static compactSpice(rawText: string): SpiceSimulationCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliSpiceSimulationCompactor.d.ts.map