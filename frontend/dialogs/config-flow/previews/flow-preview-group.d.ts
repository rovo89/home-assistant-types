import { LitElement } from "lit";
import { FlowType } from "../../../data/data_entry_flow";
import { HomeAssistant } from "../../../types";
import "./entity-preview-row";
declare class FlowPreviewGroup extends LitElement {
    hass: HomeAssistant;
    flowType: FlowType;
    handler: string;
    stepId: string;
    flowId: string;
    stepData: Record<string, any>;
    private _preview?;
    private _unsub?;
    disconnectedCallback(): void;
    willUpdate(changedProps: any): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _setPreview;
    private _debouncedSubscribePreview;
    private _subscribePreview;
}
declare global {
    interface HTMLElementTagNameMap {
        "flow-preview-group": FlowPreviewGroup;
    }
}
export {};
