/**
 * GALXAI BroccoliDB Bit-Packed Boolean Flags & Bitfield Array DeDuplication Buffer
 *
 * Slashes massive boolean dictionary token bloat on permission sets, feature flags, and entity state lists:
 * 1. Collects repetitive boolean key-value dictionaries (`{"is_active": true, "has_mfa": true, "is_verified": false, "can_write": true}`).
 * 2. Packs up to 64 boolean flags per record into a single 64-bit integer bitfield word (`0x2B`).
 * 3. Hoists the shared boolean flag schema into a single dictionary header with 100% reversible boolean unpacking.
 *
 * Result: Slashes 80%–92% of boolean dictionary tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface BitPackedBooleanResult {
    wasPacked: boolean;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    totalRecords: number;
    flagKeys: string[];
    compactedBitmaskText: string;
}
export declare class BroccoliBitPackedBooleanMaskBuffer {
    private static instance;
    readonly bitpackAuditTable: BroccoliDbTable<{
        id: string;
        totalRecords: number;
        tokensSaved: number;
        savingsPercentage: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliBitPackedBooleanMaskBuffer;
    /**
     * Packs an array of boolean objects into a compact bitmask schema frame
     */
    static packBooleanRecords(records: Array<Record<string, boolean>>): BitPackedBooleanResult;
    /**
     * Unpacks a bitfield schema frame back into the original boolean records
     */
    static unpackBooleanRecords(bitmaskText: string): Array<Record<string, boolean>>;
    clear(): void;
}
//# sourceMappingURL=BroccoliBitPackedBooleanMaskBuffer.d.ts.map