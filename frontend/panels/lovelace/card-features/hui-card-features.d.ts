import type { HassEntity } from "home-assistant-js-websocket";
import { CSSResultGroup, LitElement, TemplateResult, nothing } from "lit";
import { HomeAssistant } from "../../../types";
import type { LovelaceCardFeatureConfig } from "./types";
export declare class HuiCardFeatures extends LitElement {
    hass: HomeAssistant;
    stateObj: HassEntity;
    features?: LovelaceCardFeatureConfig[];
    color?: string;
    private _featuresElements;
    private _getFeatureElement;
    private renderFeature;
    protected render(): typeof nothing | TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-card-features": HuiCardFeatures;
    }
}
