import { CSSResultGroup, LitElement, PropertyValues } from "lit";
import "../../../../components/ha-form/ha-form";
import { AssistPipeline } from "../../../../data/assist_pipeline";
import { HomeAssistant } from "../../../../types";
export declare class AssistPipelineDetailWakeWord extends LitElement {
    hass: HomeAssistant;
    data?: Partial<AssistPipeline>;
    private _wakeWords?;
    private _schema;
    private _computeLabel;
    protected willUpdate(changedProps: PropertyValues): void;
    private _hasWakeWorkEntities;
    protected render(): import("lit-html").TemplateResult<1>;
    private _fetchWakeWords;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "assist-pipeline-detail-wakeword": AssistPipelineDetailWakeWord;
    }
}
