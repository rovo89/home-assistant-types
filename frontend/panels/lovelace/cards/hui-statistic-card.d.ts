import { CSSResultGroup, LitElement, PropertyValues, nothing } from "lit";
import "../../../components/ha-alert";
import "../../../components/ha-card";
import "../../../components/ha-state-icon";
import { HomeAssistant } from "../../../types";
import { LovelaceCard, LovelaceCardEditor } from "../types";
import { StatisticCardConfig } from "./types";
export declare class HuiStatisticCard extends LitElement implements LovelaceCard {
    static getConfigElement(): Promise<LovelaceCardEditor>;
    static getStubConfig(hass: HomeAssistant, entities: string[], entitiesFill: string[]): {
        entity: any;
        period: {
            calendar: {
                period: string;
            };
        };
    };
    hass?: HomeAssistant;
    private _config?;
    private _value?;
    private _metadata?;
    private _error?;
    private _interval?;
    private _footerElement?;
    disconnectedCallback(): void;
    setConfig(config: StatisticCardConfig): void;
    getCardSize(): Promise<number>;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected firstUpdated(): void;
    protected updated(changedProps: PropertyValues): void;
    private _fetchStatistic;
    private _fetchMetadata;
    private _handleClick;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-statistic-card": HuiStatisticCard;
    }
}
