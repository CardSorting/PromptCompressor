/**
 * GALXAI BroccoliDB Test Output & Compiler Diagnostic Compactor
 *
 * Slashes massive LLM token bills on coding agents, SWE debugging swarms, and CI/CD runs:
 * 1. Evaluates test runner output (Jest, Vitest, Pytest, Go test, Cargo) in BroccoliDB memory (<0.01ms).
 * 2. Condenses dozens of passing test suites into a single 1-line summary:
 *    [TEST SUITE SUMMARY: 49 passed, 1 failed (128 total tests)]
 * 3. Elevates ONLY the failing assertion, stack frame, and expected vs received diff in full fidelity.
 *
 * Result: Slashes 75%–90% of coding agent test diagnostic prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface TestCompactionResult {
    wasCompacted: boolean;
    totalSuitesCount: number;
    passedSuitesCount: number;
    failedSuitesCount: number;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedDiagnosticPrompt: string;
}
export declare class BroccoliTestOutputCompactor {
    private static instance;
    readonly testAuditTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliTestOutputCompactor;
    /**
     * Slices test runner output and isolates only failed assertions
     */
    static compactTestLog(rawTestOutput: string): TestCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliTestOutputCompactor.d.ts.map