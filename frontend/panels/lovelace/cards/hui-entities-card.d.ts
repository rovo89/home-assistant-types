import { CSSResultGroup, LitElement, PropertyValues, TemplateResult, nothing } from "lit";
import "../../../components/ha-card";
import { HomeAssistant } from "../../../types";
import "../components/hui-entities-toggle";
import { LovelaceCard, LovelaceCardEditor } from "../types";
import { EntitiesCardConfig } from "./types";
declare class HuiEntitiesCard extends LitElement implements LovelaceCard {
    static getConfigElement(): Promise<LovelaceCardEditor>;
    static getStubConfig(hass: HomeAssistant, entities: string[], entitiesFallback: string[]): EntitiesCardConfig;
    private _config?;
    private _hass?;
    private _configEntities?;
    private _showHeaderToggle?;
    private _headerElement?;
    private _footerElement?;
    set hass(hass: HomeAssistant);
    getCardSize(): Promise<number>;
    setConfig(config: EntitiesCardConfig): void;
    protected updated(changedProps: PropertyValues): void;
    protected render(): typeof nothing | TemplateResult<1>;
    static get styles(): CSSResultGroup;
    private renderEntity;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-entities-card": HuiEntitiesCard;
    }
}
export {};
