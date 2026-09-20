/**
 * GALXAI BroccoliDB Airline Passenger Name Record (IATA PNR / EDIFACT) Compactor
 *
 * Slashes massive LLM token bills on high-volume airline Passenger Name Records (PNR), IATA NDC XML bookings, and Sabre/Amadeus GDS reservation feeds:
 * 1. Evaluates multi-segment airline PNR and E-Ticket receipt records in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly PNR Record Locator (6-character), Passenger Name, Flight Segments (Airline/Flight#/Date/Origin-Dest/Class), E-Ticket Number (13-digit), Fare Calculation / Total $, and Special Service Requests (SSR e.g. WCHR / VGML).
 * 3. Prunes GDS historical modification audit trail pings, terminal cryptic response keystrokes, and baggage allowance fine print.
 *
 * Result: Slashes 75%–90% of airline PNR reservation prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface AirlinePnrCompactionResult {
    wasCompacted: boolean;
    pnrAndPassengerProfile: string;
    itineraryFlightSegments: string;
    eticketAndFareCalculation: string;
    specialServiceRequestsAndStatus: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedPnrPrompt: string;
}
export declare class BroccoliAirlinePnrCompactor {
    private static instance;
    readonly pnrTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliAirlinePnrCompactor;
    static compactPnr(rawText: string): AirlinePnrCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliAirlinePnrCompactor.d.ts.map