import { PropertyValues, ReactiveElement } from "lit";
import "../../../components/ha-svg-icon";
import { LovelaceCardConfig } from "../../../data/lovelace/config/card";
import { LovelaceSectionRawConfig } from "../../../data/lovelace/config/section";
import type { HomeAssistant } from "../../../types";
import type { HuiErrorCard } from "../cards/hui-error-card";
import type { Lovelace, LovelaceCard } from "../types";
export declare class HuiSection extends ReactiveElement {
    hass: HomeAssistant;
    lovelace: Lovelace;
    config: LovelaceSectionRawConfig;
    index: number;
    viewIndex: number;
    private _cards;
    private _layoutElementType?;
    private _layoutElement?;
    createCardElement(cardConfig: LovelaceCardConfig): HuiErrorCard | LovelaceCard;
    protected createRenderRoot(): this;
    willUpdate(changedProperties: PropertyValues<typeof this>): void;
    protected update(changedProperties: any): void;
    private _initializeConfig;
    private _createLayoutElement;
    private _createCards;
    private _rebuildCard;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-section": HuiSection;
    }
}
