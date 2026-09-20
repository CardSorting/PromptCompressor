/**
 * GALXAI BroccoliDB Kubernetes Manifest & Topology Slicer
 *
 * Slashes massive LLM token bills on cloud DevOps swarms, SRE bots, and infrastructure automation:
 * 1. Evaluates multi-hundred line Kubernetes YAML manifests in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Kind/Name/Namespace, Images & Replicas, Resources (CPU/RAM), and Failing Pod Status.
 * 3. Prunes managedFields, resourceVersion, uid, creationTimestamp, status conditions arrays, and volume defaults.
 *
 * Result: Slashes 75%–90% of Kubernetes YAML prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface K8sCompactionResult {
    wasCompacted: boolean;
    resourceKindAndName: string;
    replicasAndImage: string;
    resourceRequestsLimits: string;
    podStateOrErrors: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedK8sPrompt: string;
}
export declare class BroccoliK8sCompactor {
    private static instance;
    readonly k8sAuditTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliK8sCompactor;
    /**
     * Compacts raw Kubernetes YAML manifest or kubectl get -o yaml dump
     */
    static compactK8s(rawYamlText: string): K8sCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliK8sCompactor.d.ts.map