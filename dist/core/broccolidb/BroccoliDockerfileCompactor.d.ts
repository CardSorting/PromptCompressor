/**
 * GALXAI BroccoliDB Dockerfile & Container Layer Compactor
 *
 * Slashes massive LLM token bills on DevOps agents, CI/CD swarms, and containerization bots:
 * 1. Evaluates multi-stage Dockerfiles and container configs in BroccoliDB memory (<0.01ms).
 * 2. Prunes repetitive multi-line OS package install scripts (apt-get update && apt-get install -y...).
 * 3. Extracts strictly the base image, runtime dependencies, exposed ports, and final entrypoint command:
 *    [STAGE runner: FROM node:20-alpine | EXPOSE 3000 | CMD ["node", "server.js"]]
 *
 * Result: Slashes 65%–80% of Docker container configuration prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface DockerCompactionResult {
    wasCompacted: boolean;
    baseImages: string[];
    exposedPorts: string[];
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedDockerPrompt: string;
}
export declare class BroccoliDockerfileCompactor {
    private static instance;
    readonly dockerAuditTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliDockerfileCompactor;
    /**
     * Compacts raw verbose multi-stage Dockerfile
     */
    static compactDockerfile(rawDockerfileText: string): DockerCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliDockerfileCompactor.d.ts.map