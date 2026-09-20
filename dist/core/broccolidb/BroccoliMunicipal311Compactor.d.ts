/**
 * GALXAI BroccoliDB Municipal 311 & Public Works Citizen Request Compactor
 *
 * Slashes massive LLM token bills on high-volume Open311 municipal CRM feeds, public works service requests, and citizen reporting streams:
 * 1. Evaluates thousands of civic service tickets in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Ticket ID, Service Category (Pothole/Water Main/Traffic Signal), GPS Coordinates/Address, SLA Due Date, and Resolution Status.
 * 3. Prunes citizen conversational back-and-forth, standard city charter mission statements, and automated email confirmation headers.
 *
 * Result: Slashes 75%–90% of municipal 311 prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface Municipal311CompactionResult {
    wasCompacted: boolean;
    ticketAndServiceCategory: string;
    locationAndDepartmentRouting: string;
    slaAndPriorityStatus: string;
    fieldCrewActionAndResolution: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compacted311Prompt: string;
}
export declare class BroccoliMunicipal311Compactor {
    private static instance;
    readonly m311Table: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliMunicipal311Compactor;
    static compact311(rawText: string): Municipal311CompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliMunicipal311Compactor.d.ts.map