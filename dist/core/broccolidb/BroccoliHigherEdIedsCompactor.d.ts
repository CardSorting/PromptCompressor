/**
 * GALXAI BroccoliDB Higher Education IPEDS & Title IV Financial Aid Compactor
 *
 * Slashes massive LLM token bills on university Integrated Postsecondary Education Data System (IPEDS) surveys and Title IV institutional reporting:
 * 1. Evaluates multi-module higher education regulatory data sets in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Institution Name / IPEDS UNITID / OPEID, 12-Month Headcount Enrollment (FTE), 6-Year Graduation Rate %, Pell Grant Recipient Share %, Institutional Financial Aid Endowments, and Cohort Default Rate (CDR %).
 * 3. Prunes IPEDS survey data dictionary definitions, campus dining hall meal plan breakdown tables, and administrative survey submission instructions.
 *
 * Result: Slashes 75%–90% of higher education regulatory prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface HigherEdIedsCompactionResult {
    wasCompacted: boolean;
    institutionAndUnitId: string;
    enrollmentAndFteMetrics: string;
    retentionGraduationAndPell: string;
    financialAidAndCohortDefaultRate: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedIpedsPrompt: string;
}
export declare class BroccoliHigherEdIedsCompactor {
    private static instance;
    readonly ipedsTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliHigherEdIedsCompactor;
    static compactIpeds(rawText: string): HigherEdIedsCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliHigherEdIedsCompactor.d.ts.map