import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import { ClimateEntity } from "../data/climate";
import type { HomeAssistant } from "../types";
declare class HaClimateState extends LitElement {
    hass: HomeAssistant;
    stateObj: ClimateEntity;
    protected render(): TemplateResult;
    private _computeCurrentStatus;
    private _computeTarget;
    private _localizeState;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-climate-state": HaClimateState;
    }
}
export {};
