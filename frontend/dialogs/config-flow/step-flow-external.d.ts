import "@material/mwc-button";
import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import { DataEntryFlowStepExternal } from "../../data/data_entry_flow";
import { HomeAssistant } from "../../types";
import { FlowConfig } from "./show-dialog-data-entry-flow";
declare class StepFlowExternal extends LitElement {
    flowConfig: FlowConfig;
    hass: HomeAssistant;
    step: DataEntryFlowStepExternal;
    protected render(): TemplateResult;
    protected firstUpdated(changedProps: any): void;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "step-flow-external": StepFlowExternal;
    }
}
export {};
