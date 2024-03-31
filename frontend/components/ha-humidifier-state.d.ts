import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import { HumidifierEntity } from "../data/humidifier";
import type { HomeAssistant } from "../types";
declare class HaHumidifierState extends LitElement {
    hass: HomeAssistant;
    stateObj: HumidifierEntity;
    protected render(): TemplateResult;
    private _computeCurrentStatus;
    private _computeTarget;
    private _localizeState;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-humidifier-state": HaHumidifierState;
    }
}
export {};
