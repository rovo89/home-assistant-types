import { HassEntity } from "home-assistant-js-websocket";
import { LitElement, nothing } from "lit";
import { HomeAssistant } from "../types";
import "./ha-icon";
import "./ha-svg-icon";
export declare class HaStateIcon extends LitElement {
    hass?: HomeAssistant;
    stateObj?: HassEntity;
    stateValue?: string;
    icon?: string;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _renderFallback;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-state-icon": HaStateIcon;
    }
}
