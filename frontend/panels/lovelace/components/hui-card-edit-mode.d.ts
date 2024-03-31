import "@material/mwc-button";
import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import "../../../components/ha-button-menu";
import "../../../components/ha-icon-button";
import "../../../components/ha-list-item";
import "../../../components/ha-svg-icon";
import { LovelaceCardConfig } from "../../../data/lovelace/config/card";
import { HomeAssistant } from "../../../types";
import { LovelaceCardPath } from "../editor/lovelace-path";
import { Lovelace } from "../types";
export declare class HuiCardEditMode extends LitElement {
    hass: HomeAssistant;
    lovelace: Lovelace;
    path: LovelaceCardPath;
    hiddenOverlay: boolean;
    _menuOpened: boolean;
    _hover: boolean;
    _focused: boolean;
    protected _clipboard?: LovelaceCardConfig;
    private get _cards();
    private _touchStarted;
    protected firstUpdated(): void;
    disconnectedCallback(): void;
    _documentClicked: (ev: any) => void;
    protected render(): TemplateResult;
    private _handleOpened;
    private _handleClosed;
    private _handleAction;
    private _duplicateCard;
    private _editCard;
    private _cutCard;
    private _copyCard;
    private _deleteCard;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-card-edit-mode": HuiCardEditMode;
    }
}
