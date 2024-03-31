import "@lrnwebcomponents/simple-tooltip/simple-tooltip";
import "@material/mwc-button";
import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../components/ha-formfield";
import "../../../components/ha-help-tooltip";
import "../../../components/ha-label";
import "../../../components/ha-svg-icon";
import "../../../components/ha-switch";
import "../../../components/ha-textfield";
import { HomeAssistant } from "../../../types";
import { UserDetailDialogParams } from "./show-dialog-user-detail";
declare class DialogUserDetail extends LitElement {
    hass: HomeAssistant;
    private _name;
    private _isAdmin?;
    private _localOnly?;
    private _isActive?;
    private _error?;
    private _params?;
    private _submitting;
    showDialog(params: UserDetailDialogParams): Promise<void>;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _nameChanged;
    private _adminChanged;
    private _localOnlyChanged;
    private _activeChanged;
    private _updateEntry;
    private _deleteEntry;
    private _changePassword;
    private _close;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-user-detail": DialogUserDetail;
    }
}
export {};
