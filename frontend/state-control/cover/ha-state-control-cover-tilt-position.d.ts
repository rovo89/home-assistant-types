import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import "../../components/ha-control-slider";
import { CoverEntity } from "../../data/cover";
import { HomeAssistant } from "../../types";
export declare function generateTiltSliderTrackBackgroundGradient(): import("lit").CSSResult;
export declare class HaStateControlInfoCoverTiltPosition extends LitElement {
    hass: HomeAssistant;
    stateObj: CoverEntity;
    value?: number;
    protected updated(changedProp: Map<string | number | symbol, unknown>): void;
    private _valueChanged;
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-state-control-cover-tilt-position": HaStateControlInfoCoverTiltPosition;
    }
}
