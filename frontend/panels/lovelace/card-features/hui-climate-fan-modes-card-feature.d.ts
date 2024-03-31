import { HassEntity } from "home-assistant-js-websocket";
import { LitElement, PropertyValues, TemplateResult } from "lit";
import "../../../components/ha-attribute-icon";
import "../../../components/ha-control-select";
import "../../../components/ha-control-select-menu";
import { ClimateEntity } from "../../../data/climate";
import { HomeAssistant } from "../../../types";
import { LovelaceCardFeature, LovelaceCardFeatureEditor } from "../types";
import { ClimateFanModesCardFeatureConfig } from "./types";
export declare const supportsClimateFanModesCardFeature: (stateObj: HassEntity) => boolean;
declare class HuiClimateFanModesCardFeature extends LitElement implements LovelaceCardFeature {
    hass?: HomeAssistant;
    stateObj?: ClimateEntity;
    private _config?;
    _currentFanMode?: string;
    private _haSelect?;
    static getStubConfig(_: any, stateObj?: HassEntity): ClimateFanModesCardFeatureConfig;
    static getConfigElement(): Promise<LovelaceCardFeatureEditor>;
    setConfig(config: ClimateFanModesCardFeatureConfig): void;
    protected willUpdate(changedProp: PropertyValues): void;
    protected updated(changedProps: PropertyValues): void;
    private _valueChanged;
    private _setMode;
    protected render(): TemplateResult | null;
    static get styles(): import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-climate-fan-modes-card-feature": HuiClimateFanModesCardFeature;
    }
}
export {};
