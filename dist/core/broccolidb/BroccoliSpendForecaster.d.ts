/**
 * GALXAI BroccoliDB AI Spend Forecaster & CFO Runway Simulator
 *
 * Computes real-time linear regression & exponential moving average (EMA)
 * burn-rate forecasting with 95% confidence intervals across departments.
 *
 * Simulates bottom-line financial impact of enabling autonomous governance features.
 */
export interface DepartmentSpendForecast {
    department: string;
    sampleCount: number;
    currentRunRateMonthlyUsd: number;
    forecastedEomRetailSpendUsd: number;
    forecastedEomNetGalxSpendUsd: number;
    modeledMonthlySavingsUsd: number;
    projectedAnnualBudgetRecoveryUsd: number;
    confidenceInterval95Pct: [number, number];
}
export declare class BroccoliSpendForecaster {
    /**
     * Generates real-time financial forecasts from BroccoliDB spend ledger tables
     */
    static forecastDepartment(department: string, daysInMonth?: number): DepartmentSpendForecast;
}
//# sourceMappingURL=BroccoliSpendForecaster.d.ts.map