import "@lrnwebcomponents/simple-tooltip/simple-tooltip";
import "@material/mwc-button";
import { CSSResultGroup, LitElement, PropertyValues, TemplateResult } from "lit";
import "../../components/ha-alert";
import "../../components/ha-circular-progress";
import "../../components/ha-form/ha-form";
import "../../components/ha-markdown";
import type { DataEntryFlowStepForm } from "../../data/data_entry_flow";
import type { HomeAssistant } from "../../types";
import type { FlowConfig } from "./show-dialog-data-entry-flow";
declare class StepFlowForm extends LitElement {
    flowConfig: FlowConfig;
    step: DataEntryFlowStepForm;
    hass: HomeAssistant;
    private _loading;
    private _stepData?;
    private _errorMsg?;
    disconnectedCallback(): void;
    protected render(): TemplateResult;
    private _setError;
    protected firstUpdated(changedProps: PropertyValues): void;
    protected willUpdate(changedProps: PropertyValues): void;
    private _clickHandler;
    private _handleKeyDown;
    private get _stepDataProcessed();
    private _submitStep;
    private _stepDataChanged;
    private _labelCallback;
    private _helperCallback;
    private _errorCallback;
    private _localizeValueCallback;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HASSDomEvents {
        "set-flow-errors": {
            errors: DataEntryFlowStepForm["errors"];
        };
    }
    interface HTMLElementTagNameMap {
        "step-flow-form": StepFlowForm;
    }
}
export {};
