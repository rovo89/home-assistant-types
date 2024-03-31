import "@material/mwc-button/mwc-button";
import { CSSResultGroup, LitElement, nothing, PropertyValues, TemplateResult } from "lit";
import "../../components/ha-button";
import "../../components/ha-button-menu";
import "../../components/ha-dialog";
import "../../components/ha-dialog-header";
import "../../components/ha-icon-button";
import "../../components/ha-list-item";
import "../../components/ha-textfield";
import type { HomeAssistant } from "../../types";
import { VoiceCommandDialogParams } from "./show-ha-voice-command-dialog";
export declare class HaVoiceCommandDialog extends LitElement {
    hass: HomeAssistant;
    private _conversation?;
    private _opened;
    private _pipelineId?;
    private _pipeline?;
    private _showSendButton;
    private _pipelines?;
    private _preferredPipeline?;
    private _scrollContainer;
    private _messageInput;
    private _conversationId;
    private _audioRecorder?;
    private _audioBuffer?;
    private _audio?;
    private _stt_binary_handler_id?;
    private _pipelinePromise?;
    showDialog(params: Required<VoiceCommandDialogParams>): Promise<void>;
    closeDialog(): Promise<void>;
    protected render(): typeof nothing | TemplateResult<1>;
    protected willUpdate(changedProperties: PropertyValues): void;
    private _getPipeline;
    private _loadPipelines;
    private _selectPipeline;
    protected updated(changedProps: PropertyValues): void;
    private _addMessage;
    private _handleKeyUp;
    private _handleInput;
    private _handleSendMessage;
    private _processText;
    private _handleListeningButton;
    private _toggleListening;
    private _showNotSupportedMessage;
    private _startListening;
    private _stopListening;
    private _sendAudioChunk;
    private _playAudio;
    private _audioError;
    private _unloadAudio;
    private _scrollMessagesBottom;
    private _computeMessageClasses;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-voice-command-dialog": HaVoiceCommandDialog;
    }
}
