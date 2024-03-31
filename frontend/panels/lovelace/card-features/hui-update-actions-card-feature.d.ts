import { HassEntity } from "home-assistant-js-websocket";
import { LitElement, nothing } from "lit";
import "../../../components/ha-control-button";
import "../../../components/ha-control-button-group";
import { HomeAssistant } from "../../../types";
import { LovelaceCardFeature, LovelaceCardFeatureEditor } from "../types";
import { UpdateActionsCardFeatureConfig } from "./types";
export declare const DEFAULT_UPDATE_BACKUP_OPTION = "ask";
export declare const supportsUpdateActionsCardFeature: (stateObj: HassEntity) => boolean;
declare class HuiUpdateActionsCardFeature extends LitElement implements LovelaceCardFeature {
    hass?: HomeAssistant;
    stateObj?: HassEntity;
    private _config?;
    static getConfigElement(): Promise<LovelaceCardFeatureEditor>;
    static getStubConfig(): UpdateActionsCardFeatureConfig;
    setConfig(config: UpdateActionsCardFeatureConfig): void;
    private get _installDisabled();
    private get _skipDisabled();
    private _install;
    private _skip;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-update-actions-card-feature": HuiUpdateActionsCardFeature;
    }
}
export {};
