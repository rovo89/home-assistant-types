import { CSSResultGroup, LitElement, PropertyValues, nothing } from "lit";
import "../../../components/ha-card";
import "../../../components/ha-svg-icon";
import { HomeAssistant } from "../../../types";
import { LovelaceCard, LovelaceCardEditor } from "../types";
import { PlantStatusCardConfig } from "./types";
declare class HuiPlantStatusCard extends LitElement implements LovelaceCard {
    static getConfigElement(): Promise<LovelaceCardEditor>;
    static getStubConfig(hass: HomeAssistant, entities: string[], entitiesFallback: string[]): PlantStatusCardConfig;
    hass?: HomeAssistant;
    private _config?;
    getCardSize(): number;
    setConfig(config: PlantStatusCardConfig): void;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected updated(changedProps: PropertyValues): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
    private computeAttributes;
    private _handleMoreInfo;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-plant-status-card": HuiPlantStatusCard;
    }
}
export {};
