import { LitElement, PropertyValues, nothing } from "lit";
import "../../components/ha-button-menu";
import "../../components/ha-dialog";
import "../../components/ha-dialog-header";
import "../../components/ha-icon-button";
import "../../components/ha-icon-button-prev";
import "../../components/ha-list-item";
import "../../components/ha-related-items";
import "../../state-summary/state-card-content";
import { HomeAssistant } from "../../types";
import "./controls/more-info-default";
import "./ha-more-info-history-and-logbook";
import "./ha-more-info-info";
import "./ha-more-info-settings";
import "./more-info-content";
export interface MoreInfoDialogParams {
    entityId: string | null;
    view?: View;
    /** @deprecated Use `view` instead */
    tab?: View;
}
type View = "info" | "history" | "settings" | "related";
type ChildView = {
    viewTag: string;
    viewTitle?: string;
    viewImport?: () => Promise<unknown>;
    viewParams?: any;
};
declare global {
    interface HASSDomEvents {
        "show-child-view": ChildView;
    }
    interface HASSDomEvents {
        "toggle-edit-mode": boolean;
    }
}
export declare class MoreInfoDialog extends LitElement {
    hass: HomeAssistant;
    large: boolean;
    private _entityId?;
    private _currView;
    private _childView?;
    private _entry?;
    private _infoEditMode;
    private _history?;
    showDialog(params: MoreInfoDialogParams): void;
    private _loadEntityRegistryEntry;
    closeDialog(): void;
    private shouldShowEditIcon;
    private shouldShowHistory;
    private _getDeviceId;
    private setView;
    private _goBack;
    private _goToHistory;
    private _goToSettings;
    private _showChildView;
    private _goToDevice;
    private _goToEdit;
    private _toggleInfoEditMode;
    private _handleToggleInfoEditModeEvent;
    private _goToRelated;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    protected firstUpdated(changedProps: PropertyValues): void;
    protected updated(changedProps: PropertyValues): void;
    private _entryUpdated;
    private _enlarge;
    private _handleOpened;
    static get styles(): import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-more-info-dialog": MoreInfoDialog;
    }
}
export {};
