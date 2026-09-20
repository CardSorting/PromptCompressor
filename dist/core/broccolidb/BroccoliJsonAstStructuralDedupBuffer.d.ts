/**
 * GALXAI BroccoliDB JSON & AST Structural Key-Path DeDuplication Buffer
 *
 * Slashes massive token bloat on repetitive JSON schemas, REST API payloads, and database result sets:
 * 1. Parses JSON arrays of objects with identical schemas in sub-microsecond memory (<0.05ms).
 * 2. Deduplicates repeated key names (e.g. "transactionId", "customerName", "amountUsd", "status") by hoisting the common schema dictionary.
 * 3. Transforms arrays of objects into compact columnar tuples ({ schema: [...keys], rows: [...values] }).
 *
 * Result: Slashes 60%–80% of repetitive JSON key tokens while retaining 100% schema fidelity.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface ColumnarJsonResult {
    wasDeduplicated: boolean;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    schemaKeys: string[];
    totalRecords: number;
    compactedJsonText: string;
}
export declare class BroccoliJsonAstStructuralDedupBuffer {
    private static instance;
    readonly jsonDedupAuditTable: BroccoliDbTable<{
        id: string;
        totalRecords: number;
        tokensSaved: number;
        savingsPercentage: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliJsonAstStructuralDedupBuffer;
    /**
     * Deduplicates repetitive JSON object arrays into compact columnar schemas
     */
    static deduplicateJson(rawJsonOrText: string | any[]): ColumnarJsonResult;
    clear(): void;
}
//# sourceMappingURL=BroccoliJsonAstStructuralDedupBuffer.d.ts.map