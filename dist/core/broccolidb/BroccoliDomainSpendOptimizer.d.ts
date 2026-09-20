/**
 * GALXAI BroccoliDB 150-Domain Spend-Saving Enterprise Master Optimizer
 *
 * Automatically detects domain signatures across 150 enterprise domains spanning:
 * Legal, Clinical Medicine, Life Sciences, FinOps & Capital Markets, Lending & Real Estate,
 * Environmental, Public Safety, Insurance, Cyber & Tech, Aerospace, Automation & Robotics,
 * Supply Chain & Logistics, Energy & Mining, Media & Entertainment, and HR/Gov Contracting/Education.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
import { CompactionFidelityStatus } from './BroccoliCompactionSafety.js';
export interface DomainOptimizationResult {
    domain: string;
    cluster: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedPrompt: string;
    fidelityStatus: CompactionFidelityStatus;
    unsupportedFacts: string[];
}
export declare class BroccoliDomainSpendOptimizer {
    private static instance;
    readonly masterTable: BroccoliDbTable<{
        id: string;
        domain: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliDomainSpendOptimizer;
    static optimize(rawText: string, forcedDomain?: string): DomainOptimizationResult;
    static detectDomain(rawText: string): string;
    static clear(): void;
}
//# sourceMappingURL=BroccoliDomainSpendOptimizer.d.ts.map