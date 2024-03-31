import "@material/mwc-button";
import { CSSResultGroup, LitElement, PropertyValues, TemplateResult } from "lit";
import "../../../components/ha-button-menu";
import "../../../components/ha-icon-button";
import "../../../components/ha-list-item";
import { LovelaceCardConfig } from "../../../data/lovelace/config/card";
import { HomeAssistant } from "../../../types";
import { LovelaceCardPath } from "../editor/lovelace-path";
import { Lovelace } from "../types";
export declare class HuiCardOptions extends LitElement {
    hass?: HomeAssistant;
    lovelace?: Lovelace;
    path?: LovelaceCardPath;
    private _assignedNodes?;
    hidePosition: boolean;
    protected _clipboard?: LovelaceCardConfig;
    getCardSize(): number | Promise<number>;
    protected updated(changedProps: PropertyValues): void;
    private get _cards();
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
    private _handleAction;
    private _duplicateCard;
    private _editCard;
    private _cutCard;
    private _copyCard;
    private _decreaseCardPosiion;
    private _increaseCardPosition;
    private _changeCardPosition;
    private _moveCard;
    private _deleteCard;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-card-options": HuiCardOptions;
    }
}
