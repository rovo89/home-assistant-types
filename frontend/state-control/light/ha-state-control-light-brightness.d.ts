import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import "../../components/ha-control-slider";
import { LightEntity } from "../../data/light";
import { HomeAssistant } from "../../types";
export declare class HaStateControlLightBrightness extends LitElement {
    hass: HomeAssistant;
    stateObj: LightEntity;
    value?: number;
    protected updated(changedProp: Map<string | number | symbol, unknown>): void;
    private _valueChanged;
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-state-control-light-brightness": HaStateControlLightBrightness;
    }
}
