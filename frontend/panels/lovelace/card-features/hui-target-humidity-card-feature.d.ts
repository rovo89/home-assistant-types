import { HassEntity } from "home-assistant-js-websocket";
import { LitElement, nothing, PropertyValues } from "lit";
import "../../../components/ha-control-slider";
import { HumidifierEntity } from "../../../data/humidifier";
import { HomeAssistant } from "../../../types";
import { LovelaceCardFeature } from "../types";
import { TargetHumidityCardFeatureConfig } from "./types";
export declare const supportsTargetHumidityCardFeature: (stateObj: HassEntity) => boolean;
declare class HuiTargetHumidityCardFeature extends LitElement implements LovelaceCardFeature {
    hass?: HomeAssistant;
    stateObj?: HumidifierEntity;
    private _config?;
    private _targetHumidity?;
    static getStubConfig(): TargetHumidityCardFeatureConfig;
    setConfig(config: TargetHumidityCardFeatureConfig): void;
    protected willUpdate(changedProp: PropertyValues): void;
    private get _step();
    private get _min();
    private get _max();
    private _valueChanged;
    private _callService;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-target-humidity-card-feature": HuiTargetHumidityCardFeature;
    }
}
export {};
