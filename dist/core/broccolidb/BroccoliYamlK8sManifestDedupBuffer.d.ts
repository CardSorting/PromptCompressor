/**
 * GALXAI BroccoliDB Kubernetes YAML & Cloud Infrastructure Manifest DeDuplication Buffer
 *
 * Slashes massive boilerplate across multi-resource Kubernetes, Helm, and CloudFormation manifests:
 * 1. Hoists repetitive Kubernetes metadata (`apiVersion`, `namespace`, common labels, pod security contexts) across YAML documents (`---`).
 * 2. Deduplicates shared environment variables (`envFrom`, configMapRefs, secretRefs) into a single overlay dictionary.
 * 3. Factors multi-resource YAML files into a concise resource matrix with delta overrides.
 *
 * Result: Slashes 50%–70% of Kubernetes & Helm infrastructure YAML tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface YamlManifestDedupResult {
    wasDeduplicated: boolean;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    manifestDocsProcessed: number;
    compactedYamlText: string;
}
export declare class BroccoliYamlK8sManifestDedupBuffer {
    private static instance;
    readonly yamlAuditTable: BroccoliDbTable<{
        id: string;
        docsProcessed: number;
        tokensSaved: number;
        savingsPercentage: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliYamlK8sManifestDedupBuffer;
    /**
     * Deduplicates multi-document YAML manifests
     */
    static deduplicateYaml(yamlText: string): YamlManifestDedupResult;
    clear(): void;
}
//# sourceMappingURL=BroccoliYamlK8sManifestDedupBuffer.d.ts.map