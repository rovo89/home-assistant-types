import { LitElement, TemplateResult } from "lit";
import "../../../../components/buttons/ha-progress-button";
import "../../../../components/ha-alert";
import "../../../../components/ha-card";
import "../../../../components/ha-textfield";
import "../../../../layouts/hass-subpage";
import { HomeAssistant } from "../../../../types";
export declare class CloudForgotPassword extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    email?: string;
    _requestInProgress: boolean;
    private _error?;
    private _emailField;
    protected render(): TemplateResult;
    private _keyDown;
    private _handleEmailPasswordReset;
    static get styles(): import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "cloud-forgot-password": CloudForgotPassword;
    }
}
