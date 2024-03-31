import { CSSResultGroup, LitElement } from "lit";
import "../../components/ha-control-select";
import "../../components/ha-control-slider";
import { FanEntity, FanSpeed } from "../../data/fan";
import { HomeAssistant } from "../../types";
export declare class HaStateControlFanSpeed extends LitElement {
    hass: HomeAssistant;
    stateObj: FanEntity;
    sliderValue?: number;
    speedValue?: FanSpeed;
    protected updated(changedProp: Map<string | number | symbol, unknown>): void;
    private _speedValueChanged;
    private _valueChanged;
    private _localizeSpeed;
    protected render(): import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-state-control-fan-speed": HaStateControlFanSpeed;
    }
}
