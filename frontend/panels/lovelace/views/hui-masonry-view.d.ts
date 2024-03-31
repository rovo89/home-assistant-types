import { CSSResultGroup, LitElement, PropertyValues, TemplateResult } from "lit";
import "../../../components/entity/ha-state-label-badge";
import "../../../components/ha-svg-icon";
import type { LovelaceViewElement } from "../../../data/lovelace";
import type { LovelaceViewConfig } from "../../../data/lovelace/config/view";
import type { HomeAssistant } from "../../../types";
import type { HuiErrorCard } from "../cards/hui-error-card";
import type { Lovelace, LovelaceBadge, LovelaceCard } from "../types";
export declare class MasonryView extends LitElement implements LovelaceViewElement {
    hass: HomeAssistant;
    lovelace?: Lovelace;
    narrow: boolean;
    index?: number;
    isStrategy: boolean;
    cards: Array<LovelaceCard | HuiErrorCard>;
    badges: LovelaceBadge[];
    private _columns?;
    private _createColumnsIteration;
    private _mqls?;
    private _mqlListenerRef?;
    connectedCallback(): void;
    disconnectedCallback(): void;
    setConfig(_config: LovelaceViewConfig): void;
    protected render(): TemplateResult;
    private _initMqls;
    private get mqls();
    willUpdate(changedProperties: PropertyValues): void;
    private _addCard;
    private _createRootElement;
    private _createColumns;
    private _addCardToColumn;
    private _updateColumns;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-masonry-view": MasonryView;
    }
}
