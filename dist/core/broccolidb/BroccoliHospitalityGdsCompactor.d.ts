/**
 * GALXAI BroccoliDB Global Distribution System (GDS / OTA) Hotel Reservation Compactor
 *
 * Slashes massive LLM token bills on high-volume hotel booking payloads (Amadeus, Sabre, Travelport, HTNG / OTA XML):
 * 1. Evaluates multi-page hotel reservation XML/JSON messages in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Guest Name, Hotel Property Code / Brand, Stay Dates (Check-in/Check-out), Room Type Code, Rate Plan / Average Daily Rate (ADR $), Total Reservation Amount $, and Cancellation Policy Deadline.
 * 3. Prunes hotel marketing amenities lists, property photo URL arrays, and GDS EDIFACT control envelopment text.
 *
 * Result: Slashes 75%–90% of hospitality GDS reservation prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface HospitalityGdsCompactionResult {
    wasCompacted: boolean;
    guestAndHotelProperty: string;
    stayDatesAndRoomCategory: string;
    ratePlanAndTotalFinancials: string;
    cancellationPolicyAndGuarantee: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedGdsPrompt: string;
}
export declare class BroccoliHospitalityGdsCompactor {
    private static instance;
    readonly gdsTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliHospitalityGdsCompactor;
    static compactGdsReservation(rawText: string): HospitalityGdsCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliHospitalityGdsCompactor.d.ts.map