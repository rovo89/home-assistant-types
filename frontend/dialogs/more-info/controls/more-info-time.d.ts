import { HassEntity } from "home-assistant-js-websocket";
import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../components/ha-date-input";
import "../../../components/ha-time-input";
import type { HomeAssistant } from "../../../types";
declare class MoreInfoTime extends LitElement {
    hass: HomeAssistant;
    stateObj?: HassEntity;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _stopEventPropagation;
    private _timeChanged;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "more-info-time": MoreInfoTime;
    }
}
export {};
