import { LitElement, TemplateResult } from "lit";
import "../../../../components/buttons/ha-progress-button";
import "../../../../components/ha-alert";
import "../../../../components/ha-card";
import "../../../../components/ha-textfield";
import "../../../../layouts/hass-subpage";
import { HomeAssistant } from "../../../../types";
import "../../ha-config-section";
export declare class CloudRegister extends LitElement {
    hass: HomeAssistant;
    isWide: boolean;
    narrow: boolean;
    email?: string;
    private _requestInProgress;
    private _password;
    private _error?;
    private _emailField;
    private _passwordField;
    protected render(): TemplateResult;
    private _keyDown;
    private _handleRegister;
    private _handleResendVerifyEmail;
    private _verificationEmailSent;
    static get styles(): import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "cloud-register": CloudRegister;
    }
}
