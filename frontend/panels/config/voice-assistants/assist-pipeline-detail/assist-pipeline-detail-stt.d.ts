import { CSSResultGroup, LitElement } from "lit";
import { AssistPipeline } from "../../../../data/assist_pipeline";
import { HomeAssistant } from "../../../../types";
import "../../../../components/ha-form/ha-form";
export declare class AssistPipelineDetailSTT extends LitElement {
    hass: HomeAssistant;
    data?: Partial<AssistPipeline>;
    private _supportedLanguages?;
    private _schema;
    private _computeLabel;
    protected render(): import("lit-html").TemplateResult<1>;
    private _supportedLanguagesChanged;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "assist-pipeline-detail-stt": AssistPipelineDetailSTT;
    }
}
