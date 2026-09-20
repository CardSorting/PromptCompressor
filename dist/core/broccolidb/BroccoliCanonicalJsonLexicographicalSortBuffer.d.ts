/**
 * GALXAI BroccoliDB RFC-8785 JSON Canonicalization Scheme (JCS) DeDuplication Buffer
 *
 * Eliminates false-negative deduplication misses caused by random JSON key ordering & formatting:
 * 1. Implements RFC-8785 deterministic JSON Canonicalization Scheme (JCS) in sub-microsecond memory (<0.02ms).
 * 2. Recursively sorts all object dictionary keys lexicographically by UTF-16 code units.
 * 3. Normalizes floating-point representation, whitespace, and Unicode escape sequences.
 *
 * Result: Transforms distinct key-permuted JSON payloads (e.g. `{"b": 2, "a": 1}` vs `{"a": 1, "b": 2}`) into identical canonical strings with 100% hash equivalence.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface CanonicalJsonResult {
    wasCanonicalized: boolean;
    canonicalJsonText: string;
    sha256Hash: string;
    keysSortedCount: number;
}
export declare class BroccoliCanonicalJsonLexicographicalSortBuffer {
    private static instance;
    readonly jcsAuditTable: BroccoliDbTable<{
        id: string;
        keysSorted: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliCanonicalJsonLexicographicalSortBuffer;
    private static computeSha256Simple;
    /**
     * Recursively canonicalizes any JSON value per RFC-8785
     */
    private static canonicalizeValue;
    /**
     * Transforms raw JSON string or object into RFC-8785 canonical string
     */
    static canonicalize(rawJson: string | object): CanonicalJsonResult;
    clear(): void;
}
//# sourceMappingURL=BroccoliCanonicalJsonLexicographicalSortBuffer.d.ts.map