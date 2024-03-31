import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../components/ha-button";
import "../../../components/ha-dialog-header";
import "../../../components/ha-form/ha-form";
import { HomeAssistant } from "../../../types";
import "./assist-pipeline-detail/assist-pipeline-detail-config";
import "./assist-pipeline-detail/assist-pipeline-detail-conversation";
import "./assist-pipeline-detail/assist-pipeline-detail-stt";
import "./assist-pipeline-detail/assist-pipeline-detail-tts";
import "./assist-pipeline-detail/assist-pipeline-detail-wakeword";
import "./debug/assist-render-pipeline-events";
import { VoiceAssistantPipelineDetailsDialogParams } from "./show-dialog-voice-assistant-pipeline-detail";
export declare class DialogVoiceAssistantPipelineDetail extends LitElement {
    hass: HomeAssistant;
    private _params?;
    private _data?;
    private _preferred?;
    private _cloudActive?;
    private _error?;
    private _submitting;
    private _supportedLanguages?;
    showDialog(params: VoiceAssistantPipelineDetailsDialogParams): void;
    closeDialog(): void;
    protected firstUpdated(): void;
    private _getSupportedLanguages;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _valueChanged;
    private _updatePipeline;
    private _setPreferred;
    private _debug;
    private _deletePipeline;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-voice-assistant-pipeline-detail": DialogVoiceAssistantPipelineDetail;
    }
}
