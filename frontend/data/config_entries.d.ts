import type { UnsubscribeFunc } from "home-assistant-js-websocket";
import type { HomeAssistant } from "../types";
import type { IntegrationManifest, IntegrationType } from "./integration";
export interface ConfigEntry {
    entry_id: string;
    domain: string;
    title: string;
    source: string;
    state: "loaded" | "setup_error" | "migration_error" | "setup_retry" | "not_loaded" | "failed_unload" | "setup_in_progress";
    supports_options: boolean;
    supports_remove_device: boolean;
    supports_unload: boolean;
    supports_reconfigure: boolean;
    pref_disable_new_entities: boolean;
    pref_disable_polling: boolean;
    disabled_by: "user" | null;
    reason: string | null;
}
export type ConfigEntryMutableParams = Partial<Pick<ConfigEntry, "title" | "pref_disable_new_entities" | "pref_disable_polling">>;
export declare const ERROR_STATES: ConfigEntry["state"][];
export declare const RECOVERABLE_STATES: ConfigEntry["state"][];
export interface ConfigEntryUpdate {
    type: null | "added" | "removed" | "updated";
    entry: ConfigEntry;
}
export declare const subscribeConfigEntries: (hass: HomeAssistant, callbackFunction: (message: ConfigEntryUpdate[]) => void, filters?: {
    type?: IntegrationType[];
    domain?: string;
}) => Promise<UnsubscribeFunc>;
export declare const getConfigEntries: (hass: HomeAssistant, filters?: {
    type?: IntegrationType[];
    domain?: string;
}) => Promise<ConfigEntry[]>;
export declare const getConfigEntry: (hass: HomeAssistant, configEntryId: string) => Promise<{
    config_entry: ConfigEntry;
}>;
export declare const updateConfigEntry: (hass: HomeAssistant, configEntryId: string, updatedValues: ConfigEntryMutableParams) => Promise<{
    require_restart: boolean;
    config_entry: ConfigEntry;
}>;
export declare const deleteConfigEntry: (hass: HomeAssistant, configEntryId: string) => Promise<{
    require_restart: boolean;
}>;
export declare const reloadConfigEntry: (hass: HomeAssistant, configEntryId: string) => Promise<{
    require_restart: boolean;
}>;
export interface DisableConfigEntryResult {
    require_restart: boolean;
}
export declare const disableConfigEntry: (hass: HomeAssistant, configEntryId: string) => Promise<DisableConfigEntryResult>;
export declare const enableConfigEntry: (hass: HomeAssistant, configEntryId: string) => Promise<{
    require_restart: boolean;
}>;
export declare const sortConfigEntries: (configEntries: ConfigEntry[], manifestLookup: {
    [domain: string]: IntegrationManifest;
}) => ConfigEntry[];
