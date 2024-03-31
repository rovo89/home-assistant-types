import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import { HassEntity } from "home-assistant-js-websocket";
import { HomeAssistant } from "../types";
export declare class HaWaterHeaterState extends LitElement {
    hass: HomeAssistant;
    stateObj: HassEntity;
    protected render(): TemplateResult;
    private _computeTarget;
    _localizeState(stateObj: any): string;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-water_heater-state": HaWaterHeaterState;
    }
}
