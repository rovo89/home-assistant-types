import { HomeAssistant } from "../../types";
import { HassioResponse } from "./common";
export declare const friendlyFolderName: {
    ssl: string;
    homeassistant: string;
    "addons/local": string;
    media: string;
    share: string;
};
interface BackupContent {
    homeassistant: boolean;
    folders: string[];
    addons: string[];
}
export interface HassioBackup {
    slug: string;
    date: string;
    name: string;
    size: number;
    type: "full" | "partial";
    protected: boolean;
    location: string | null;
    content: BackupContent;
}
export interface HassioBackupDetail extends HassioBackup {
    size: number;
    homeassistant: string;
    addons: Array<{
        slug: "ADDON_SLUG";
        name: "NAME";
        version: "INSTALLED_VERSION";
        size: "SIZE_IN_MB";
    }>;
    repositories: string[];
    folders: string[];
}
export interface HassioFullBackupCreateParams {
    name: string;
    password?: string;
    confirm_password?: string;
}
export interface HassioPartialBackupCreateParams extends HassioFullBackupCreateParams {
    folders?: string[];
    addons?: string[];
    homeassistant?: boolean;
}
export declare const fetchHassioBackups: (hass: HomeAssistant) => Promise<HassioBackup[]>;
export declare const fetchHassioBackupInfo: (hass: HomeAssistant | undefined, backup: string) => Promise<HassioBackupDetail>;
export declare const reloadHassioBackups: (hass: HomeAssistant) => Promise<void>;
export declare const createHassioFullBackup: (hass: HomeAssistant, data: HassioFullBackupCreateParams) => Promise<void>;
export declare const removeBackup: (hass: HomeAssistant, slug: string) => Promise<void>;
export declare const createHassioPartialBackup: (hass: HomeAssistant, data: HassioPartialBackupCreateParams) => Promise<void>;
export declare const uploadBackup: (hass: HomeAssistant | undefined, file: File) => Promise<HassioResponse<HassioBackup>>;
export {};
