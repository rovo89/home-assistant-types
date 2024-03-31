import { Connection } from "home-assistant-js-websocket";
import { Store } from "home-assistant-js-websocket/dist/store";
import { HomeAssistant } from "../types";
export interface LabelRegistryEntry {
    label_id: string;
    name: string;
    icon: string | null;
    color: string | null;
}
export interface LabelRegistryEntryMutableParams {
    name: string;
    icon?: string | null;
    color?: string | null;
}
export declare const fetchLabelRegistry: (conn: Connection) => Promise<LabelRegistryEntry[]>;
export declare const subscribeLabelRegistryUpdates: (conn: Connection, store: Store<LabelRegistryEntry[]>) => Promise<() => Promise<void>>;
export declare const subscribeLabelRegistry: (conn: Connection, onChange: (labels: LabelRegistryEntry[]) => void) => import("home-assistant-js-websocket").UnsubscribeFunc;
export declare const createLabelRegistryEntry: (hass: HomeAssistant, values: LabelRegistryEntryMutableParams) => Promise<LabelRegistryEntry>;
export declare const updateLabelRegistryEntry: (hass: HomeAssistant, labelId: string, updates: Partial<LabelRegistryEntryMutableParams>) => Promise<LabelRegistryEntry>;
export declare const deleteLabelRegistryEntry: (hass: HomeAssistant, labelId: string) => Promise<unknown>;
