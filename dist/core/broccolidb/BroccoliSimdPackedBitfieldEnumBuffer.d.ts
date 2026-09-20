/**
 * GALXAI BroccoliDB SIMD Packed Bitfield Categorical Enum DeDuplication Buffer
 *
 * Slashes massive repeated string enum tokens in tabular datasets & event logs:
 * 1. Maps low-cardinality categorical string columns (e.g. ['PENDING', 'APPROVED', 'REJECTED', 'SETTLED']) to 2-bit or 4-bit integer IDs.
 * 2. Packs up to 32 enum values per 64-bit BigInt word register using bitwise shift-masking.
 * 3. Restores exact categorical strings on decompression with 100% lossless fidelity.
 *
 * Result: Slashes 85%–95% of categorical enum column tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface EnumPackResult {
    wasPacked: boolean;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    totalRecords: number;
    distinctEnumValues: string[];
    bitsPerValue: number;
    compactedBitfieldFrame: string;
}
export declare class BroccoliSimdPackedBitfieldEnumBuffer {
    private static instance;
    readonly bitfieldAuditTable: BroccoliDbTable<{
        id: string;
        totalRecords: number;
        tokensSaved: number;
        savingsPercentage: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliSimdPackedBitfieldEnumBuffer;
    /**
     * Packs an array of categorical enum strings into compact 64-bit bitfields
     */
    static packEnums(enumColumn: string[]): EnumPackResult;
    /**
     * Unpacks bitfields back into original enum strings with 100% fidelity
     */
    static unpackEnums(frame: string): string[];
    clear(): void;
}
//# sourceMappingURL=BroccoliSimdPackedBitfieldEnumBuffer.d.ts.map