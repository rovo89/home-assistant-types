import { HassEntity } from "home-assistant-js-websocket";
import { CSSResultGroup, LitElement } from "lit";
import "../components/entity/ha-entity-toggle";
import "../components/entity/state-info";
import { HomeAssistant } from "../types";
declare class StateCardEvent extends LitElement {
    hass: HomeAssistant;
    stateObj: HassEntity;
    inDialog: boolean;
    protected render(): import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "state-card-event": StateCardEvent;
    }
}
export {};
