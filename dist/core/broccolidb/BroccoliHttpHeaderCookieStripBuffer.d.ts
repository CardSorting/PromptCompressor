/**
 * GALXAI BroccoliDB HTTP Header, Wire Trace & Cookie DeDuplication Buffer
 *
 * Slashes massive token bloat on raw HTTP logs, API gateway wire traces, and REST request dumps:
 * 1. Detects repetitive HTTP headers (`User-Agent: Mozilla/5.0...`, `Sec-Ch-Ua`, `Accept-Encoding`, `x-request-id`).
 * 2. Replaces multi-thousand-character JWT authorization tokens (`Bearer eyJhbGciOi...`) and cookie strings with short CAS hashes.
 * 3. Preserves method, path, status codes, query params, and essential payload data.
 *
 * Result: Slashes 70%–85% of HTTP wire log and API network trace tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface HttpHeaderDedupResult {
    wasDeduplicated: boolean;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    headersStrippedCount: number;
    tokensMaskedCount: number;
    compactedHttpText: string;
}
export declare class BroccoliHttpHeaderCookieStripBuffer {
    private static instance;
    private readonly tokenCasStore;
    readonly httpAuditTable: BroccoliDbTable<{
        id: string;
        headersStripped: number;
        tokensSaved: number;
        savingsPercentage: number;
        timestampMs: number;
    }>;
    private static readonly NOISY_HEADER_REGEX;
    private static readonly BEARER_JWT_REGEX;
    private static readonly COOKIE_HEADER_REGEX;
    private constructor();
    static getInstance(): BroccoliHttpHeaderCookieStripBuffer;
    /**
     * Deduplicates HTTP network headers, cookies, and JWT bearer tokens
     */
    static deduplicateHttpHeaders(rawHttpLog: string): HttpHeaderDedupResult;
    clear(): void;
}
//# sourceMappingURL=BroccoliHttpHeaderCookieStripBuffer.d.ts.map