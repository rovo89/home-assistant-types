import { CSSResultGroup, LitElement, nothing } from "lit";
import { CoverEntity } from "../data/cover";
import { HomeAssistant } from "../types";
import "./ha-icon-button";
declare class HaCoverTiltControls extends LitElement {
    hass: HomeAssistant;
    stateObj: CoverEntity;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _onOpenTiltTap;
    private _onCloseTiltTap;
    private _onStopTiltTap;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-cover-tilt-controls": HaCoverTiltControls;
    }
}
export {};
