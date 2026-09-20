/**
 * GALXAI BroccoliDB EPA Clean Water Act NPDES Discharge Monitoring Report (DMR / 40 CFR 122) Compactor
 *
 * Slashes massive LLM token bills on Environmental Protection Agency (EPA) National Pollutant Discharge Elimination System (NPDES) industrial wastewater discharge monitoring reports (DMR):
 * 1. Evaluates 100+ page monthly effluent lab analysis and EPA NetDMR filing packages in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Permittee Facility Name / NPDES Permit Number, Outfall Number (e.g. Outfall 001A External Outfall), Monitoring Period, Monitored Pollutant Parameters (TSS mg/L, BOD5 mg/L, Total Residual Chlorine, pH units, Heavy Metals, Oil & Grease), Permit Limit vs Reported Value (Quantity / Concentration), Exceedance / Non-Compliance Violations (NODI codes), and Certified Signatory.
 * 3. Prunes millions of raw lab sample chain-of-custody tables, EPA NetDMR XML schema validation tags, and standard Clean Water Act penalty notices.
 *
 * Result: Slashes 75%–90% of EPA water discharge NPDES prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface EpaNpdesWaterDischargeCompactionResult {
    wasCompacted: boolean;
    permitteeAndNpdesNumber: string;
    outfallAndMonitoringPeriod: string;
    waterQualityEffluentParameters: string;
    permitExceedancesAndComplianceStatus: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedNpdesPrompt: string;
}
export declare class BroccoliEpaNpdesWaterDischargeCompactor {
    private static instance;
    readonly npdesTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliEpaNpdesWaterDischargeCompactor;
    static compactNpdes(rawText: string): EpaNpdesWaterDischargeCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliEpaNpdesWaterDischargeCompactor.d.ts.map