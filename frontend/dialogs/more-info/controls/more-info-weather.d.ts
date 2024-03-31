import "@material/mwc-tab";
import "@material/mwc-tab-bar";
import { CSSResultGroup, LitElement, PropertyValues, nothing } from "lit";
import "../../../components/ha-svg-icon";
import { WeatherEntity } from "../../../data/weather";
import { HomeAssistant } from "../../../types";
declare class MoreInfoWeather extends LitElement {
    hass: HomeAssistant;
    stateObj?: WeatherEntity;
    private _forecastEvent?;
    private _forecastType?;
    private _subscribed?;
    private _unsubscribeForecastEvents;
    private _subscribeForecastEvents;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected willUpdate(changedProps: PropertyValues): void;
    private _supportedForecasts;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _handleForecastTypeChanged;
    static get styles(): CSSResultGroup;
    private _showValue;
}
declare global {
    interface HTMLElementTagNameMap {
        "more-info-weather": MoreInfoWeather;
    }
}
export {};
