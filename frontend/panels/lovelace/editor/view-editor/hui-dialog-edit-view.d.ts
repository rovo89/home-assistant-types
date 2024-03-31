import "@material/mwc-button";
import "@polymer/paper-tabs/paper-tab";
import "@polymer/paper-tabs/paper-tabs";
import { CSSResultGroup, LitElement, PropertyValues, nothing } from "lit";
import "../../../../components/ha-alert";
import "../../../../components/ha-circular-progress";
import "../../../../components/ha-dialog";
import "../../../../components/ha-dialog-header";
import "../../../../components/ha-yaml-editor";
import type { HomeAssistant } from "../../../../types";
import "../../components/hui-entity-editor";
import "../hui-badge-preview";
import "./hui-view-editor";
import "./hui-view-visibility-editor";
import { EditViewDialogParams } from "./show-edit-view-dialog";
export declare class HuiDialogEditView extends LitElement {
    hass?: HomeAssistant;
    private _params?;
    private _config?;
    private _saving;
    private _curTab?;
    private _dirty;
    private _yamlMode;
    private _editor?;
    private _curTabIndex;
    get _type(): string;
    protected updated(changedProperties: PropertyValues): void;
    showDialog(params: EditViewDialogParams): void;
    closeDialog(): void;
    private get _viewConfigTitle();
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _handleAction;
    private _delete;
    private _deleteConfirm;
    private _handleTabSelected;
    private _save;
    private _viewConfigChanged;
    private _viewVisibilityChanged;
    private _badgesChanged;
    private _viewYamlChanged;
    private _isConfigChanged;
    private get _creatingView();
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-dialog-edit-view": HuiDialogEditView;
    }
}
