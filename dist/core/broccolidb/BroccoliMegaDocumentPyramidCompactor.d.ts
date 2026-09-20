/**
 * GALXAI BroccoliDB Multi-Hundred-Page Mega-Document High-Fidelity Pyramid Compactor
 *
 * Builds an extractive digest for large enterprise document strings:
 *
 * 1. Page-Boundary & Topology AST Decomposition:
 *    - Strips repetitive running headers, footers, page numbering artifacts, watermarks, and boilerplate disclaimers across hundreds of pages.
 *    - Reconstructs split multi-page tables, broken sentences, and orphan paragraph continuations.
 *
 * 2. 3-Tier Semantic Density Pyramid:
 *    - Tier 1 (Topology & Cross-Reference Anchor Map): Builds an explicit table of contents with section cross-reference resolution.
 *    - Tier 2 (High-Entropy Information Extraction): Retains distinct source sentences matching numerical, date, obligation, carve-out, or focus-query patterns.
 *    - Tier 3 (Cross-Page Table & Exhibit Coalescing): Preserves tabular data structures as clean Markdown matrices.
 *
 * 3. U-Shaped Attention Optimization:
 *    - Positions critical executive context at the Top (Primacy) and conclusive schedules/exhibits at the End (Recency), preventing the "Lost-in-the-Middle" attention deficit.
 *
 * This is not a substitute for consulting source provisions outside the extraction policy.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface MultiPageDocumentInput {
    title?: string;
    totalPages?: number;
    rawText: string;
    focusQuery?: string;
}
export interface ExtractedSectionDigest {
    sectionNumber: string;
    heading: string;
    pageRange: string;
    keyEntities: string[];
    numericalFacts: string[];
    keyObligations: string[];
    summaryText: string;
    isHighRelevance: boolean;
}
export interface MegaDocumentPyramidResult {
    wasCompacted: boolean;
    documentTitle: string;
    detectedTotalPages: number;
    totalSectionsDetected: number;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    crossReferenceCount: number;
    compactedPyramidPrompt: string;
    sections: ExtractedSectionDigest[];
}
export declare class BroccoliMegaDocumentPyramidCompactor {
    private static instance;
    readonly megaDocTable: BroccoliDbTable<{
        id: string;
        totalPages: number;
        originalTokens: number;
        compactedTokens: number;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private static readonly RUNNING_HEADER_FOOTER_REGEX;
    private static readonly SECTION_HEADER_REGEX;
    private static readonly OBLIGATION_KEYWORD_REGEX;
    private static readonly NUMERICAL_FACT_REGEX;
    private constructor();
    static getInstance(): BroccoliMegaDocumentPyramidCompactor;
    /**
     * Main entry point: compacts multi-page documents into an extractive semantic pyramid.
     */
    static compactMegaDocument(input: MultiPageDocumentInput | string): MegaDocumentPyramidResult;
    static clear(): void;
    private static regexTest;
}
//# sourceMappingURL=BroccoliMegaDocumentPyramidCompactor.d.ts.map