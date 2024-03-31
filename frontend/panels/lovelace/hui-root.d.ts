import "@material/mwc-button";
import "@material/mwc-list/mwc-list-item";
import "@polymer/paper-tabs/paper-tab";
import "@polymer/paper-tabs/paper-tabs";
import { CSSResultGroup, LitElement, PropertyValues, TemplateResult } from "lit";
import "../../components/ha-button-menu";
import "../../components/ha-icon";
import "../../components/ha-icon-button";
import "../../components/ha-icon-button-arrow-next";
import "../../components/ha-icon-button-arrow-prev";
import "../../components/ha-menu-button";
import "../../components/ha-svg-icon";
import "../../components/ha-tabs";
import type { HomeAssistant } from "../../types";
import type { Lovelace } from "./types";
import "./views/hui-view";
declare class HUIRoot extends LitElement {
    hass: HomeAssistant;
    lovelace?: Lovelace;
    narrow: boolean;
    route?: {
        path: string;
        prefix: string;
    };
    private _curView?;
    private _viewCache?;
    private _debouncedConfigChanged;
    private _conversation;
    constructor();
    private _renderActionItems;
    protected render(): TemplateResult;
    private _handleWindowScroll;
    private _isVisible;
    private _clearParam;
    protected firstUpdated(changedProps: PropertyValues): void;
    disconnectedCallback(): void;
    protected updated(changedProperties: PropertyValues): void;
    private get config();
    private get _yamlMode();
    private get _editMode();
    private get _viewRoot();
    private _handleRefresh;
    private _handleReloadResources;
    private _handleShowQuickBar;
    private _showQuickBar;
    private _goBack;
    private _handleRawEditor;
    private _handleManageDashboards;
    private _handleManageResources;
    private _handleUnusedEntities;
    private _handleShowVoiceCommandDialog;
    private _showVoiceCommandDialog;
    private _handleEnableEditMode;
    private _enableEditMode;
    private _editModeDisable;
    private _editLovelace;
    private _navigateToView;
    private _editView;
    private _moveViewLeft;
    private _moveViewRight;
    private _addView;
    private _handleViewSelected;
    private _selectView;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-root": HUIRoot;
    }
}
export {};
