import { CSSResultGroup, LitElement, PropertyValues, nothing } from "lit";
import "../../../components/chart/state-history-charts";
import "../../../components/ha-alert";
import "../../../components/ha-card";
import "../../../components/ha-icon-button";
import { HomeAssistant } from "../../../types";
import { LovelaceCard } from "../types";
import { HistoryGraphCardConfig } from "./types";
export declare const DEFAULT_HOURS_TO_SHOW = 24;
export declare class HuiHistoryGraphCard extends LitElement implements LovelaceCard {
    static getConfigElement(): Promise<import("../editor/config-elements/hui-history-graph-card-editor").HuiHistoryGraphCardEditor>;
    static getStubConfig(): HistoryGraphCardConfig;
    hass?: HomeAssistant;
    private _stateHistory?;
    private _config?;
    private _error?;
    private _names;
    private _entityIds;
    private _hoursToShow;
    private _interval?;
    private _subscribed?;
    getCardSize(): number;
    setConfig(config: HistoryGraphCardConfig): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _subscribeHistory;
    private _redrawGraph;
    private _setRedrawTimer;
    private _unsubscribeHistory;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected updated(changedProps: PropertyValues): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-history-graph-card": HuiHistoryGraphCard;
    }
}
