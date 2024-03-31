import type { HassEntity } from "home-assistant-js-websocket";
import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import "../components/entity/ha-entity-toggle";
import "../components/entity/state-info";
import type { HomeAssistant } from "../types";
declare class StateCardAlert extends LitElement {
    hass: HomeAssistant;
    stateObj: HassEntity;
    inDialog: boolean;
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "state-card-alert": StateCardAlert;
    }
}
export {};
