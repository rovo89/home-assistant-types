import { HassEntity } from "home-assistant-js-websocket";
import { LitElement, nothing } from "lit";
import "../../../components/ha-attributes";
import { HomeAssistant } from "../../../types";
declare class MoreInfoDefault extends LitElement {
    hass: HomeAssistant;
    stateObj?: HassEntity;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "more-info-default": MoreInfoDefault;
    }
}
export {};
