import "@material/mwc-button";
import { HassEntity } from "home-assistant-js-websocket";
import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../components/ha-relative-time";
import { HomeAssistant } from "../../../types";
declare class MoreInfoAutomation extends LitElement {
    hass: HomeAssistant;
    stateObj?: HassEntity;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _runActions;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "more-info-automation": MoreInfoAutomation;
    }
}
export {};
