import { CSSResultGroup, LitElement, nothing, PropertyValueMap } from "lit";
import { AssistPipeline } from "../data/assist_pipeline";
import { HomeAssistant } from "../types";
import "./ha-list-item";
import "./ha-select";
export declare class HaAssistPipelinePicker extends LitElement {
    value?: string;
    label?: string;
    hass: HomeAssistant;
    disabled: boolean;
    required: boolean;
    includeLastUsed: boolean;
    _pipelines?: AssistPipeline[];
    _preferredPipeline: string | null;
    private get _default();
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    protected firstUpdated(changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    static get styles(): CSSResultGroup;
    private _changed;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-assist-pipeline-picker": HaAssistPipelinePicker;
    }
}
