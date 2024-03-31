import { CSSResultGroup, LitElement, nothing } from "lit";
import { CoverEntity } from "../data/cover";
import type { HomeAssistant } from "../types";
import "./ha-icon-button";
declare class HaCoverControls extends LitElement {
    hass: HomeAssistant;
    stateObj: CoverEntity;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _onOpenTap;
    private _onCloseTap;
    private _onStopTap;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-cover-controls": HaCoverControls;
    }
}
export {};
