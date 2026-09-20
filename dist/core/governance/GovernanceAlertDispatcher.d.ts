/**
 * GALXAI Governance Alert Dispatcher
 *
 * Formats structured alert payloads for Slack Block Kit, PagerDuty v2 API,
 * and standard RFC 7807 Webhook endpoints for real-time incident alerting.
 */
import type { AnomalyDetectionRecord } from './SpendAnomalyDetector.js';
export interface AlertNotificationPayload {
    incidentId: string;
    title: string;
    severity: 'low' | 'medium' | 'high' | 'critical';
    service: string;
    department: string;
    description: string;
    metrics: {
        baselineHourlyCost: number;
        surgingHourlyCost: number;
        velocityMultiplier: number;
        zScore: number;
    };
    remediationUrl: string;
    timestamp: string;
}
export declare class GovernanceAlertDispatcher {
    /**
     * Generates a standard Slack Block Kit formatted message payload
     */
    static formatSlackPayload(anomaly: AnomalyDetectionRecord, incidentId: string): {
        text: string;
        blocks: ({
            type: string;
            text: {
                type: string;
                text: string;
                emoji: boolean;
            };
            fields?: undefined;
            elements?: undefined;
        } | {
            type: string;
            fields: {
                type: string;
                text: string;
            }[];
            text?: undefined;
            elements?: undefined;
        } | {
            type: string;
            text: {
                type: string;
                text: string;
                emoji?: undefined;
            };
            fields?: undefined;
            elements?: undefined;
        } | {
            type: string;
            elements: {
                type: string;
                text: {
                    type: string;
                    text: string;
                    emoji: boolean;
                };
                url: string;
                style: string;
            }[];
            text?: undefined;
            fields?: undefined;
        })[];
    };
    /**
     * Generates a standard PagerDuty v2 Trigger Event payload
     */
    static formatPagerDutyPayload(anomaly: AnomalyDetectionRecord, incidentId: string, routingKey: string): {
        routing_key: string;
        event_action: string;
        dedup_key: string;
        payload: {
            summary: string;
            severity: string;
            source: string;
            component: string;
            custom_details: {
                incidentId: string;
                department: string;
                serviceId: string;
                surgeRateUsdPerHour: number;
                baselineRateUsdPerHour: number;
                velocityMultiplier: number;
                zScore: number;
            };
        };
    };
}
//# sourceMappingURL=GovernanceAlertDispatcher.d.ts.map