import { Connection } from "home-assistant-js-websocket";
import { HuiErrorCard } from "../panels/lovelace/cards/hui-error-card";
import { Lovelace, LovelaceBadge, LovelaceCard } from "../panels/lovelace/types";
import { HomeAssistant } from "../types";
import { LovelaceSectionConfig } from "./lovelace/config/section";
import { LegacyLovelaceConfig } from "./lovelace/config/types";
import { LovelaceViewConfig } from "./lovelace/config/view";
import { HuiSection } from "../panels/lovelace/sections/hui-section";
export interface LovelacePanelConfig {
    mode: "yaml" | "storage";
}
export interface LovelaceViewElement extends HTMLElement {
    hass?: HomeAssistant;
    lovelace?: Lovelace;
    narrow?: boolean;
    index?: number;
    cards?: Array<LovelaceCard | HuiErrorCard>;
    badges?: LovelaceBadge[];
    sections?: HuiSection[];
    isStrategy: boolean;
    setConfig(config: LovelaceViewConfig): void;
}
export interface LovelaceSectionElement extends HTMLElement {
    hass?: HomeAssistant;
    lovelace?: Lovelace;
    viewIndex?: number;
    index?: number;
    cards?: Array<LovelaceCard | HuiErrorCard>;
    isStrategy: boolean;
    setConfig(config: LovelaceSectionConfig): void;
}
export declare const subscribeLovelaceUpdates: (conn: Connection, urlPath: string | null, onChange: () => void) => Promise<() => Promise<void>>;
export declare const getLovelaceCollection: (conn: Connection, urlPath?: string | null) => import("home-assistant-js-websocket").Collection<import("./lovelace/config/types").LovelaceRawConfig>;
export declare const getLegacyLovelaceCollection: (conn: Connection) => import("home-assistant-js-websocket").Collection<LegacyLovelaceConfig>;
