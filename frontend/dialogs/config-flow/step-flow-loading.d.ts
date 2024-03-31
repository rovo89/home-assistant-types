import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import "../../components/ha-circular-progress";
import { DataEntryFlowStep } from "../../data/data_entry_flow";
import { HomeAssistant } from "../../types";
import { FlowConfig, LoadingReason } from "./show-dialog-data-entry-flow";
declare class StepFlowLoading extends LitElement {
    flowConfig: FlowConfig;
    hass: HomeAssistant;
    loadingReason: LoadingReason;
    handler?: string;
    step?: DataEntryFlowStep | null;
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "step-flow-loading": StepFlowLoading;
    }
}
export {};
