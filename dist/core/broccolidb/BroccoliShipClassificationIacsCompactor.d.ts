/**
 * GALXAI BroccoliDB IACS Ship Classification Society Survey & Drydock Hull Integrity Compactor
 *
 * Slashes massive LLM token bills on International Association of Classification Societies (IACS e.g. DNV / ABS / Lloyd's Register / ClassNK) survey reports and ultrasonic thickness gauging (UTM):
 * 1. Evaluates 150+ page ship classification survey reports, drydock hull bottom inspection logs, and UTM thickness tables in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Ship Name / IMO Number, Classification Society (e.g. American Bureau of Shipping ABS), Survey Type (Special Survey No. 4 / Intermediate / Bottom Drydock), Hull Steel Ultrasonic Thickness Gauging (UTM Diminution % vs IACS Rules), Machinery / Tailshaft / Rudder Clearance (mm), Conditions of Class / Outstanding Recommendations, and Class Certificate Endorsement Status.
 * 3. Prunes thousands of raw plate UTM coordinate grids, standard class rule cross-references, and generic surveyor disclaimer prose.
 *
 * Result: Slashes 80%–95% of ship classification survey prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface ShipClassificationIacsCompactionResult {
    wasCompacted: boolean;
    vesselAndClassificationSociety: string;
    surveyTypeAndDrydockLocation: string;
    hullUtmSteelDiminutionAndMachinery: string;
    conditionsOfClassAndEndorsement: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedIacsPrompt: string;
}
export declare class BroccoliShipClassificationIacsCompactor {
    private static instance;
    readonly iacsTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliShipClassificationIacsCompactor;
    static compactIacs(rawText: string): ShipClassificationIacsCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliShipClassificationIacsCompactor.d.ts.map