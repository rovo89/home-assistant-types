import { CSSResultGroup, LitElement, PropertyValues, TemplateResult } from "lit";
import type { LovelaceViewElement } from "../../../data/lovelace";
import type { LovelaceViewConfig } from "../../../data/lovelace/config/view";
import type { HomeAssistant } from "../../../types";
import { HuiErrorCard } from "../cards/hui-error-card";
import type { Lovelace, LovelaceCard } from "../types";
export declare class PanelView extends LitElement implements LovelaceViewElement {
    hass: HomeAssistant;
    lovelace?: Lovelace;
    index?: number;
    isStrategy: boolean;
    cards: Array<LovelaceCard | HuiErrorCard>;
    private _card?;
    setConfig(_config: LovelaceViewConfig): void;
    willUpdate(changedProperties: PropertyValues): void;
    protected render(): TemplateResult;
    private _addCard;
    private _createCard;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-panel-view": PanelView;
    }
}
