import { HassEntity } from "home-assistant-js-websocket";
import { LitElement, PropertyValues, TemplateResult } from "lit";
import "../../../components/ha-control-select";
import "../../../components/ha-control-select-menu";
import { ClimateEntity, HvacMode } from "../../../data/climate";
import { HomeAssistant } from "../../../types";
import { LovelaceCardFeature, LovelaceCardFeatureEditor } from "../types";
import { ClimateHvacModesCardFeatureConfig } from "./types";
export declare const supportsClimateHvacModesCardFeature: (stateObj: HassEntity) => boolean;
declare class HuiClimateHvacModesCardFeature extends LitElement implements LovelaceCardFeature {
    hass?: HomeAssistant;
    stateObj?: ClimateEntity;
    private _config?;
    _currentHvacMode?: HvacMode;
    private _haSelect?;
    static getStubConfig(_: any, stateObj?: HassEntity): ClimateHvacModesCardFeatureConfig;
    static getConfigElement(): Promise<LovelaceCardFeatureEditor>;
    setConfig(config: ClimateHvacModesCardFeatureConfig): void;
    protected willUpdate(changedProp: PropertyValues): void;
    protected updated(changedProps: PropertyValues): void;
    private _valueChanged;
    private _setMode;
    protected render(): TemplateResult | null;
    static get styles(): import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-climate-hvac-modes-card-feature": HuiClimateHvacModesCardFeature;
    }
}
export {};
