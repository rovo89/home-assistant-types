import "@material/mwc-button";
import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../components/ha-circular-progress";
import "../../components/ha-dialog";
import "../../components/ha-form/ha-form";
import "../../components/ha-markdown";
import { HomeAssistant } from "../../types";
declare class HaMfaModuleSetupFlow extends LitElement {
    hass: HomeAssistant;
    private _dialogClosedCallback?;
    private _instance?;
    private _loading;
    private _opened;
    private _stepData;
    private _step?;
    private _errorMessage?;
    showDialog({ continueFlowId, mfaModuleId, dialogClosedCallback }: {
        continueFlowId: any;
        mfaModuleId: any;
        dialogClosedCallback: any;
    }): void;
    closeDialog(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
    protected firstUpdated(changedProperties: any): void;
    private _stepDataChanged;
    private _submitStep;
    private _processStep;
    private _flowDone;
    private _computeStepTitle;
    private _computeLabel;
    private _computeError;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-mfa-module-setup-flow": HaMfaModuleSetupFlow;
    }
}
export {};
