import "@material/mwc-button";
import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import { HassEntity } from "home-assistant-js-websocket";
import { HomeAssistant } from "../types";
export declare class HaVacuumState extends LitElement {
    hass: HomeAssistant;
    stateObj: HassEntity;
    protected render(): TemplateResult;
    private _computeInterceptable;
    private _computeLabel;
    private _callService;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-vacuum-state": HaVacuumState;
    }
}
