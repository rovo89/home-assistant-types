import type { HassEntity } from "home-assistant-js-websocket";
import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import "../components/entity/state-info";
import "../components/ha-humidifier-state";
import { HomeAssistant } from "../types";
declare class StateCardHumidifier extends LitElement {
    hass: HomeAssistant;
    stateObj: HassEntity;
    inDialog: boolean;
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "state-card-humidifier": StateCardHumidifier;
    }
}
export {};
