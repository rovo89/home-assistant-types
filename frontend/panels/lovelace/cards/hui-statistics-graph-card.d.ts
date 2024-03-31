import { CSSResultGroup, LitElement, PropertyValues, nothing } from "lit";
import "../../../components/ha-card";
import { HomeAssistant } from "../../../types";
import { LovelaceCard } from "../types";
import { StatisticsGraphCardConfig } from "./types";
export declare const DEFAULT_DAYS_TO_SHOW = 30;
export declare class HuiStatisticsGraphCard extends LitElement implements LovelaceCard {
    static getConfigElement(): Promise<import("../editor/config-elements/hui-statistics-graph-card-editor").HuiStatisticsGraphCardEditor>;
    static getStubConfig(hass: HomeAssistant, entities: string[], entitiesFill: string[]): StatisticsGraphCardConfig;
    hass?: HomeAssistant;
    private _config?;
    private _statistics?;
    private _metadata?;
    private _unit?;
    private _entities;
    private _names;
    private _interval?;
    private _statTypes?;
    disconnectedCallback(): void;
    connectedCallback(): void;
    getCardSize(): number;
    setConfig(config: StatisticsGraphCardConfig): void;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    willUpdate(changedProps: PropertyValues): void;
    private _setFetchStatisticsTimer;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private get _intervalTimeout();
    private _getStatisticsMetaData;
    private _getStatistics;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-statistics-graph-card": HuiStatisticsGraphCard;
    }
}
