import { HassEntity } from "home-assistant-js-websocket";
import { LitElement, PropertyValues, TemplateResult } from "lit";
import "../../../components/ha-control-button";
import "../../../components/ha-control-button-group";
import "../../../components/ha-control-select";
import "../../../components/ha-control-slider";
import { OperationMode, WaterHeaterEntity } from "../../../data/water_heater";
import { HomeAssistant } from "../../../types";
import { LovelaceCardFeature, LovelaceCardFeatureEditor } from "../types";
import { WaterHeaterOperationModesCardFeatureConfig } from "./types";
export declare const supportsWaterHeaterOperationModesCardFeature: (stateObj: HassEntity) => boolean;
declare class HuiWaterHeaterOperationModeCardFeature extends LitElement implements LovelaceCardFeature {
    hass?: HomeAssistant;
    stateObj?: WaterHeaterEntity;
    private _config?;
    _currentOperationMode?: OperationMode;
    static getStubConfig(_: any, stateObj?: HassEntity): WaterHeaterOperationModesCardFeatureConfig;
    static getConfigElement(): Promise<LovelaceCardFeatureEditor>;
    setConfig(config: WaterHeaterOperationModesCardFeatureConfig): void;
    protected willUpdate(changedProp: PropertyValues): void;
    private _valueChanged;
    private _setMode;
    protected render(): TemplateResult | null;
    static get styles(): import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-water-heater-operation-modes-card-feature": HuiWaterHeaterOperationModeCardFeature;
    }
}
export {};
