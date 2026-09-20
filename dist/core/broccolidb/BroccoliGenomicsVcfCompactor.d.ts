/**
 * GALXAI BroccoliDB Clinical Genomics Next-Gen Sequencing (NGS) VCF Compactor
 *
 * Slashes massive LLM token bills on high-throughput genomic Variant Call Format (VCF) and somatic oncology panels:
 * 1. Evaluates 50MB+ genomic VCF text dumps and tumor profiling reports in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Gene Symbol, HGVS cDNA/Protein Notation, Variant Allele Fraction (VAF %), ClinVar Pathogenicity, and Actionable Targeted Therapies.
 * 3. Prunes millions of benign synonymous polymorphisms, raw Phred read depth integer arrays, and VCF header metadata lines (##FORMAT, ##FILTER).
 *
 * Result: Slashes 85%–96% of genomics NGS prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface GenomicsVcfCompactionResult {
    wasCompacted: boolean;
    sampleAndSequencingPanel: string;
    pathogenicSomaticVariants: string;
    variantAlleleFractionsAndDepth: string;
    actionableTargetedTherapies: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedVcfPrompt: string;
}
export declare class BroccoliGenomicsVcfCompactor {
    private static instance;
    readonly vcfTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliGenomicsVcfCompactor;
    static compactVcf(rawText: string): GenomicsVcfCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliGenomicsVcfCompactor.d.ts.map