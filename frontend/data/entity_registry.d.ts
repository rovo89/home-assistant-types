import { Connection } from "home-assistant-js-websocket";
import { HomeAssistant } from "../types";
import { LightColor } from "./light";
export { subscribeEntityRegistryDisplay } from "./ws-entity_registry_display";
type EntityCategory = "config" | "diagnostic";
export interface EntityRegistryDisplayEntry {
    entity_id: string;
    name?: string;
    icon?: string;
    device_id?: string;
    area_id?: string;
    labels: string[];
    hidden?: boolean;
    entity_category?: EntityCategory;
    translation_key?: string;
    platform?: string;
    display_precision?: number;
}
export interface EntityRegistryDisplayEntryResponse {
    entities: {
        ei: string;
        di?: string;
        ai?: string;
        lb: string[];
        ec?: number;
        en?: string;
        ic?: string;
        pl?: string;
        tk?: string;
        hb?: boolean;
        dp?: number;
    }[];
    entity_categories: Record<number, EntityCategory>;
}
export interface EntityRegistryEntry {
    id: string;
    entity_id: string;
    name: string | null;
    icon: string | null;
    platform: string;
    config_entry_id: string | null;
    device_id: string | null;
    area_id: string | null;
    labels: string[];
    disabled_by: "user" | "device" | "integration" | "config_entry" | null;
    hidden_by: Exclude<EntityRegistryEntry["disabled_by"], "config_entry">;
    entity_category: EntityCategory | null;
    has_entity_name: boolean;
    original_name?: string;
    unique_id: string;
    translation_key?: string;
    options: EntityRegistryOptions | null;
    categories: {
        [scope: string]: string;
    };
}
export interface ExtEntityRegistryEntry extends EntityRegistryEntry {
    capabilities: Record<string, unknown>;
    original_icon?: string;
    device_class?: string;
    original_device_class?: string;
    aliases: string[];
}
export interface UpdateEntityRegistryEntryResult {
    entity_entry: ExtEntityRegistryEntry;
    reload_delay?: number;
    require_restart?: boolean;
}
export interface SensorEntityOptions {
    display_precision?: number | null;
    suggested_display_precision?: number | null;
    unit_of_measurement?: string | null;
}
export interface LightEntityOptions {
    favorite_colors?: LightColor[];
}
export interface NumberEntityOptions {
    unit_of_measurement?: string | null;
}
export interface LockEntityOptions {
    default_code?: string | null;
}
export interface WeatherEntityOptions {
    precipitation_unit?: string | null;
    pressure_unit?: string | null;
    temperature_unit?: string | null;
    visibility_unit?: string | null;
    wind_speed_unit?: string | null;
}
export interface SwitchAsXEntityOptions {
    entity_id: string;
    invert: boolean;
}
export interface EntityRegistryOptions {
    number?: NumberEntityOptions;
    sensor?: SensorEntityOptions;
    lock?: LockEntityOptions;
    weather?: WeatherEntityOptions;
    light?: LightEntityOptions;
    switch_as_x?: SwitchAsXEntityOptions;
    conversation?: Record<string, unknown>;
    "cloud.alexa"?: Record<string, unknown>;
    "cloud.google_assistant"?: Record<string, unknown>;
}
export interface EntityRegistryEntryUpdateParams {
    name?: string | null;
    icon?: string | null;
    device_class?: string | null;
    area_id?: string | null;
    disabled_by?: string | null;
    hidden_by: string | null;
    new_entity_id?: string;
    options_domain?: string;
    options?: SensorEntityOptions | NumberEntityOptions | LockEntityOptions | WeatherEntityOptions | LightEntityOptions;
    aliases?: string[];
    labels?: string[];
    categories?: {
        [scope: string]: string | null;
    };
}
export declare const findBatteryEntity: <T extends {
    entity_id: string;
}>(hass: HomeAssistant, entities: T[]) => T | undefined;
export declare const findBatteryChargingEntity: <T extends {
    entity_id: string;
}>(hass: HomeAssistant, entities: T[]) => T | undefined;
export declare const computeEntityRegistryName: (hass: HomeAssistant, entry: EntityRegistryEntry) => string | null;
export declare const getExtendedEntityRegistryEntry: (hass: HomeAssistant, entityId: string) => Promise<ExtEntityRegistryEntry>;
export declare const getExtendedEntityRegistryEntries: (hass: HomeAssistant, entityIds: string[]) => Promise<Record<string, ExtEntityRegistryEntry>>;
export declare const updateEntityRegistryEntry: (hass: HomeAssistant, entityId: string, updates: Partial<EntityRegistryEntryUpdateParams>) => Promise<UpdateEntityRegistryEntryResult>;
export declare const removeEntityRegistryEntry: (hass: HomeAssistant, entityId: string) => Promise<void>;
export declare const fetchEntityRegistry: (conn: Connection) => Promise<EntityRegistryEntry[]>;
export declare const fetchEntityRegistryDisplay: (conn: Connection) => Promise<EntityRegistryDisplayEntryResponse>;
export declare const subscribeEntityRegistry: (conn: Connection, onChange: (entities: EntityRegistryEntry[]) => void) => import("home-assistant-js-websocket").UnsubscribeFunc;
export declare const sortEntityRegistryByName: (entries: EntityRegistryEntry[], language: string) => EntityRegistryEntry[];
export declare const entityRegistryByEntityId: import("memoize-one").MemoizedFn<(entries: EntityRegistryEntry[]) => Record<string, EntityRegistryEntry>>;
export declare const entityRegistryById: import("memoize-one").MemoizedFn<(entries: EntityRegistryEntry[]) => Record<string, EntityRegistryEntry>>;
export declare const getEntityPlatformLookup: (entities: EntityRegistryEntry[]) => Record<string, string>;
