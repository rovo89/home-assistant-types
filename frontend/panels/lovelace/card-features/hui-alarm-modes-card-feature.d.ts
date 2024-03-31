import { HassEntity } from "home-assistant-js-websocket";
import { LitElement, PropertyValues, TemplateResult } from "lit";
import "../../../components/ha-control-button";
import "../../../components/ha-control-button-group";
import "../../../components/ha-control-select";
import "../../../components/ha-control-slider";
import { AlarmControlPanelEntity, AlarmMode } from "../../../data/alarm_control_panel";
import { HomeAssistant } from "../../../types";
import { LovelaceCardFeature, LovelaceCardFeatureEditor } from "../types";
import { AlarmModesCardFeatureConfig } from "./types";
export declare const supportsAlarmModesCardFeature: (stateObj: HassEntity) => boolean;
declare class HuiAlarmModeCardFeature extends LitElement implements LovelaceCardFeature {
    hass?: HomeAssistant;
    stateObj?: AlarmControlPanelEntity;
    private _config?;
    _currentMode?: AlarmMode;
    static getStubConfig(_: any, stateObj?: HassEntity): AlarmModesCardFeatureConfig;
    static getConfigElement(): Promise<LovelaceCardFeatureEditor>;
    setConfig(config: AlarmModesCardFeatureConfig): void;
    protected willUpdate(changedProp: PropertyValues): void;
    private _modes;
    private _getCurrentMode;
    private _valueChanged;
    private _disarm;
    private _setMode;
    protected render(): TemplateResult | null;
    static get styles(): import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-alarm-modes-card-feature": HuiAlarmModeCardFeature;
    }
}
export {};
