import "@material/mwc-button";
import "@material/mwc-list/mwc-list";
import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../components/chips/ha-chip-set";
import "../../../components/chips/ha-input-chip";
import "../../../components/ha-alert";
import "../../../components/ha-aliases-editor";
import "../../../components/ha-icon-picker";
import "../../../components/ha-picture-upload";
import "../../../components/ha-settings-row";
import "../../../components/ha-svg-icon";
import "../../../components/ha-textfield";
import { HomeAssistant } from "../../../types";
import { FloorRegistryDetailDialogParams } from "./show-dialog-floor-registry-detail";
declare class DialogFloorDetail extends LitElement {
    hass: HomeAssistant;
    private _name;
    private _aliases;
    private _icon;
    private _level;
    private _error?;
    private _params?;
    private _submitting?;
    private _addedAreas;
    private _removedAreas;
    showDialog(params: FloorRegistryDetailDialogParams): void;
    closeDialog(): void;
    private _floorAreas;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _openArea;
    private _removeArea;
    private _addArea;
    private _isNameValid;
    private _nameChanged;
    private _levelChanged;
    private _iconChanged;
    private _updateEntry;
    private _aliasesChanged;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-floor-registry-detail": DialogFloorDetail;
    }
}
export {};
