import "@material/mwc-button";
import { HassEntity } from "home-assistant-js-websocket";
import "../components/entity/state-info";
import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import { HomeAssistant } from "../types";
declare class StateCardConfigurator extends LitElement {
    hass: HomeAssistant;
    stateObj: HassEntity;
    inDialog: boolean;
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "state-card-configurator": StateCardConfigurator;
    }
}
export {};
