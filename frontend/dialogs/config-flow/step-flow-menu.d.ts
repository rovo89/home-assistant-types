import "@material/mwc-list/mwc-list-item";
import { LitElement, TemplateResult } from "lit";
import type { DataEntryFlowStepMenu } from "../../data/data_entry_flow";
import type { HomeAssistant } from "../../types";
import type { FlowConfig } from "./show-dialog-data-entry-flow";
import "../../components/ha-icon-next";
declare class StepFlowMenu extends LitElement {
    flowConfig: FlowConfig;
    hass: HomeAssistant;
    step: DataEntryFlowStepMenu;
    protected render(): TemplateResult;
    private _handleStep;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "step-flow-menu": StepFlowMenu;
    }
}
export {};
