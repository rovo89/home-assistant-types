import { HassEntity } from "home-assistant-js-websocket";
import { LitElement, nothing } from "lit";
import { HomeAssistant } from "../types";
declare class HaAttributeValue extends LitElement {
    hass: HomeAssistant;
    stateObj?: HassEntity;
    attribute: string;
    hideUnit: boolean;
    protected render(): string | typeof nothing | import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-attribute-value": HaAttributeValue;
    }
}
export {};
