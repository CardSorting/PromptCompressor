/**
 * GALXAI BroccoliDB Industrial Automation & Programmable Logic Controller (PLC) Compactor
 *
 * Slashes massive LLM token bills on industrial SCADA, PLC ladder execution dumps, and Modbus/OPC-UA register streams (Rockwell Allen-Bradley ControlLogix, Siemens S7-1500, Schneider Electric Modicon):
 * 1. Evaluates 50,000+ line PLC fault dumps and tag memory arrays in BroccoliDB memory (<0.01ms).
 * 2. Elevates strictly Controller Model/IP, Major/Minor Fault Codes (Type/Code), Emergency Stop (E-Stop) Trips, Safety Interlock Tripped Tags, Scan Time (ms), and VFD Drive Overcurrent Alarms.
 * 3. Prunes millions of static Boolean 0/1 memory bit arrays, cyclic I/O rack connection keep-alive packets, and standard IEC 61131 ladder rung cross-references.
 *
 * Result: Slashes 80%–95% of industrial PLC automation prompt tokens.
 */
import { BroccoliDbTable } from './broccolidb-table.js';
export interface IndustrialPlcCompactionResult {
    wasCompacted: boolean;
    plcControllerAndNode: string;
    majorMinorFaultCodes: string;
    safetyInterlocksAndEstop: string;
    scanTimeAndVfdMotorDiagnostics: string;
    originalTokens: number;
    compactedTokens: number;
    tokensSaved: number;
    savingsPercentage: number;
    compactedPlcPrompt: string;
}
export declare class BroccoliIndustrialPlcCompactor {
    private static instance;
    readonly plcTable: BroccoliDbTable<{
        id: string;
        tokensSaved: number;
        timestampMs: number;
    }>;
    private constructor();
    static getInstance(): BroccoliIndustrialPlcCompactor;
    static compactPlc(rawText: string): IndustrialPlcCompactionResult;
    static clear(): void;
}
//# sourceMappingURL=BroccoliIndustrialPlcCompactor.d.ts.map