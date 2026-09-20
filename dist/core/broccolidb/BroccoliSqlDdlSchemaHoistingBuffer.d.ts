/**
 * GALXAI BroccoliDB SQL DDL Schema & Constraint Hoisting DeDuplication Buffer
 *
 * Slashes massive boilerplate across multi-table SQL schemas and migration dumps:
 * 1. Hoists repetitive SQL column definitions (e.g. `id UUID PRIMARY KEY DEFAULT gen_random_uuid()`, `created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()`).
 * 2. Deduplicates repetitive foreign key constraints and index templates.
 * 3. Factors full SQL schemas into a concise schema definition header + table entity deltas.
 *
 * Result: Slashes 55%–75% of repetitive SQL migration and database DDL tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface SqlDdlDedupResult {
    wasDeduplicated: boolean;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    tablesProcessed: number;
    constraintsHoisted: number;
    compactedSqlText: string;
}
export declare class BroccoliSqlDdlSchemaHoistingBuffer {
    private static instance;
    readonly sqlAuditTable: BroccoliDbTable<{
        id: string;
        tablesProcessed: number;
        tokensSaved: number;
        savingsPercentage: number;
        timestampMs: number;
    }>;
    private static readonly COMMON_AUDIT_COLS_REGEX;
    private static readonly UUID_PK_REGEX;
    private constructor();
    static getInstance(): BroccoliSqlDdlSchemaHoistingBuffer;
    /**
     * Deduplicates repetitive SQL DDL statements and hoists audit columns
     */
    static deduplicateSqlDdl(sqlText: string): SqlDdlDedupResult;
    clear(): void;
}
//# sourceMappingURL=BroccoliSqlDdlSchemaHoistingBuffer.d.ts.map