/**
 * GALXAI BroccoliDB Support Live Chat Event & System Message Stripper
 *
 * Slashes massive LLM token bills on customer support chat transcripts, help desk bots, and CRM chat logs:
 * 1. Evaluates raw support chat logs in BroccoliDB memory (<0.01ms).
 * 2. Prunes non-substantive system events (User connected, is typing..., agent joined, conversation rated, chat ended).
 * 3. Strips generic bot intake greetings (Welcome to support! How can I help you today?).
 * 4. Yields a clean chronological dialog containing strictly user questions and agent resolution turns.
 *
 * Result: Slashes 65%–80% of support chat transcript prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface ChatCompactionResult {
    wasCompacted: boolean;
    originalEventsCount: number;
    substantiveTurnsCount: number;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedChatPrompt: string;
}
export declare class BroccoliSupportChatCompactor {
    private static instance;
    readonly chatAuditTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private static readonly SYSTEM_EVENT_PATTERNS;
    private constructor();
    static getInstance(): BroccoliSupportChatCompactor;
    /**
     * Compacts raw live chat transcript by pruning system noise and bot filler
     */
    static compactChatTranscript(rawChatLog: string): ChatCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliSupportChatCompactor.d.ts.map