import { HassEntity } from "home-assistant-js-websocket";
import { LitElement, nothing, PropertyValues } from "lit";
import { HomeAssistant } from "../../../types";
import { LovelaceCardFeature, LovelaceCardFeatureEditor } from "../types";
import { NumericInputCardFeatureConfig } from "./types";
import "../../../components/ha-control-button";
import "../../../components/ha-control-button-group";
import "../../../components/ha-control-number-buttons";
import "../../../components/ha-control-slider";
import "../../../components/ha-icon";
export declare const supportsNumericInputCardFeature: (stateObj: HassEntity) => boolean;
declare class HuiNumericInputCardFeature extends LitElement implements LovelaceCardFeature {
    hass?: HomeAssistant;
    stateObj?: HassEntity;
    private _config?;
    _currentState?: string;
    static getStubConfig(): NumericInputCardFeatureConfig;
    static getConfigElement(): Promise<LovelaceCardFeatureEditor>;
    setConfig(config: NumericInputCardFeatureConfig): void;
    protected willUpdate(changedProp: PropertyValues): void;
    private _setValue;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-numeric-input-card-feature": HuiNumericInputCardFeature;
    }
}
export {};
