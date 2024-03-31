import { CSSResultGroup, LitElement, PropertyValues, nothing } from "lit";
import "../../../components/ha-card";
import "../../../components/ha-alert";
import "../../../components/ha-icon-button";
import "../../../components/map/ha-map";
import { HomeAssistant } from "../../../types";
import { LovelaceCard } from "../types";
import { MapCardConfig } from "./types";
export declare const DEFAULT_HOURS_TO_SHOW = 0;
export declare const DEFAULT_ZOOM = 14;
declare class HuiMapCard extends LitElement implements LovelaceCard {
    hass: HomeAssistant;
    isPanel: boolean;
    private _stateHistory?;
    private _config?;
    private _map?;
    private _configEntities?;
    private _mapEntities;
    private _colorDict;
    private _colorIndex;
    private _error?;
    private _subscribed?;
    setConfig(config: MapCardConfig): void;
    getCardSize(): number;
    static getConfigElement(): Promise<import("../editor/config-elements/hui-map-card-editor").HuiMapCardEditor>;
    static getStubConfig(hass: HomeAssistant, entities: string[], entitiesFallback: string[]): MapCardConfig;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected willUpdate(changedProps: PropertyValues): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _subscribeHistory;
    private _unsubscribeHistory;
    protected updated(changedProps: PropertyValues): void;
    private _computePadding;
    private _fitMap;
    private _getColor;
    private _getSourceEntities;
    private _getMapEntities;
    private _getHistoryPaths;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-map-card": HuiMapCard;
    }
}
export {};
