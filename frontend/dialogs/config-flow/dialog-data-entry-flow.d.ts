import "@material/mwc-button";
import { CSSResultGroup, LitElement, PropertyValues, nothing } from "lit";
import { HASSDomEvent } from "../../common/dom/fire_event";
import "../../components/ha-circular-progress";
import "../../components/ha-dialog";
import "../../components/ha-icon-button";
import { DataEntryFlowStep } from "../../data/data_entry_flow";
import type { HomeAssistant } from "../../types";
import { DataEntryFlowDialogParams } from "./show-dialog-data-entry-flow";
import "./step-flow-abort";
import "./step-flow-create-entry";
import "./step-flow-external";
import "./step-flow-form";
import "./step-flow-loading";
import "./step-flow-menu";
import "./step-flow-progress";
interface FlowUpdateEvent {
    step?: DataEntryFlowStep;
    stepPromise?: Promise<DataEntryFlowStep>;
}
declare global {
    interface HASSDomEvents {
        "flow-update": FlowUpdateEvent;
    }
    interface HTMLElementEventMap {
        "flow-update": HASSDomEvent<FlowUpdateEvent>;
    }
}
declare class DataEntryFlowDialog extends LitElement {
    hass: HomeAssistant;
    private _params?;
    private _loading?;
    private _instance;
    private _step;
    private _devices?;
    private _areas?;
    private _handler?;
    private _unsubAreas?;
    private _unsubDevices?;
    private _unsubDataEntryFlowProgressed?;
    showDialog(params: DataEntryFlowDialogParams): Promise<void>;
    closeDialog(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    protected firstUpdated(changedProps: PropertyValues): void;
    willUpdate(changedProps: PropertyValues): void;
    private _fetchDevices;
    private _fetchAreas;
    private _processStep;
    private _subscribeDataEntryFlowProgressed;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-data-entry-flow": DataEntryFlowDialog;
    }
}
export {};
