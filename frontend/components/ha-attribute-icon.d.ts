import { HassEntity } from "home-assistant-js-websocket";
import { LitElement, nothing } from "lit";
import { HomeAssistant } from "../types";
import "./ha-icon";
import "./ha-svg-icon";
export declare class HaAttributeIcon extends LitElement {
    hass: HomeAssistant;
    stateObj?: HassEntity;
    attribute?: string;
    attributeValue?: string;
    icon?: string;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-attribute-icon": HaAttributeIcon;
    }
}
