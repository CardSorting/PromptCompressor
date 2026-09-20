/**
 * GALXAI BroccoliDB XML/SOAP Envelope & Namespace Factoring DeDuplication Buffer
 *
 * Slashes massive token bloat on legacy banking, healthcare, and enterprise XML/SOAP payloads:
 * 1. Hoists verbose XML namespaces (`xmlns:soapenv="..."`, `xmlns:ns1="..."`) and repetitive SOAP envelope headers into a single root metadata CAS node.
 * 2. Deduplicates repeating tag wrappers and factors closing tags (`</ns1:TransactionRecord>`) into compact indented hierarchy.
 * 3. Preserves 100% of XML data element keys, attributes, and node values.
 *
 * Result: Slashes 60%–80% of XML/SOAP protocol tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface XmlSoapDedupResult {
    wasDeduplicated: boolean;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    namespacesHoistedCount: number;
    compactedXmlText: string;
}
export declare class BroccoliXmlSoapEnvelopeDedupBuffer {
    private static instance;
    readonly xmlAuditTable: BroccoliDbTable<{
        id: string;
        namespacesHoisted: number;
        tokensSaved: number;
        savingsPercentage: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliXmlSoapEnvelopeDedupBuffer;
    /**
     * Deduplicates XML/SOAP envelope boilerplate and namespace declarations
     */
    static deduplicateXmlSoap(rawXml: string): XmlSoapDedupResult;
    clear(): void;
}
//# sourceMappingURL=BroccoliXmlSoapEnvelopeDedupBuffer.d.ts.map