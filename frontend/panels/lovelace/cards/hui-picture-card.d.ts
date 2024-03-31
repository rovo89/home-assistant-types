import { CSSResultGroup, LitElement, nothing, PropertyValues } from "lit";
import "../../../components/ha-card";
import { HomeAssistant } from "../../../types";
import { LovelaceCard, LovelaceCardEditor } from "../types";
import { PictureCardConfig } from "./types";
export declare class HuiPictureCard extends LitElement implements LovelaceCard {
    static getConfigElement(): Promise<LovelaceCardEditor>;
    static getStubConfig(): PictureCardConfig;
    hass?: HomeAssistant;
    private _config?;
    getCardSize(): number;
    setConfig(config: PictureCardConfig): void;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected updated(changedProps: PropertyValues): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
    private _handleAction;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-picture-card": HuiPictureCard;
    }
}
