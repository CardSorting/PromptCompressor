/**
 * GALXAI BroccoliDB Multiplayer Gaming & Anti-Cheat Telemetry (Easy Anti-Cheat / BattlEye / Vanguard) Compactor
 *
 * Slashes massive LLM token bills on multiplayer competitive game server tick streams and kernel-level anti-cheat heuristic logs:
 * 1. Evaluates 100,000+ line player aim kinematics and memory tampering telemetry in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Player / SteamID, Match ID, Cheat Vector (Aimbot / Wallhack ESP / Speedhack / Memory Injection), Angular Aim Velocity (°/s), Reaction Time (ms), Kernel Driver Hooks, and Automated Ban Enforcement.
 * 3. Prunes continuous 128Hz client-to-server movement position packets, weapon reload animation state machine logs, and UI HUD ping updates.
 *
 * Result: Slashes 80%–95% of gaming anti-cheat telemetry prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface GamingAntiCheatCompactionResult {
    wasCompacted: boolean;
    playerAndMatchId: string;
    cheatVectorAndDetectionMethod: string;
    kinematicAimAnomaliesAndReaction: string;
    enforcementActionAndHardwareBan: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedCheatPrompt: string;
}
export declare class BroccoliGamingAntiCheatCompactor {
    private static instance;
    readonly cheatTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliGamingAntiCheatCompactor;
    static compactAntiCheat(rawText: string): GamingAntiCheatCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliGamingAntiCheatCompactor.d.ts.map