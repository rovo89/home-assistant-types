import { HassEntity } from "home-assistant-js-websocket";
import { LitElement, nothing } from "lit";
import { HomeAssistant } from "../../../types";
import { LovelaceCardFeature } from "../types";
import { CoverPositionCardFeatureConfig } from "./types";
export declare const supportsCoverPositionCardFeature: (stateObj: HassEntity) => boolean;
declare class HuiCoverPositionCardFeature extends LitElement implements LovelaceCardFeature {
    hass?: HomeAssistant;
    stateObj?: HassEntity;
    color?: string;
    private _config?;
    static getStubConfig(): CoverPositionCardFeatureConfig;
    setConfig(config: CoverPositionCardFeatureConfig): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _valueChanged;
    static get styles(): import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-cover-position-card-feature": HuiCoverPositionCardFeature;
    }
}
export {};
