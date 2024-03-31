import { HassEntity } from "home-assistant-js-websocket";
import { LitElement, nothing } from "lit";
import "../../../components/ha-control-slider";
import { HomeAssistant } from "../../../types";
import { LovelaceCardFeature } from "../types";
import { LightBrightnessCardFeatureConfig } from "./types";
export declare const supportsLightBrightnessCardFeature: (stateObj: HassEntity) => boolean;
declare class HuiLightBrightnessCardFeature extends LitElement implements LovelaceCardFeature {
    hass?: HomeAssistant;
    stateObj?: HassEntity;
    private _config?;
    static getStubConfig(): LightBrightnessCardFeatureConfig;
    setConfig(config: LightBrightnessCardFeatureConfig): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _valueChanged;
    static get styles(): import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-light-brightness-card-feature": HuiLightBrightnessCardFeature;
    }
}
export {};
