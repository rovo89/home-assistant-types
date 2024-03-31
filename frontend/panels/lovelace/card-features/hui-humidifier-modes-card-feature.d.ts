import { HassEntity } from "home-assistant-js-websocket";
import { LitElement, PropertyValues, TemplateResult } from "lit";
import "../../../components/ha-attribute-icon";
import "../../../components/ha-control-select";
import "../../../components/ha-control-select-menu";
import { HumidifierEntity } from "../../../data/humidifier";
import { HomeAssistant } from "../../../types";
import { LovelaceCardFeature, LovelaceCardFeatureEditor } from "../types";
import { HumidifierModesCardFeatureConfig } from "./types";
export declare const supportsHumidifierModesCardFeature: (stateObj: HassEntity) => boolean;
declare class HuiHumidifierModesCardFeature extends LitElement implements LovelaceCardFeature {
    hass?: HomeAssistant;
    stateObj?: HumidifierEntity;
    private _config?;
    _currentMode?: string;
    private _haSelect?;
    static getStubConfig(_: any, stateObj?: HassEntity): HumidifierModesCardFeatureConfig;
    static getConfigElement(): Promise<LovelaceCardFeatureEditor>;
    setConfig(config: HumidifierModesCardFeatureConfig): void;
    protected willUpdate(changedProp: PropertyValues): void;
    protected updated(changedProps: PropertyValues): void;
    private _valueChanged;
    private _setMode;
    protected render(): TemplateResult | null;
    static get styles(): import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-humidifier-modes-card-feature": HuiHumidifierModesCardFeature;
    }
}
export {};
