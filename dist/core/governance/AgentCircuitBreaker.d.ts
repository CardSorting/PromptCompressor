/**
 * GALXAI Agent Recursion Circuit Breaker
 *
 * Tracks conversational turns and detects cyclic error loops across autonomous
 * agent swarms (Devin, Claude Code, Cursor Composer, auto-test loops).
 * Halts runaway loops exceeding turn limits or repeating identical tool failures.
 */
export interface CircuitBreakerState {
    sessionId: string;
    turnCount: number;
    maxTurnsAllowed: number;
    isTripped: boolean;
    tripReason?: string;
    lastTurnHashes: string[];
}
export interface CircuitBreakerEvaluation {
    shouldHalt: boolean;
    currentTurn: number;
    maxTurns: number;
    reason?: 'MAX_TURNS_EXCEEDED' | 'CYCLIC_ERROR_LOOP_DETECTED' | 'TOKEN_EXPLOSION_CLAMP';
    remediationMessage?: string;
}
export declare class AgentCircuitBreaker {
    private static sessionCache;
    /**
     * Evaluates an incoming agent session turn against circuit breaker thresholds
     */
    static evaluateSession(sessionId: string, messages: Array<{
        role: string;
        content: string;
    }>, maxTurnsAllowed?: number): CircuitBreakerEvaluation;
    /**
     * Resets session state upon successful completion or explicit user override
     */
    static resetSession(sessionId: string): void;
}
//# sourceMappingURL=AgentCircuitBreaker.d.ts.map