import "@material/mwc-button";
import { CSSResultGroup, LitElement, PropertyValues, TemplateResult } from "lit";
import { LocalizeFunc } from "../common/translations/localize";
import "../components/ha-form/ha-form";
declare class OnboardingCreateUser extends LitElement {
    localize: LocalizeFunc;
    language: string;
    private _loading;
    private _errorMsg?;
    private _formError;
    private _newUser;
    private _form?;
    protected render(): TemplateResult;
    protected firstUpdated(changedProps: PropertyValues): void;
    private _computeLabel;
    private _computeHelper;
    private _handleValueChanged;
    private _debouncedCheckPasswordMatch;
    private _checkPasswordMatch;
    private _maybePopulateUsername;
    private _submitForm;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "onboarding-create-user": OnboardingCreateUser;
    }
}
export {};
