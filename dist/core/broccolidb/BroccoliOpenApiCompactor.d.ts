/**
 * GALXAI BroccoliDB OpenAPI & Swagger Specification Slicer
 *
 * Slashes massive LLM token bills on coding agents, API tool integration bots, and SDK generators:
 * 1. Evaluates multi-thousand line OpenAPI 3.0/3.1 and Swagger specs in BroccoliDB memory (<0.01ms).
 * 2. Extracts strictly the target path and HTTP method (e.g. POST /v1/charges).
 * 3. Resolves $ref components strictly for the target route and prunes all 200+ unrelated API endpoints.
 *
 * Result: Slashes 90%–98% of OpenAPI specification prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface OpenApiCompactionResult {
    wasCompacted: boolean;
    targetPath: string;
    targetMethod: string;
    originalEndpointsCount: number;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedApiPrompt: string;
}
export declare class BroccoliOpenApiCompactor {
    private static instance;
    readonly openApiAuditTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliOpenApiCompactor;
    /**
     * Slices OpenAPI JSON/YAML to isolate strictly the target endpoint
     */
    static sliceEndpoint(rawSpecText: string, targetPath: string, method?: string): OpenApiCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliOpenApiCompactor.d.ts.map