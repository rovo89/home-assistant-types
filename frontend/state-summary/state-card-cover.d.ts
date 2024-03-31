import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import "../components/entity/state-info";
import "../components/ha-cover-controls";
import "../components/ha-cover-tilt-controls";
import { CoverEntity } from "../data/cover";
import { HomeAssistant } from "../types";
declare class StateCardCover extends LitElement {
    hass: HomeAssistant;
    stateObj: CoverEntity;
    inDialog: boolean;
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "state-card-cover": StateCardCover;
    }
}
export {};
