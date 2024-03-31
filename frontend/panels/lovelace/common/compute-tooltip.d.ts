import { ActionConfig } from "../../../data/lovelace/config/action";
import { HomeAssistant } from "../../../types";
interface Config {
    entity?: string;
    title?: string;
    tap_action?: ActionConfig;
    hold_action?: ActionConfig;
    double_tap_action?: ActionConfig;
}
export declare const computeTooltip: (hass: HomeAssistant, config: Config) => string;
export {};
