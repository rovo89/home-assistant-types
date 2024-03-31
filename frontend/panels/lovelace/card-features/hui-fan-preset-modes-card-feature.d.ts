import { HassEntity } from "home-assistant-js-websocket";
import { LitElement, PropertyValues, TemplateResult } from "lit";
import "../../../components/ha-attribute-icon";
import "../../../components/ha-control-select";
import "../../../components/ha-control-select-menu";
import { FanEntity } from "../../../data/fan";
import { HomeAssistant } from "../../../types";
import { LovelaceCardFeature, LovelaceCardFeatureEditor } from "../types";
import { FanPresetModesCardFeatureConfig } from "./types";
export declare const supportsFanPresetModesCardFeature: (stateObj: HassEntity) => boolean;
declare class HuiFanPresetModesCardFeature extends LitElement implements LovelaceCardFeature {
    hass?: HomeAssistant;
    stateObj?: FanEntity;
    private _config?;
    _currentPresetMode?: string;
    private _haSelect?;
    static getStubConfig(_: any, stateObj?: HassEntity): FanPresetModesCardFeatureConfig;
    static getConfigElement(): Promise<LovelaceCardFeatureEditor>;
    setConfig(config: FanPresetModesCardFeatureConfig): void;
    protected willUpdate(changedProp: PropertyValues): void;
    protected updated(changedProps: PropertyValues): void;
    private _valueChanged;
    private _setMode;
    protected render(): TemplateResult | null;
    static get styles(): import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-fan-preset-modes-card-feature": HuiFanPresetModesCardFeature;
    }
}
export {};
