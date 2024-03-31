import "@material/mwc-button";
import "@material/mwc-list/mwc-list-item";
import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../components/ha-alert";
import "../../../components/ha-circular-progress";
import "../../../components/ha-combo-box";
import "../../../components/ha-markdown";
import "../../../components/ha-textfield";
import { HomeAssistant } from "../../../types";
import { AddApplicationCredentialDialogParams } from "./show-dialog-add-application-credential";
export declare class DialogAddApplicationCredential extends LitElement {
    hass: HomeAssistant;
    private _loading;
    private _error?;
    private _params?;
    private _domain?;
    private _manifest?;
    private _name?;
    private _description?;
    private _clientId?;
    private _clientSecret?;
    private _domains?;
    private _config?;
    showDialog(params: AddApplicationCredentialDialogParams): void;
    private _fetchConfig;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    closeDialog(): void;
    private _handleDomainPicked;
    private _updateDescription;
    private _handleValueChanged;
    private _abortDialog;
    private _addApplicationCredential;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-add-application-credential": DialogAddApplicationCredential;
    }
}
