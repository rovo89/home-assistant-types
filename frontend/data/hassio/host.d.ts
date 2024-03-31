import { HomeAssistant } from "../../types";
export type HassioHostInfo = {
    agent_version: string;
    chassis: string;
    cpe: string;
    deployment: string;
    disk_life_time: number | "";
    disk_free: number;
    disk_total: number;
    disk_used: number;
    features: string[];
    hostname: string;
    kernel: string;
    operating_system: string;
    boot_timestamp: number;
    startup_time: number;
};
export interface HassioHassOSInfo {
    board: string | null;
    boot: string | null;
    update_available: boolean;
    version_latest: string | null;
    version: string | null;
    data_disk: string;
}
export interface Datadisk {
    name: string;
    vendor: string;
    model: string;
    serial: string;
    size: number;
    id: string;
    dev_path: string;
}
export interface DatadiskList {
    devices: string[];
    disks: Datadisk[];
}
export declare const fetchHassioHostInfo: (hass: HomeAssistant) => Promise<HassioHostInfo>;
export declare const fetchHassioHassOsInfo: (hass: HomeAssistant) => Promise<HassioHassOSInfo>;
export declare const rebootHost: (hass: HomeAssistant) => Promise<unknown>;
export declare const shutdownHost: (hass: HomeAssistant) => Promise<unknown>;
export declare const updateOS: (hass: HomeAssistant) => Promise<unknown>;
export declare const configSyncOS: (hass: HomeAssistant) => Promise<unknown>;
export declare const changeHostOptions: (hass: HomeAssistant, options: any) => Promise<unknown>;
export declare const moveDatadisk: (hass: HomeAssistant, device: string) => Promise<unknown>;
export declare const listDatadisks: (hass: HomeAssistant) => Promise<DatadiskList>;
