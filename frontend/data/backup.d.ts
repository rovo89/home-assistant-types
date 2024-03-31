import { HomeAssistant } from "../types";
export interface BackupContent {
    slug: string;
    date: string;
    name: string;
    size: number;
    path: string;
}
export interface BackupData {
    backing_up: boolean;
    backups: BackupContent[];
}
export declare const getBackupDownloadUrl: (slug: string) => string;
export declare const fetchBackupInfo: (hass: HomeAssistant) => Promise<BackupData>;
export declare const removeBackup: (hass: HomeAssistant, slug: string) => Promise<void>;
export declare const generateBackup: (hass: HomeAssistant) => Promise<BackupContent>;
