export type CompactionFidelityStatus = 'verified' | 'fallback';
export interface CompactionFidelityResult {
    status: CompactionFidelityStatus;
    unsupportedFacts: string[];
}
/**
 * Conservative provenance checks for generated compactors.
 *
 * Domain compactors are allowed to add labels and structural prose, but high-risk
 * values in a digest must be grounded in the source. This guard intentionally
 * fails closed for unsupported amounts, dates, percentages, identifiers, BICs,
 * and measured values.
 */
export declare class BroccoliCompactionSafety {
    private static readonly MONTHS;
    static verify(source: string, compacted: string): CompactionFidelityResult;
    private static extractHighRiskEvidence;
    private static collect;
    private static numericEvidence;
    private static extractSourceNumbers;
    private static normalizeNumber;
}
//# sourceMappingURL=BroccoliCompactionSafety.d.ts.map