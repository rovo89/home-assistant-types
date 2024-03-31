import { ReactiveElement } from "lit";
import { HomeAssistant } from "../../../types";
import { LovelaceViewConfig } from "../../../data/lovelace/config/view";
import { LovelaceStrategyConfig } from "../../../data/lovelace/config/strategy";
export declare class EnergyViewStrategy extends ReactiveElement {
    static generate(_config: LovelaceStrategyConfig, hass: HomeAssistant): Promise<LovelaceViewConfig>;
}
declare global {
    interface HTMLElementTagNameMap {
        "energy-view-strategy": EnergyViewStrategy;
    }
}
