import { Connection } from "home-assistant-js-websocket";
import { HomeAssistant } from "../types";
import { AreaRegistryEntry } from "./area_registry";
export { subscribeAreaRegistry } from "./ws-area_registry";
export interface FloorRegistryEntry {
    floor_id: string;
    name: string;
    level: number | null;
    icon: string | null;
    aliases: string[];
}
export interface FloorAreaLookup {
    [floorId: string]: AreaRegistryEntry[];
}
export interface FloorRegistryEntryMutableParams {
    name: string;
    level?: number | null;
    icon?: string | null;
    aliases?: string[];
}
export declare const subscribeFloorRegistry: (conn: Connection, onChange: (floors: FloorRegistryEntry[]) => void) => import("home-assistant-js-websocket").UnsubscribeFunc;
export declare const createFloorRegistryEntry: (hass: HomeAssistant, values: FloorRegistryEntryMutableParams) => Promise<FloorRegistryEntry>;
export declare const updateFloorRegistryEntry: (hass: HomeAssistant, floorId: string, updates: Partial<FloorRegistryEntryMutableParams>) => Promise<AreaRegistryEntry>;
export declare const deleteFloorRegistryEntry: (hass: HomeAssistant, floorId: string) => Promise<unknown>;
export declare const getFloorAreaLookup: (areas: AreaRegistryEntry[]) => FloorAreaLookup;
export declare const floorCompare: (entries?: FloorRegistryEntry[], order?: string[]) => (a: string, b: string) => number;
