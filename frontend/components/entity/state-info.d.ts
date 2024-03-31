import "@lrnwebcomponents/simple-tooltip/simple-tooltip";
import type { HassEntity } from "home-assistant-js-websocket";
import { CSSResultGroup, LitElement, nothing } from "lit";
import type { HomeAssistant } from "../../types";
import "../ha-relative-time";
import "./state-badge";
declare class StateInfo extends LitElement {
    hass: HomeAssistant;
    stateObj?: HassEntity;
    inDialog: boolean;
    color?: string;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "state-info": StateInfo;
    }
}
export {};
