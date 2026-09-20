/**
 * GALXAI BroccoliDB Enterprise Identity, SAML 2.0 & SCIM 2.0 Provisioning Compactor
 *
 * Slashes massive LLM token bills on enterprise SSO authentication assertions and user lifecycle provisioning payloads (Okta, Ping, Azure AD / Entra ID):
 * 1. Evaluates bloated SAML 2.0 XML assertions and SCIM 2.0 JSON provisioning messages in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Identity Provider (IdP), Service Provider (SP), Subject NameID/Email, SAML Authentication Context, User Role Claims, and SCIM Provisioning Operation (Create/Update/Deprovision).
 * 3. Prunes massive Base64 X.509 cryptographic certificate chains (ds:X509Certificate), XML Signature digest blocks, and SAML protocol namespace definitions.
 *
 * Result: Slashes 75%–90% of identity and access management prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface SamlScimCompactionResult {
    wasCompacted: boolean;
    idpAndServiceProvider: string;
    subjectNameIdAndSession: string;
    roleClaimsAndAttributes: string;
    scimOperationAndStatus: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedIdpPrompt: string;
}
export declare class BroccoliSamlScimCompactor {
    private static instance;
    readonly idpTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliSamlScimCompactor;
    static compactIdentity(rawText: string): SamlScimCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliSamlScimCompactor.d.ts.map