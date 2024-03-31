import { ReactiveElement } from "lit";
import { LovelaceViewConfig } from "../../../../data/lovelace/config/view";
import { HomeAssistant } from "../../../../types";
export type MapViewStrategyConfig = {
    type: "map";
};
export declare class MapViewStrategy extends ReactiveElement {
    static generate(_config: MapViewStrategyConfig, hass: HomeAssistant): Promise<LovelaceViewConfig>;
}
declare global {
    interface HTMLElementTagNameMap {
        "map-view-strategy": MapViewStrategy;
    }
}
