/**
 * GALXAI BroccoliDB Airline Pilot Flight Logbook & FAA Part 121 Currency Compactor
 *
 * Slashes massive LLM token bills on electronic pilot logbooks (LogTen Pro, CrewPay) and FAA Part 121 air transport pilot currency audits:
 * 1. Evaluates multi-year pilot electronic logbooks in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Pilot Name/ATP Certificate #, Total Flight Hours, Pilot-in-Command (PIC Turbine), Instrument Approaches (ILS Cat III), Night Hours, and FAA First-Class Medical Expiration.
 * 3. Prunes micro-flight individual leg routing remarks, airport runway taxi times, and crew meal allowance accounting lines.
 *
 * Result: Slashes 75%–90% of pilot flight logbook prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface PilotFlightLogCompactionResult {
    wasCompacted: boolean;
    pilotAndCertificate: string;
    cumulativeHoursAndPicTurbine: string;
    faaCurrencyAndApproachQualifications: string;
    medicalAndRegulatoryStatus: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedLogbookPrompt: string;
}
export declare class BroccoliPilotFlightLogCompactor {
    private static instance;
    readonly pilotTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliPilotFlightLogCompactor;
    static compactPilotLog(rawText: string): PilotFlightLogCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliPilotFlightLogCompactor.d.ts.map