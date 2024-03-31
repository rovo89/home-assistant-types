import { CSSResultGroup, LitElement, nothing } from "lit";
import { LovelaceSectionElement } from "../../../data/lovelace";
import type { LovelaceSectionConfig } from "../../../data/lovelace/config/section";
import type { HomeAssistant } from "../../../types";
import { HuiErrorCard } from "../cards/hui-error-card";
import "../components/hui-card-edit-mode";
import type { Lovelace, LovelaceCard } from "../types";
export declare class GridSection extends LitElement implements LovelaceSectionElement {
    hass: HomeAssistant;
    lovelace?: Lovelace;
    index?: number;
    viewIndex?: number;
    isStrategy: boolean;
    cards: Array<LovelaceCard | HuiErrorCard>;
    _config?: LovelaceSectionConfig;
    _dragging: boolean;
    setConfig(config: LovelaceSectionConfig): void;
    private _cardConfigKeys;
    private _getKey;
    render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _cardMoved;
    private _dragStart;
    private _dragEnd;
    private _addCard;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-grid-section": GridSection;
    }
}
