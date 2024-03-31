import "@material/mwc-button";
import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import "../../components/ha-area-picker";
import { DataEntryFlowStepCreateEntry } from "../../data/data_entry_flow";
import { DeviceRegistryEntry } from "../../data/device_registry";
import { HomeAssistant } from "../../types";
import { FlowConfig } from "./show-dialog-data-entry-flow";
declare class StepFlowCreateEntry extends LitElement {
    flowConfig: FlowConfig;
    hass: HomeAssistant;
    step: DataEntryFlowStepCreateEntry;
    devices: DeviceRegistryEntry[];
    protected render(): TemplateResult;
    private _flowDone;
    private _areaPicked;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "step-flow-create-entry": StepFlowCreateEntry;
    }
}
export {};
