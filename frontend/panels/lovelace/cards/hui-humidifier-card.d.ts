import { CSSResultGroup, LitElement, PropertyValues, nothing } from "lit";
import "../../../components/ha-card";
import "../../../components/ha-icon-button";
import "../../../state-control/humidifier/ha-state-control-humidifier-humidity";
import { HomeAssistant } from "../../../types";
import "../card-features/hui-card-features";
import { LovelaceCard, LovelaceCardEditor } from "../types";
import { HumidifierCardConfig } from "./types";
export declare class HuiHumidifierCard extends LitElement implements LovelaceCard {
    static getConfigElement(): Promise<LovelaceCardEditor>;
    static getStubConfig(hass: HomeAssistant, entities: string[], entitiesFallback: string[]): HumidifierCardConfig;
    hass?: HomeAssistant;
    private _config?;
    getCardSize(): number;
    setConfig(config: HumidifierCardConfig): void;
    private _handleMoreInfo;
    protected updated(changedProps: PropertyValues): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-humidifier-card": HuiHumidifierCard;
    }
}
