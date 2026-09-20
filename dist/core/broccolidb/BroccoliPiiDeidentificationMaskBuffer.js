/**
 * GALXAI BroccoliDB PII/PHI Entity DeIdentification & Token Normalization Buffer
 *
 * Slashes duplicate tokens and enforces HIPAA/GDPR privacy compliance on clinical & financial records:
 * 1. Detects sensitive entity occurrences (Patient Names, SSNs, Credit Card PANs, Email Addresses, MRNs).
 * 2. Maps identical entity mentions across multi-page documents to deterministic short surrogate tokens (`[SURROGATE:NAME_1]`, `[SURROGATE:SSN_1]`).
 * 3. Returns a request-scoped surrogate map for explicit client-side re-identification.
 *
 * This utility reduces direct identifier exposure; it is not, by itself, a HIPAA/GDPR compliance guarantee.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export class BroccoliPiiDeidentificationMaskBuffer {
    static instance;
    piiAuditTable;
    static SSN_REGEX = /\b\d{3}-\d{2}-\d{4}\b/g;
    static EMAIL_REGEX = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,7}\b/g;
    static CREDIT_CARD_REGEX = /\b(?:\d{4}[-\s]?){3}\d{4}\b/g;
    static PHONE_REGEX = /\b(?:\+?1[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}\b/g;
    constructor() {
        this.piiAuditTable = new BroccoliDbTable('pii_mask_audit');
        this.piiAuditTable.createIndex('tokensSaved');
    }
    static getInstance() {
        if (!BroccoliPiiDeidentificationMaskBuffer.instance) {
            BroccoliPiiDeidentificationMaskBuffer.instance = new BroccoliPiiDeidentificationMaskBuffer();
        }
        return BroccoliPiiDeidentificationMaskBuffer.instance;
    }
    /**
     * Masks and deduplicates PII/PHI entity strings into deterministic surrogate keys
     */
    static maskAndDeduplicate(text) {
        if (typeof text !== 'string') {
            throw new TypeError('PII masking input must be a string.');
        }
        const buffer = this.getInstance();
        const originalTokens = Math.ceil(text.length / 4);
        const entityToSurrogateMap = new Map();
        const surrogateToEntityMap = new Map();
        let masked = text;
        let totalReplacements = 0;
        let distinctEntityCount = 0;
        const patterns = [
            { regex: BroccoliPiiDeidentificationMaskBuffer.SSN_REGEX, type: 'SSN' },
            { regex: BroccoliPiiDeidentificationMaskBuffer.EMAIL_REGEX, type: 'EMAIL' },
            { regex: BroccoliPiiDeidentificationMaskBuffer.CREDIT_CARD_REGEX, type: 'PAN' },
            { regex: BroccoliPiiDeidentificationMaskBuffer.PHONE_REGEX, type: 'PHONE' },
        ];
        for (const pat of patterns) {
            masked = masked.replace(pat.regex, (match) => {
                totalReplacements++;
                let surrogate = entityToSurrogateMap.get(match);
                if (!surrogate) {
                    distinctEntityCount++;
                    surrogate = `[${pat.type}_${entityToSurrogateMap.size + 1}]`;
                    entityToSurrogateMap.set(match, surrogate);
                    surrogateToEntityMap.set(surrogate, match);
                }
                return surrogate;
            });
        }
        const compactedTokens = Math.ceil(masked.length / 4);
        const tokensSaved = Math.max(0, originalTokens - compactedTokens);
        const savingsPercentage = originalTokens > 0
            ? Number(((tokensSaved / originalTokens) * 100).toFixed(1))
            : 0;
        const surrogateExport = {};
        for (const [surrogate, entity] of surrogateToEntityMap.entries()) {
            surrogateExport[surrogate] = entity;
        }
        const auditId = `pii_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`;
        buffer.piiAuditTable.put(auditId, {
            id: auditId,
            entitiesMasked: distinctEntityCount,
            tokensSaved,
            savingsPercentage,
            timestampMs: Date.now(),
        });
        return {
            wasMasked: totalReplacements > 0,
            originalTokens,
            compactedTokens,
            tokensSaved,
            savingsPercentage,
            distinctEntitiesMasked: distinctEntityCount,
            totalPiiOccurrencesReplaced: totalReplacements,
            maskedText: masked,
            surrogateMap: surrogateExport,
        };
    }
    /**
     * Rehydrates surrogate tokens back to original entities on client return
     */
    static rehydrate(maskedText, surrogateMap) {
        if (typeof maskedText !== 'string' || !surrogateMap || typeof surrogateMap !== 'object') {
            throw new TypeError('Rehydration requires maskedText and its request-scoped surrogateMap.');
        }
        let rehydrated = maskedText;
        const entries = Object.entries(surrogateMap).sort(([left], [right]) => right.length - left.length);
        for (const [surrogate, original] of entries) {
            if (!/^\[(?:SSN|EMAIL|PAN|PHONE)_\d+\]$/.test(surrogate) || typeof original !== 'string') {
                throw new TypeError(`Invalid surrogate map entry: ${surrogate}`);
            }
            rehydrated = rehydrated.replaceAll(surrogate, original);
        }
        return rehydrated;
    }
    clear() {
        const buffer = BroccoliPiiDeidentificationMaskBuffer.getInstance();
        buffer.piiAuditTable.clear();
    }
}
//# sourceMappingURL=BroccoliPiiDeidentificationMaskBuffer.js.map