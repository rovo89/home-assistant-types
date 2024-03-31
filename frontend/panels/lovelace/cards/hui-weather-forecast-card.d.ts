import { CSSResultGroup, LitElement, PropertyValues, nothing } from "lit";
import "../../../components/ha-card";
import "../../../components/ha-svg-icon";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCard, LovelaceCardEditor } from "../types";
import type { WeatherForecastCardConfig } from "./types";
declare class HuiWeatherForecastCard extends LitElement implements LovelaceCard {
    static getConfigElement(): Promise<LovelaceCardEditor>;
    static getStubConfig(hass: HomeAssistant, entities: string[], entitiesFallback: string[]): WeatherForecastCardConfig;
    hass?: HomeAssistant;
    private _config?;
    private _forecastEvent?;
    private _subscribed?;
    veryVeryNarrow: boolean;
    private _resizeObserver?;
    private _needForecastSubscription;
    private _unsubscribeForecastEvents;
    private _subscribeForecastEvents;
    connectedCallback(): void;
    disconnectedCallback(): void;
    getCardSize(): number;
    setConfig(config: WeatherForecastCardConfig): void;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    willUpdate(): void;
    protected firstUpdated(): void;
    protected updated(changedProps: PropertyValues): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _handleAction;
    private _attachObserver;
    private _measureCard;
    private _showValue;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-weather-forecast-card": HuiWeatherForecastCard;
    }
}
export {};
