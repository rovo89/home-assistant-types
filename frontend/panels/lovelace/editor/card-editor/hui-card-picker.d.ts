import { CSSResultGroup, LitElement, PropertyValues, TemplateResult, nothing } from "lit";
import "../../../../components/ha-circular-progress";
import "../../../../components/search-input";
import type { LovelaceCardConfig } from "../../../../data/lovelace/config/card";
import type { LovelaceConfig } from "../../../../data/lovelace/config/types";
import type { HomeAssistant } from "../../../../types";
export declare class HuiCardPicker extends LitElement {
    hass?: HomeAssistant;
    suggestedCards?: string[];
    private _clipboard?;
    private _cards;
    lovelace?: LovelaceConfig;
    cardPicked?: (cardConf: LovelaceCardConfig) => void;
    private _filter;
    private _width?;
    private _height?;
    private _unusedEntities?;
    private _usedEntities?;
    private _filterCards;
    private _suggestedCards;
    private _customCards;
    private _otherCards;
    protected render(): typeof nothing | TemplateResult<1>;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected firstUpdated(): void;
    private _loadCards;
    private _renderClipboardCard;
    private _handleSearchChange;
    private _cardPicked;
    private _tryCreateCardElement;
    private _rebuildCard;
    private _renderCardElement;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-card-picker": HuiCardPicker;
    }
}
