/**
 * GALXAI BroccoliDB Municipal Building Department Permit & Plan Check Compactor
 *
 * Slashes massive LLM token bills on municipal building permit applications, plan check correction notices, and certificate of occupancy (CO) records:
 * 1. Evaluates multi-discipline building plan review correction sheets in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Permit Application Number, Building Jurisdiction, Occupancy Classification (IBC Group B / R-2), Construction Type (Type I-A / V-B), Valuation $, Plan Check Hold Items (Structural/Fire/MEP), and Permit Issuance Status.
 * 3. Prunes municipal fee calculation schedules, local city council member lists, and boilerplate building code section citations.
 *
 * Result: Slashes 70%–85% of municipal building permit prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface BuildingPermitCompactionResult {
    wasCompacted: boolean;
    permitAndJurisdiction: string;
    occupancyAndConstructionType: string;
    valuationAndPlanCheckDisciplines: string;
    correctionHoldsAndPermitStatus: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedPermitPrompt: string;
}
export declare class BroccoliBuildingPermitCompactor {
    private static instance;
    readonly permitTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliBuildingPermitCompactor;
    static compactPermit(rawText: string): BuildingPermitCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliBuildingPermitCompactor.d.ts.map