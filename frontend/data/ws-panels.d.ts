import { Connection } from "home-assistant-js-websocket";
import { Panels } from "../types";
export declare const subscribePanels: (conn: Connection, onChange: (panels: Panels) => void) => import("home-assistant-js-websocket").UnsubscribeFunc;
