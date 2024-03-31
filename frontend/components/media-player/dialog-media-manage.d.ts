import "@material/mwc-list/mwc-list";
import "@material/mwc-list/mwc-list-item";
import { CSSResultGroup, LitElement, nothing } from "lit";
import type { HomeAssistant } from "../../types";
import "../ha-button";
import "../ha-check-list-item";
import "../ha-circular-progress";
import "../ha-dialog";
import "../ha-dialog-header";
import "../ha-svg-icon";
import "../ha-tip";
import "./ha-media-player-browse";
import "./ha-media-upload-button";
import type { MediaManageDialogParams } from "./show-media-manage-dialog";
declare class DialogMediaManage extends LitElement {
    hass: HomeAssistant;
    private _currentItem?;
    private _params?;
    private _uploading;
    private _deleting;
    private _selected;
    private _filesChanged;
    showDialog(params: MediaManageDialogParams): void;
    closeDialog(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _handleSelected;
    private _startUploading;
    private _doneUploading;
    private _handleDeselectAll;
    private _handleDelete;
    private _refreshMedia;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-media-manage": DialogMediaManage;
    }
}
export {};
