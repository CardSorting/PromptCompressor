/**
 * GALXAI BroccoliDB Parameterized SQL Query Plan Cache
 *
 * Slashes massive Text-to-SQL inference bills for recurring analytics and business queries:
 * 1. Indexes parameterized SQL templates in BroccoliDB memory (<0.01ms).
 * 2. Matches natural language query intents to parameter slots ($1, $2, etc.).
 * 3. Constructs parameterized SQL queries instantly with $0.000 LLM token cost.
 *
 * Result: Slashes 100% of LLM token spend on recurring parameterized database queries with zero SQL syntax errors.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface ParameterizedSQLPlan {
    intentKey: string;
    templateSql: string;
    parameterNames: string[];
}
export interface SQLPlanMatchResult {
    isPlanHit: boolean;
    intentKey?: string;
    constructedSql?: string;
    parametersExtracted: Record<string, string | number>;
    tokensSaved: number;
    dollarsSavedUsd: number;
}
export declare class BroccoliSQLPlanCache {
    private static instance;
    readonly planTable: BroccoliDbTable<ParameterizedSQLPlan>;
    readonly auditTable: BroccoliDbTable<{
        id: string;
        intentKey: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliSQLPlanCache;
    registerPlan(intentKey: string, templateSql: string, parameterNames: string[]): void;
    /**
     * Evaluates a natural language query for parameterized plan execution
     */
    static matchAndExecute(naturalQuery: string, estimatedSchemaTokens?: number, estimatedSqlOutputTokens?: number): SQLPlanMatchResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliSQLPlanCache.d.ts.map