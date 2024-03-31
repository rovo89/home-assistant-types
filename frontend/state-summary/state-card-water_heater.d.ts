import type { HassEntity } from "home-assistant-js-websocket";
import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import "../components/entity/state-info";
import "../components/ha-water_heater-state";
import { HomeAssistant } from "../types";
declare class StateCardWaterHeater extends LitElement {
    hass: HomeAssistant;
    stateObj: HassEntity;
    inDialog: boolean;
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "state-card-water_heater": StateCardWaterHeater;
    }
}
export {};
