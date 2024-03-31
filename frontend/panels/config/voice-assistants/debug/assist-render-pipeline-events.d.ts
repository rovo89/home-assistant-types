import { LitElement, TemplateResult } from "lit";
import { PipelineRunEvent } from "../../../../data/assist_pipeline";
import type { HomeAssistant } from "../../../../types";
import "./assist-render-pipeline-run";
export declare class AssistPipelineEvents extends LitElement {
    hass: HomeAssistant;
    events: PipelineRunEvent[];
    private _processEvents;
    protected render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "assist-render-pipeline-events": AssistPipelineEvents;
    }
}
