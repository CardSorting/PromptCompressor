/**
 * GALXAI BroccoliDB State Lottery & Central Gaming System (CGS / IGT / Scientific Games) Compactor
 *
 * Slashes massive LLM token bills on high-throughput state lottery central system draw transactions and retail wager terminal logs:
 * 1. Evaluates 100,000+ lottery ticket sales and prize validation transaction records in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Lottery Jurisdiction / Game (Powerball / Mega Millions / Pick 3), Serial Number / Barcode, Wager Amount $, Selected Numbers & Multiplier (Power Play), Draw Date, and Prize Validation Status.
 * 3. Prunes millions of retail terminal thermal printer line feeds, routine TCP/IP keepalive heartbeats, and responsible gaming public service text.
 *
 * Result: Slashes 80%–95% of state lottery transaction prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface LotteryGamingCompactionResult {
    wasCompacted: boolean;
    jurisdictionAndGameTitle: string;
    wagerSerialAndTerminalId: string;
    selectedNumbersAndDrawDate: string;
    prizeValidationAndClaimStatus: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedLotteryPrompt: string;
}
export declare class BroccoliLotteryGamingCompactor {
    private static instance;
    readonly lotTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliLotteryGamingCompactor;
    static compactLottery(rawText: string): LotteryGamingCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliLotteryGamingCompactor.d.ts.map