import { Connection } from "home-assistant-js-websocket";
import { DeviceRegistryEntry } from "./device_registry";
export declare const fetchDeviceRegistry: (conn: Connection) => Promise<DeviceRegistryEntry[]>;
export declare const subscribeDeviceRegistry: (conn: Connection, onChange: (devices: DeviceRegistryEntry[]) => void) => import("home-assistant-js-websocket").UnsubscribeFunc;
