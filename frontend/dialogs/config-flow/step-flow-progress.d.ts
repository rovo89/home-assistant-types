import "@material/mwc-button";
import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import "../../components/ha-circular-progress";
import { DataEntryFlowStepProgress } from "../../data/data_entry_flow";
import { HomeAssistant } from "../../types";
import { FlowConfig } from "./show-dialog-data-entry-flow";
declare class StepFlowProgress extends LitElement {
    flowConfig: FlowConfig;
    hass: HomeAssistant;
    step: DataEntryFlowStepProgress;
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "step-flow-progress": StepFlowProgress;
    }
}
export {};
