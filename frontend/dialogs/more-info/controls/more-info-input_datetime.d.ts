import { HassEntity } from "home-assistant-js-websocket";
import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../components/ha-date-input";
import "../../../components/ha-time-input";
import type { HomeAssistant } from "../../../types";
declare class MoreInfoInputDatetime extends LitElement {
    hass: HomeAssistant;
    stateObj?: HassEntity;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _stopEventPropagation;
    private _timeChanged;
    private _dateChanged;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "more-info-input_datetime": MoreInfoInputDatetime;
    }
}
export {};
