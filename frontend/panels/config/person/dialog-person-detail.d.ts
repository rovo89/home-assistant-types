import "@material/mwc-button";
import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../components/entity/ha-entities-picker";
import "../../../components/ha-formfield";
import "../../../components/ha-picture-upload";
import "../../../components/ha-textfield";
import { HomeAssistant } from "../../../types";
import { PersonDetailDialogParams } from "./show-dialog-person-detail";
declare class DialogPersonDetail extends LitElement {
    hass: HomeAssistant;
    private _name;
    private _userId?;
    private _user?;
    private _isAdmin?;
    private _localOnly?;
    private _deviceTrackers;
    private _picture;
    private _error?;
    private _params?;
    private _submitting;
    private _personExists;
    private _deviceTrackersAvailable;
    showDialog(params: PersonDetailDialogParams): Promise<void>;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _closeDialog;
    private _nameChanged;
    private _adminChanged;
    private _localOnlyChanged;
    private _allowLoginChanged;
    private _deviceTrackersChanged;
    private _pictureChanged;
    private _changePassword;
    private _updateEntry;
    private _deleteEntry;
    private _close;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-person-detail": DialogPersonDetail;
    }
}
export {};
