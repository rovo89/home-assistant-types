import { HassEntity } from "home-assistant-js-websocket";
import { CSSResultGroup, LitElement, PropertyValues, nothing } from "lit";
import "../../../components/chips/ha-assist-chip";
import "../../../components/ha-card";
import "../../../components/ha-state-icon";
import "../../../components/ha-textfield";
import { AlarmMode } from "../../../data/alarm_control_panel";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCard } from "../types";
import { AlarmPanelCardConfig, AlarmPanelCardConfigState } from "./types";
export declare const DEFAULT_STATES: AlarmPanelCardConfigState[];
export declare const ALARM_MODE_STATE_MAP: Record<AlarmPanelCardConfigState, AlarmMode>;
export declare const filterSupportedAlarmStates: (stateObj: HassEntity | undefined, states: AlarmPanelCardConfigState[]) => AlarmPanelCardConfigState[];
declare class HuiAlarmPanelCard extends LitElement implements LovelaceCard {
    static getConfigElement(): Promise<import("../editor/config-elements/hui-alarm-panel-card-editor").HuiAlarmPanelCardEditor>;
    static getStubConfig(hass: HomeAssistant, entities: string[], entitiesFallback: string[]): AlarmPanelCardConfig;
    hass?: HomeAssistant;
    private _config?;
    private _input?;
    getCardSize(): Promise<number>;
    setConfig(config: AlarmPanelCardConfig): void;
    protected updated(changedProps: PropertyValues): void;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _actionDisplay;
    private _stateDisplay;
    private _handlePadClick;
    private _handleActionClick;
    private _handleMoreInfo;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-alarm-panel-card": HuiAlarmPanelCard;
    }
}
export {};
