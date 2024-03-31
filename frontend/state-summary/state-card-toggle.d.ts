import type { HassEntity } from "home-assistant-js-websocket";
import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import "../components/entity/ha-entity-toggle";
import "../components/entity/state-info";
import { HomeAssistant } from "../types";
declare class StateCardToggle extends LitElement {
    hass: HomeAssistant;
    stateObj: HassEntity;
    inDialog: boolean;
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "state-card-toggle": StateCardToggle;
    }
}
export {};
