import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import "../ha-code-editor";
import "../ha-icon-button";
import { TraceExtended } from "../../data/trace";
import { HomeAssistant } from "../../types";
export declare class HaTraceConfig extends LitElement {
    hass: HomeAssistant;
    trace: TraceExtended;
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-trace-config": HaTraceConfig;
    }
}
