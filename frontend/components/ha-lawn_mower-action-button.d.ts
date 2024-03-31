import "@material/mwc-button";
import { CSSResultGroup, LitElement } from "lit";
import { LawnMowerEntity } from "../data/lawn_mower";
import { HomeAssistant } from "../types";
declare class HaLawnMowerActionButton extends LitElement {
    hass: HomeAssistant;
    stateObj: LawnMowerEntity;
    render(): import("lit-html").TemplateResult<1>;
    callService(ev: any): void;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-lawn_mower-action-button": HaLawnMowerActionButton;
    }
}
export {};
