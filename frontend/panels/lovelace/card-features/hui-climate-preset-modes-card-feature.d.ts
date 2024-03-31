import { HassEntity } from "home-assistant-js-websocket";
import { LitElement, PropertyValues, TemplateResult } from "lit";
import "../../../components/ha-attribute-icon";
import "../../../components/ha-control-select";
import "../../../components/ha-control-select-menu";
import { ClimateEntity } from "../../../data/climate";
import { HomeAssistant } from "../../../types";
import { LovelaceCardFeature, LovelaceCardFeatureEditor } from "../types";
import { ClimatePresetModesCardFeatureConfig } from "./types";
export declare const supportsClimatePresetModesCardFeature: (stateObj: HassEntity) => boolean;
declare class HuiClimatePresetModesCardFeature extends LitElement implements LovelaceCardFeature {
    hass?: HomeAssistant;
    stateObj?: ClimateEntity;
    private _config?;
    _currentPresetMode?: string;
    private _haSelect?;
    static getStubConfig(_: any, stateObj?: HassEntity): ClimatePresetModesCardFeatureConfig;
    static getConfigElement(): Promise<LovelaceCardFeatureEditor>;
    setConfig(config: ClimatePresetModesCardFeatureConfig): void;
    protected willUpdate(changedProp: PropertyValues): void;
    protected updated(changedProps: PropertyValues): void;
    private _valueChanged;
    private _setMode;
    protected render(): TemplateResult | null;
    static get styles(): import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-climate-preset-modes-card-feature": HuiClimatePresetModesCardFeature;
    }
}
export {};
