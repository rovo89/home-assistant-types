import { CSSResultGroup, LitElement, PropertyValues, nothing } from "lit";
import "../../../components/ha-card";
import { HomeAssistant } from "../../../types";
import { LovelaceCard } from "../types";
import { PictureElementsCardConfig } from "./types";
declare class HuiPictureElementsCard extends LitElement implements LovelaceCard {
    hass?: HomeAssistant;
    private _elements?;
    static getStubConfig(hass: HomeAssistant, entities: string[], entitiesFallback: string[]): PictureElementsCardConfig;
    private _config?;
    getCardSize(): number;
    setConfig(config: PictureElementsCardConfig): void;
    protected updated(changedProps: PropertyValues): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
    private _createElement;
    private _rebuildElement;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-picture-elements-card": HuiPictureElementsCard;
    }
}
export {};
