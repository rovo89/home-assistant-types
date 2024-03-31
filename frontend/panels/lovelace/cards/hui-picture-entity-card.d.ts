import { CSSResultGroup, LitElement, PropertyValues, TemplateResult, nothing } from "lit";
import "../../../components/ha-card";
import { HomeAssistant } from "../../../types";
import "../components/hui-image";
import { LovelaceCard, LovelaceCardEditor } from "../types";
import { PictureEntityCardConfig } from "./types";
declare class HuiPictureEntityCard extends LitElement implements LovelaceCard {
    static getConfigElement(): Promise<LovelaceCardEditor>;
    static getStubConfig(hass: HomeAssistant, entities: string[], entitiesFallback: string[]): PictureEntityCardConfig;
    hass?: HomeAssistant;
    private _config?;
    getCardSize(): number;
    setConfig(config: PictureEntityCardConfig): void;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected updated(changedProps: PropertyValues): void;
    protected render(): typeof nothing | TemplateResult<1>;
    static get styles(): CSSResultGroup;
    private _handleAction;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-picture-entity-card": HuiPictureEntityCard;
    }
}
export {};
