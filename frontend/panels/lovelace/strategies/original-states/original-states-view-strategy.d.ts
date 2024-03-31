import { ReactiveElement } from "lit";
import type { AreaFilterValue } from "../../../../components/ha-area-filter";
import { LovelaceViewConfig } from "../../../../data/lovelace/config/view";
import { HomeAssistant } from "../../../../types";
export type OriginalStatesViewStrategyConfig = {
    type: "original-states";
    areas?: AreaFilterValue;
    hide_entities_without_area?: boolean;
    hide_energy?: boolean;
};
export declare class OriginalStatesViewStrategy extends ReactiveElement {
    static generate(config: OriginalStatesViewStrategyConfig, hass: HomeAssistant): Promise<LovelaceViewConfig>;
}
declare global {
    interface HTMLElementTagNameMap {
        "original-states-view-strategy": OriginalStatesViewStrategy;
    }
}
