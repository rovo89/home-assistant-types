import "@material/mwc-button";
import { LitElement, PropertyValues } from "lit";
import { LocalizeFunc } from "../common/translations/localize";
import "../components/ha-alert";
import "../components/ha-checkbox";
import "../components/ha-formfield";
import { AuthProvider } from "../data/auth";
import { DataEntryFlowStep } from "../data/data_entry_flow";
import "./ha-auth-form";
export declare class HaAuthFlow extends LitElement {
    authProvider?: AuthProvider;
    clientId?: string;
    redirectUri?: string;
    oauth2State?: string;
    localize: LocalizeFunc;
    step?: DataEntryFlowStep;
    initStoreToken: boolean;
    private _storeToken;
    private _state;
    private _stepData?;
    private _errorMessage?;
    private _submitting;
    createRenderRoot(): this;
    willUpdate(changedProps: PropertyValues): void;
    protected render(): import("lit-html").TemplateResult<1>;
    protected firstUpdated(changedProps: PropertyValues): void;
    protected updated(changedProps: PropertyValues): void;
    private _renderForm;
    private _renderStep;
    private _storeTokenChanged;
    private _providerChanged;
    private _stepDataChanged;
    private _computeStepDescription;
    private _computeLabelCallback;
    private _computeErrorCallback;
    private _unknownError;
    private _startOver;
    private _handleSubmit;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-auth-flow": HaAuthFlow;
    }
}
