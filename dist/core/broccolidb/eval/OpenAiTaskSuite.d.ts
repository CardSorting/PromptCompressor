/**
 * OpenAI Empirical Task Suite
 *
 * 4 Representative Workloads designed to evaluate the inference boundary:
 * 1. Coding / Bugfix Workload
 * 2. Research / Long Document Retrieval Workload
 * 3. DevOps / Security Agent Root-Cause Workload
 * 4. Quantitative Telemetry & IoT Diagnostic Workload
 */
import { CompactionMode } from '../BroccoliCompactionFacade.js';
export interface BenchmarkTaskEvaluation {
    passed: boolean;
    score: number;
    reasons: string[];
}
export interface BenchmarkTaskDefinition {
    id: string;
    name: string;
    category: 'CODING' | 'RESEARCH' | 'AGENT_DEVOPS' | 'TELEMETRY';
    description: string;
    compactionMode: CompactionMode;
    domainHint?: string;
    rawInputContext: string | string[] | any;
    taskPrompt: string;
    expectedKeywords: string[];
    evaluator: (modelResponse: string) => BenchmarkTaskEvaluation;
}
export declare class OpenAiTaskSuite {
    static getTasks(): BenchmarkTaskDefinition[];
    /**
     * Workload 1: Solidity Smart Contract Code & AST Security Audit
     */
    private static createCodingTask;
    /**
     * Workload 2: Multi-Page SEC 10-K & Master Services Agreement Covenant Extraction
     */
    private static createResearchTask;
    /**
     * Workload 3: DevOps & Kernel Security Agent Root-Cause Analysis
     */
    private static createAgentDevOpsTask;
    /**
     * Workload 4: Quantitative Telemetry & Industrial IoT Diagnostic
     */
    private static createTelemetryTask;
}
//# sourceMappingURL=OpenAiTaskSuite.d.ts.map