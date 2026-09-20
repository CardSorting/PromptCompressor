/**
 * GALXAI BroccoliDB Lockfile & Dependency Tree Compactor
 *
 * Slashes massive LLM token bills on coding agents, SWE vulnerability swarms, and dependency upgrade bots:
 * 1. Evaluates multi-thousand line `package-lock.json`, `pnpm-lock.yaml`, and `Cargo.lock` files in BroccoliDB memory (<0.01ms).
 * 2. Prunes integrity sha512 hashes, registry tarball URLs, and dev flags.
 * 3. Compresses verbose JSON package entries into dense name@version mappings:
 *    [PACKAGES: zod@3.22.4, stripe@14.14.0, @supabase/ssr@0.1.0]
 *
 * Result: Slashes 85%–95% of dependency tree and lockfile prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface LockfileCompactionResult {
    wasCompacted: boolean;
    totalPackagesCount: number;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedDependencyPrompt: string;
}
export declare class BroccoliLockfileCompactor {
    private static instance;
    readonly lockAuditTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliLockfileCompactor;
    /**
     * Compacts raw lockfile text into dense name@version listings
     */
    static compactLockfile(rawLockfileText: string): LockfileCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliLockfileCompactor.d.ts.map