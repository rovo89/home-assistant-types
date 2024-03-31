import { HassEntity } from "home-assistant-js-websocket";
import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import "../components/ha-control-button";
import "../components/ha-control-switch";
import { HomeAssistant } from "../types";
export declare class HaStateControlToggle extends LitElement {
    hass: HomeAssistant;
    stateObj: HassEntity;
    iconPathOn?: string;
    iconPathOff?: string;
    private _valueChanged;
    private _turnOn;
    private _turnOff;
    private _callService;
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-state-control-toggle": HaStateControlToggle;
    }
}
