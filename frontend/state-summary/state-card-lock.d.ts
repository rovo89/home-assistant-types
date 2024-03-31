import "@material/mwc-button";
import type { HassEntity } from "home-assistant-js-websocket";
import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import "../components/entity/state-info";
import { HomeAssistant } from "../types";
declare class StateCardLock extends LitElement {
    hass: HomeAssistant;
    stateObj: HassEntity;
    inDialog: boolean;
    protected render(): TemplateResult;
    private _callService;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "state-card-lock": StateCardLock;
    }
}
export {};
