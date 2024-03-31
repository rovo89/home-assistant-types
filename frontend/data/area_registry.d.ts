import { HomeAssistant } from "../types";
import { DeviceRegistryEntry } from "./device_registry";
import { EntityRegistryEntry } from "./entity_registry";
export { subscribeAreaRegistry } from "./ws-area_registry";
export interface AreaRegistryEntry {
    area_id: string;
    floor_id: string | null;
    name: string;
    picture: string | null;
    icon: string | null;
    labels: string[];
    aliases: string[];
}
export interface AreaEntityLookup {
    [areaId: string]: EntityRegistryEntry[];
}
export interface AreaDeviceLookup {
    [areaId: string]: DeviceRegistryEntry[];
}
export interface AreaRegistryEntryMutableParams {
    name: string;
    floor_id?: string | null;
    picture?: string | null;
    icon?: string | null;
    aliases?: string[];
    labels?: string[];
}
export declare const createAreaRegistryEntry: (hass: HomeAssistant, values: AreaRegistryEntryMutableParams) => Promise<AreaRegistryEntry>;
export declare const updateAreaRegistryEntry: (hass: HomeAssistant, areaId: string, updates: Partial<AreaRegistryEntryMutableParams>) => Promise<AreaRegistryEntry>;
export declare const deleteAreaRegistryEntry: (hass: HomeAssistant, areaId: string) => Promise<unknown>;
export declare const getAreaEntityLookup: (entities: EntityRegistryEntry[]) => AreaEntityLookup;
export declare const getAreaDeviceLookup: (devices: DeviceRegistryEntry[]) => AreaDeviceLookup;
export declare const areaCompare: (entries?: HomeAssistant["areas"], order?: string[]) => (a: string, b: string) => number;
