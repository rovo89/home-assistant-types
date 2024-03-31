import { LitElement, TemplateResult } from "lit";
import "../ha-code-editor";
import "../ha-icon-button";
import { TraceExtended } from "../../data/trace";
import { HomeAssistant } from "../../types";
export declare class HaTraceBlueprintConfig extends LitElement {
    hass: HomeAssistant;
    trace: TraceExtended;
    protected render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-trace-blueprint-config": HaTraceBlueprintConfig;
    }
}
