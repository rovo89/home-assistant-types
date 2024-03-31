import { HomeAssistant } from "../../../types";
import { ConditionalElementConfig, LovelaceElement } from "./types";
declare class HuiConditionalElement extends HTMLElement implements LovelaceElement {
    _hass?: HomeAssistant;
    private _config?;
    private _elements;
    setConfig(config: ConditionalElementConfig): void;
    set hass(hass: HomeAssistant);
    private updateElements;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-conditional-element": HuiConditionalElement;
    }
}
export {};
