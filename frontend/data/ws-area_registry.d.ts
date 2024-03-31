import { Connection } from "home-assistant-js-websocket";
import { AreaRegistryEntry } from "./area_registry";
export declare const subscribeAreaRegistry: (conn: Connection, onChange: (areas: AreaRegistryEntry[]) => void) => import("home-assistant-js-websocket").UnsubscribeFunc;
