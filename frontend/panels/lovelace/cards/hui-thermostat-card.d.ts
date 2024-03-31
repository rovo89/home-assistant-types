import { CSSResultGroup, LitElement, PropertyValues, nothing } from "lit";
import "../../../components/ha-card";
import "../../../components/ha-icon-button";
import "../../../state-control/climate/ha-state-control-climate-temperature";
import { HomeAssistant } from "../../../types";
import "../card-features/hui-card-features";
import { LovelaceCard, LovelaceCardEditor } from "../types";
import { ThermostatCardConfig } from "./types";
export declare class HuiThermostatCard extends LitElement implements LovelaceCard {
    static getConfigElement(): Promise<LovelaceCardEditor>;
    static getStubConfig(hass: HomeAssistant, entities: string[], entitiesFallback: string[]): ThermostatCardConfig;
    hass?: HomeAssistant;
    private _config?;
    getCardSize(): number;
    setConfig(config: ThermostatCardConfig): void;
    private _handleMoreInfo;
    protected updated(changedProps: PropertyValues): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-thermostat-card": HuiThermostatCard;
    }
}
