import type { HomeAssistant } from "../types";
import type { EntityRegistryDisplayEntry, EntityRegistryEntry } from "./entity_registry";
import type { EntitySources } from "./entity_sources";
export { fetchDeviceRegistry, subscribeDeviceRegistry, } from "./ws-device_registry";
export interface DeviceRegistryEntry {
    id: string;
    config_entries: string[];
    connections: Array<[string, string]>;
    identifiers: Array<[string, string]>;
    manufacturer: string | null;
    model: string | null;
    name: string | null;
    labels: string[];
    sw_version: string | null;
    hw_version: string | null;
    serial_number: string | null;
    via_device_id: string | null;
    area_id: string | null;
    name_by_user: string | null;
    entry_type: "service" | null;
    disabled_by: "user" | "integration" | "config_entry" | null;
    configuration_url: string | null;
}
export interface DeviceEntityDisplayLookup {
    [deviceId: string]: EntityRegistryDisplayEntry[];
}
export interface DeviceEntityLookup {
    [deviceId: string]: EntityRegistryEntry[];
}
export interface DeviceRegistryEntryMutableParams {
    area_id?: string | null;
    name_by_user?: string | null;
    disabled_by?: string | null;
    labels?: string[];
}
export declare const fallbackDeviceName: (hass: HomeAssistant, entities: EntityRegistryEntry[] | EntityRegistryDisplayEntry[] | string[]) => string;
export declare const computeDeviceName: (device: DeviceRegistryEntry, hass: HomeAssistant, entities?: EntityRegistryEntry[] | EntityRegistryDisplayEntry[] | string[]) => string;
export declare const devicesInArea: (devices: DeviceRegistryEntry[], areaId: string) => DeviceRegistryEntry[];
export declare const updateDeviceRegistryEntry: (hass: HomeAssistant, deviceId: string, updates: Partial<DeviceRegistryEntryMutableParams>) => Promise<DeviceRegistryEntry>;
export declare const removeConfigEntryFromDevice: (hass: HomeAssistant, deviceId: string, configEntryId: string) => Promise<DeviceRegistryEntry>;
export declare const sortDeviceRegistryByName: (entries: DeviceRegistryEntry[], language: string) => DeviceRegistryEntry[];
export declare const getDeviceEntityLookup: (entities: EntityRegistryEntry[]) => DeviceEntityLookup;
export declare const getDeviceEntityDisplayLookup: (entities: EntityRegistryDisplayEntry[]) => DeviceEntityDisplayLookup;
export declare const getDeviceIntegrationLookup: (entitySources: EntitySources, entities: EntityRegistryDisplayEntry[] | EntityRegistryEntry[]) => Record<string, string[]>;
