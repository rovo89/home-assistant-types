import { CSSResultGroup, LitElement, nothing, PropertyValues, TemplateResult } from "lit";
import "../../../components/ha-card";
import "../../../components/ha-icon-button";
import "../../../components/ha-state-icon";
import { HomeAssistant } from "../../../types";
import "../components/hui-image";
import "../components/hui-warning-element";
import { LovelaceCard, LovelaceCardEditor } from "../types";
import { PictureGlanceCardConfig } from "./types";
declare class HuiPictureGlanceCard extends LitElement implements LovelaceCard {
    static getConfigElement(): Promise<LovelaceCardEditor>;
    static getStubConfig(hass: HomeAssistant, entities: string[], entitiesFallback: string[]): PictureGlanceCardConfig;
    hass: HomeAssistant;
    private _config?;
    private _entitiesDialog?;
    private _entitiesToggle?;
    getCardSize(): number;
    setConfig(config: PictureGlanceCardConfig): void;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected updated(changedProps: PropertyValues): void;
    protected render(): typeof nothing | TemplateResult<1>;
    private renderEntity;
    private _handleAction;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-picture-glance-card": HuiPictureGlanceCard;
    }
}
export {};
