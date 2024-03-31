import { HomeAssistant, PanelInfo } from "../../types";
import { SupervisorArch } from "../supervisor/supervisor";
export type HassioHomeAssistantInfo = {
    arch: SupervisorArch;
    audio_input: string | null;
    audio_output: string | null;
    boot: boolean;
    image: string;
    ip_address: string;
    machine: string;
    port: number;
    ssl: boolean;
    update_available: boolean;
    version_latest: string;
    version: string;
    wait_boot: number;
    watchdog: boolean;
};
export type HassioSupervisorInfo = {
    addons: string[];
    addons_repositories: string[];
    arch: SupervisorArch;
    channel: string;
    debug: boolean;
    debug_block: boolean;
    diagnostics: boolean | null;
    healthy: boolean;
    ip_address: string;
    logging: string;
    supported: boolean;
    timezone: string;
    update_available: boolean;
    version: string;
    version_latest: string;
    wait_boot: number;
};
export type HassioInfo = {
    arch: SupervisorArch;
    channel: string;
    docker: string;
    features: string[];
    hassos: null;
    homeassistant: string;
    hostname: string;
    logging: string;
    machine: string;
    state: "initialize" | "setup" | "startup" | "running" | "freeze" | "shutdown" | "stopping" | "close";
    operating_system: string;
    supervisor: string;
    supported: boolean;
    supported_arch: SupervisorArch[];
    timezone: string;
};
export type HassioPanelInfo = PanelInfo<undefined | {
    ingress?: string;
}>;
export interface CreateSessionResponse {
    session: string;
}
export interface SupervisorOptions {
    channel?: "beta" | "dev" | "stable";
    diagnostics?: boolean;
    addons_repositories?: string[];
}
export declare const reloadSupervisor: (hass: HomeAssistant) => Promise<void>;
export declare const restartSupervisor: (hass: HomeAssistant) => Promise<void>;
export declare const updateSupervisor: (hass: HomeAssistant) => Promise<void>;
export declare const fetchHassioHomeAssistantInfo: (hass: HomeAssistant) => Promise<HassioHomeAssistantInfo>;
export declare const fetchHassioSupervisorInfo: (hass: HomeAssistant) => Promise<HassioSupervisorInfo>;
export declare const fetchHassioInfo: (hass: HomeAssistant) => Promise<HassioInfo>;
export declare const fetchHassioLogs: (hass: HomeAssistant, provider: string) => Promise<string>;
export declare const getHassioLogDownloadUrl: (provider: string) => string;
export declare const setSupervisorOption: (hass: HomeAssistant, data: SupervisorOptions) => Promise<void>;
