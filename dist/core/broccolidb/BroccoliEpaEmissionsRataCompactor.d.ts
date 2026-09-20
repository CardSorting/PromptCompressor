/**
 * GALXAI BroccoliDB EPA Clean Air Act Continuous Emissions (CEMS / RATA 40 CFR 75) Compactor
 *
 * Slashes massive LLM token bills on power plant Continuous Emission Monitoring Systems (CEMS) and Relative Accuracy Test Audit (RATA 40 CFR Part 75/60) reports:
 * 1. Evaluates 100+ page emissions stack test audit files in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Generating Station / Stack ID, Pollutant Monitored (NOx lb/MMBtu, SO2 ppm, CO2 %, Flow scfh), Reference Method (RM) vs CEMS Mean Values, Relative Accuracy (RA %), and Compliance Determination.
 * 3. Prunes 9-run raw calibration gas bottle cylinder certificates, EPA test protocol method prose, and traverse point pitot tube differential pressures.
 *
 * Result: Slashes 75%–90% of environmental CEMS regulatory prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface EpaEmissionsRataCompactionResult {
    wasCompacted: boolean;
    facilityAndStackSource: string;
    pollutantsAndReferenceMethods: string;
    relativeAccuracyCalculationsAndRa: string;
    regulatoryComplianceAndPassStatus: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedRataPrompt: string;
}
export declare class BroccoliEpaEmissionsRataCompactor {
    private static instance;
    readonly rataTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliEpaEmissionsRataCompactor;
    static compactEpaRata(rawText: string): EpaEmissionsRataCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliEpaEmissionsRataCompactor.d.ts.map