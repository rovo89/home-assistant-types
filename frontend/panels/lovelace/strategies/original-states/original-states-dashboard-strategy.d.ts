import { ReactiveElement } from "lit";
import { LovelaceConfig } from "../../../../data/lovelace/config/types";
import { HomeAssistant } from "../../../../types";
import { OriginalStatesViewStrategyConfig } from "./original-states-view-strategy";
import { LovelaceStrategyEditor } from "../types";
export type OriginalStatesDashboardStrategyConfig = OriginalStatesViewStrategyConfig;
export declare class OriginalStatesDashboardStrategy extends ReactiveElement {
    static generate(config: OriginalStatesDashboardStrategyConfig, hass: HomeAssistant): Promise<LovelaceConfig>;
    static getConfigElement(): Promise<LovelaceStrategyEditor>;
}
declare global {
    interface HTMLElementTagNameMap {
        "original-states-dashboard-strategy": OriginalStatesDashboardStrategy;
    }
}
