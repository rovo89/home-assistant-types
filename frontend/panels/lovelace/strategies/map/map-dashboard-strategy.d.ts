import { ReactiveElement } from "lit";
import { LovelaceConfig } from "../../../../data/lovelace/config/types";
import { HomeAssistant } from "../../../../types";
import { MapViewStrategyConfig } from "./map-view-strategy";
export type MapDashboardStrategyConfig = MapViewStrategyConfig;
export declare class MapDashboardStrategy extends ReactiveElement {
    static generate(config: MapDashboardStrategyConfig, hass: HomeAssistant): Promise<LovelaceConfig>;
    static noEditor: boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        "map-dashboard-strategy": MapDashboardStrategy;
    }
}
