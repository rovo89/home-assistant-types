import { HassEntity } from "home-assistant-js-websocket";
import { LitElement, PropertyValues, TemplateResult } from "lit";
import "../../../components/ha-control-select";
import { HumidifierEntity, HumidifierState } from "../../../data/humidifier";
import { HomeAssistant } from "../../../types";
import { LovelaceCardFeature } from "../types";
import { HumidifierToggleCardFeatureConfig } from "./types";
export declare const supportsHumidifierToggleCardFeature: (stateObj: HassEntity) => boolean;
declare class HuiHumidifierToggleCardFeature extends LitElement implements LovelaceCardFeature {
    hass?: HomeAssistant;
    stateObj?: HumidifierEntity;
    private _config?;
    _currentState?: HumidifierState;
    static getStubConfig(): HumidifierToggleCardFeatureConfig;
    setConfig(config: HumidifierToggleCardFeatureConfig): void;
    protected willUpdate(changedProp: PropertyValues): void;
    private _valueChanged;
    private _setState;
    protected render(): TemplateResult | null;
    static get styles(): import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-humidifier-toggle-card-feature": HuiHumidifierToggleCardFeature;
    }
}
export {};
