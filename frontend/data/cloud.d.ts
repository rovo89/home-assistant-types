import { EntityFilter } from "../common/entity/entity_filter";
import { HomeAssistant } from "../types";
interface CloudStatusNotLoggedIn {
    logged_in: false;
    cloud: "disconnected" | "connecting" | "connected";
    http_use_ssl: boolean;
}
export interface CertificateInformation {
    common_name: string;
    expire_date: string;
    fingerprint: string;
    alternative_names: string[];
}
export interface CloudPreferences {
    google_enabled: boolean;
    alexa_enabled: boolean;
    remote_enabled: boolean;
    remote_allow_remote_enable: boolean;
    google_secure_devices_pin: string | undefined;
    cloudhooks: {
        [webhookId: string]: CloudWebhook;
    };
    alexa_report_state: boolean;
    google_report_state: boolean;
    tts_default_voice: [string, string];
}
export interface CloudStatusLoggedIn {
    logged_in: true;
    cloud: "disconnected" | "connecting" | "connected";
    cloud_last_disconnect_reason: {
        clean: boolean;
        reason: string;
    } | null;
    email: string;
    google_registered: boolean;
    google_entities: EntityFilter;
    google_domains: string[];
    alexa_registered: boolean;
    alexa_entities: EntityFilter;
    prefs: CloudPreferences;
    remote_domain: string | undefined;
    remote_connected: boolean;
    remote_certificate: undefined | CertificateInformation;
    remote_certificate_status: null | "error" | "generating" | "loaded" | "loading" | "ready";
    http_use_ssl: boolean;
    active_subscription: boolean;
}
export type CloudStatus = CloudStatusNotLoggedIn | CloudStatusLoggedIn;
export interface SubscriptionInfo {
    human_description: string;
    provider: string;
    plan_renewal_date?: number;
}
export interface CloudWebhook {
    webhook_id: string;
    cloudhook_id: string;
    cloudhook_url: string;
    managed?: boolean;
}
export declare const cloudLogin: (hass: HomeAssistant, email: string, password: string) => Promise<{
    success: boolean;
    cloud_pipeline?: string;
}>;
export declare const cloudLogout: (hass: HomeAssistant) => Promise<unknown>;
export declare const cloudForgotPassword: (hass: HomeAssistant, email: string) => Promise<unknown>;
export declare const cloudRegister: (hass: HomeAssistant, email: string, password: string) => Promise<unknown>;
export declare const cloudResendVerification: (hass: HomeAssistant, email: string) => Promise<unknown>;
export declare const fetchCloudStatus: (hass: HomeAssistant) => Promise<CloudStatus>;
export declare const createCloudhook: (hass: HomeAssistant, webhookId: string) => Promise<CloudWebhook>;
export declare const deleteCloudhook: (hass: HomeAssistant, webhookId: string) => Promise<unknown>;
export declare const connectCloudRemote: (hass: HomeAssistant) => Promise<unknown>;
export declare const disconnectCloudRemote: (hass: HomeAssistant) => Promise<unknown>;
export declare const fetchCloudSubscriptionInfo: (hass: HomeAssistant) => Promise<SubscriptionInfo>;
export declare const updateCloudPref: (hass: HomeAssistant, prefs: {
    google_enabled?: CloudPreferences["google_enabled"];
    alexa_enabled?: CloudPreferences["alexa_enabled"];
    alexa_report_state?: CloudPreferences["alexa_report_state"];
    google_report_state?: CloudPreferences["google_report_state"];
    google_secure_devices_pin?: CloudPreferences["google_secure_devices_pin"];
    tts_default_voice?: CloudPreferences["tts_default_voice"];
    remote_allow_remote_enable?: CloudPreferences["remote_allow_remote_enable"];
}) => Promise<unknown>;
export declare const removeCloudData: (hass: HomeAssistant) => Promise<unknown>;
export declare const updateCloudGoogleEntityConfig: (hass: HomeAssistant, entity_id: string, disable_2fa: boolean) => Promise<unknown>;
export declare const cloudSyncGoogleAssistant: (hass: HomeAssistant) => Promise<unknown>;
export {};
