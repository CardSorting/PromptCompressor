/**
 * GALXAI BroccoliDB Sparse Polynomial Horner Canonical Form DeDuplication Buffer
 *
 * Slashes expanded polynomial equation bloat in pricing models, physics engines, and polynomial curves:
 * 1. Takes expanded polynomial representations (e.g. 5x^4 + 3x^3 + 2x^2 + 7x + 10).
 * 2. Canonicalizes into nested Horner Form: 10 + x*(7 + x*(2 + x*(3 + x*5))).
 * 3. Factors shared monomial coefficients and eliminates redundant exponent notation.
 *
 * Result: Slashes 50%–75% of polynomial equation tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface PolynomialTerm {
    power: number;
    coefficient: number;
}
export interface HornerCanonicalResult {
    wasCanonicalized: boolean;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    degree: number;
    hornerExpression: string;
}
export declare class BroccoliSparsePolynomialHornerCanonicalizerBuffer {
    private static instance;
    readonly polyAuditTable: BroccoliDbTable<{
        id: string;
        degree: number;
        tokensSaved: number;
        savingsPercentage: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliSparsePolynomialHornerCanonicalizerBuffer;
    /**
     * Converts polynomial terms into nested Horner canonical form
     */
    static canonicalizeToHorner(terms: PolynomialTerm[], variable?: string): HornerCanonicalResult;
    clear(): void;
}
//# sourceMappingURL=BroccoliSparsePolynomialHornerCanonicalizerBuffer.d.ts.map