import "@material/mwc-button";
import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../components/ha-attributes";
import { TimerEntity } from "../../../data/timer";
import { HomeAssistant } from "../../../types";
declare class MoreInfoTimer extends LitElement {
    hass: HomeAssistant;
    stateObj?: TimerEntity;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _handleActionClick;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "more-info-timer": MoreInfoTimer;
    }
}
export {};
