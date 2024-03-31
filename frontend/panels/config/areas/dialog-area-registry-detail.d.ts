import "@material/mwc-button";
import "@material/mwc-list/mwc-list";
import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../components/ha-alert";
import "../../../components/ha-aliases-editor";
import "../../../components/ha-picture-upload";
import "../../../components/ha-settings-row";
import "../../../components/ha-icon-picker";
import "../../../components/ha-floor-picker";
import "../../../components/ha-textfield";
import "../../../components/ha-labels-picker";
import { HomeAssistant } from "../../../types";
import { AreaRegistryDetailDialogParams } from "./show-dialog-area-registry-detail";
declare class DialogAreaDetail extends LitElement {
    hass: HomeAssistant;
    private _name;
    private _aliases;
    private _labels;
    private _picture;
    private _icon;
    private _floor;
    private _error?;
    private _params?;
    private _submitting?;
    showDialog(params: AreaRegistryDetailDialogParams): Promise<void>;
    closeDialog(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _isNameValid;
    private _nameChanged;
    private _floorChanged;
    private _iconChanged;
    private _labelsChanged;
    private _pictureChanged;
    private _updateEntry;
    private _aliasesChanged;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-area-registry-detail": DialogAreaDetail;
    }
}
export {};
