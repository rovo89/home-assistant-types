import { HassEntity } from "home-assistant-js-websocket";
import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../components/ha-relative-time";
import { HomeAssistant } from "../../../types";
declare class MoreInfoSun extends LitElement {
    hass: HomeAssistant;
    stateObj?: HassEntity;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "more-info-sun": MoreInfoSun;
    }
}
export {};
