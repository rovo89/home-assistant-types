import { HassEntity } from "home-assistant-js-websocket";
import { LitElement, nothing, PropertyValues } from "lit";
import "../../../components/ha-control-button-group";
import "../../../components/ha-control-number-buttons";
import { ClimateEntity } from "../../../data/climate";
import { WaterHeaterEntity } from "../../../data/water_heater";
import { HomeAssistant } from "../../../types";
import { LovelaceCardFeature } from "../types";
import { TargetTemperatureCardFeatureConfig } from "./types";
export declare const supportsTargetTemperatureCardFeature: (stateObj: HassEntity) => boolean;
declare class HuiTargetTemperatureCardFeature extends LitElement implements LovelaceCardFeature {
    hass?: HomeAssistant;
    stateObj?: ClimateEntity | WaterHeaterEntity;
    private _config?;
    private _targetTemperature;
    static getStubConfig(): TargetTemperatureCardFeatureConfig;
    setConfig(config: TargetTemperatureCardFeatureConfig): void;
    protected willUpdate(changedProp: PropertyValues): void;
    private get _step();
    private get _min();
    private get _max();
    private _valueChanged;
    private _debouncedCallService;
    private _callService;
    private _supportsTarget;
    private _supportsTargetRange;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-target-temperature-card-feature": HuiTargetTemperatureCardFeature;
    }
}
export {};
