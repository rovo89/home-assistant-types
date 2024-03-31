import type { HassEntity } from "home-assistant-js-websocket";
import { CSSResultGroup, LitElement, PropertyValues, TemplateResult } from "lit";
import "../components/entity/state-info";
import { HomeAssistant } from "../types";
declare class StateCardTimer extends LitElement {
    hass: HomeAssistant;
    stateObj: HassEntity;
    inDialog: boolean;
    timeRemaining?: number;
    private _updateRemaining;
    protected render(): TemplateResult;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected willUpdate(changedProp: PropertyValues): void;
    private _clearInterval;
    private _startInterval;
    private _calculateRemaining;
    private _displayState;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "state-card-timer": StateCardTimer;
    }
}
export {};
