import "@material/mwc-button";
import { CSSResultGroup, LitElement, PropertyValues, nothing } from "lit";
import "../../../components/ha-circular-progress";
import "../../../components/ha-formfield";
import "../../../components/ha-switch";
import { HomeAssistant } from "../../../types";
import { AddUserDialogParams } from "./show-dialog-add-user";
import "../../../components/ha-textfield";
export declare class DialogAddUser extends LitElement {
    hass: HomeAssistant;
    private _loading;
    private _error?;
    private _params?;
    private _name?;
    private _username?;
    private _password?;
    private _passwordConfirm?;
    private _isAdmin?;
    private _localOnly?;
    private _allowChangeName;
    showDialog(params: AddUserDialogParams): void;
    protected firstUpdated(changedProperties: PropertyValues): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _close;
    private _maybePopulateUsername;
    private _handleValueChanged;
    private _adminChanged;
    private _localOnlyChanged;
    private _createUser;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-add-user": DialogAddUser;
    }
}
