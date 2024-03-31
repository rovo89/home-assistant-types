import { Connection } from "home-assistant-js-websocket";
import { LocalizeFunc } from "../common/translations/localize";
import { HomeAssistant } from "../types";
export declare const integrationsWithPanel: {
    matter: string;
    mqtt: string;
    thread: string;
    zha: string;
    zwave_js: string;
};
export type IntegrationType = "device" | "helper" | "hub" | "service" | "hardware" | "entity" | "system";
export interface IntegrationManifest {
    is_built_in: boolean;
    domain: string;
    name: string;
    config_flow: boolean;
    documentation: string;
    issue_tracker?: string;
    dependencies?: string[];
    after_dependencies?: string[];
    codeowners?: string[];
    requirements?: string[];
    ssdp?: Array<{
        manufacturer?: string;
        modelName?: string;
        st?: string;
    }>;
    zeroconf?: string[];
    homekit?: {
        models: string[];
    };
    integration_type?: IntegrationType;
    loggers?: string[];
    quality_scale?: "gold" | "internal" | "platinum" | "silver";
    iot_class: "assumed_state" | "cloud_polling" | "cloud_push" | "local_polling" | "local_push";
    single_config_entry?: boolean;
}
export interface IntegrationSetup {
    domain: string;
    seconds?: number;
}
export interface IntegrationLogInfo {
    domain: string;
    level?: number;
}
export declare enum LogSeverity {
    CRITICAL = 50,
    ERROR = 40,
    WARNING = 30,
    INFO = 20,
    DEBUG = 10,
    NOTSET = 0
}
export type IntegrationLogPersistance = "none" | "once" | "permanent";
export declare const integrationIssuesUrl: (domain: string, manifest: IntegrationManifest) => string;
export declare const domainToName: (localize: LocalizeFunc, domain: string, manifest?: IntegrationManifest) => string;
export declare const fetchIntegrationManifests: (hass: HomeAssistant, integrations?: string[]) => Promise<IntegrationManifest[]>;
export declare const fetchIntegrationManifest: (hass: HomeAssistant, integration: string) => Promise<IntegrationManifest>;
export declare const fetchIntegrationSetups: (hass: HomeAssistant) => Promise<IntegrationSetup[]>;
export declare const fetchIntegrationLogInfo: (conn: any) => any;
export declare const setIntegrationLogLevel: (hass: HomeAssistant, integration: string, level: string, persistence: IntegrationLogPersistance) => Promise<unknown>;
export declare const subscribeLogInfo: (conn: Connection, onChange: (devices: IntegrationLogInfo[]) => void) => import("home-assistant-js-websocket").UnsubscribeFunc;
