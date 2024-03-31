import "@material/mwc-button";
import { CSSResultGroup, LitElement, PropertyValues, nothing } from "lit";
import { DataEntryFlowStepAbort } from "../../data/data_entry_flow";
import { HomeAssistant } from "../../types";
import { DataEntryFlowDialogParams } from "./show-dialog-data-entry-flow";
declare class StepFlowAbort extends LitElement {
    params: DataEntryFlowDialogParams;
    hass: HomeAssistant;
    step: DataEntryFlowStepAbort;
    domain: string;
    protected firstUpdated(changed: PropertyValues): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _handleMissingCreds;
    private _flowDone;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "step-flow-abort": StepFlowAbort;
    }
}
export {};
