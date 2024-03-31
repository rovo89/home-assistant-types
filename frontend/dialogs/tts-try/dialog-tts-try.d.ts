import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../components/ha-button";
import "../../components/ha-textarea";
import { HomeAssistant } from "../../types";
import { TTSTryDialogParams } from "./show-dialog-tts-try";
import "../../components/ha-circular-progress";
export declare class TTSTryDialog extends LitElement {
    hass: HomeAssistant;
    private _loadingExample;
    private _params?;
    private _valid;
    private _messageInput?;
    private _messages?;
    showDialog(params: TTSTryDialogParams): void;
    closeDialog(): void;
    private get _defaultMessage();
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _inputChanged;
    private _playExample;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-tts-try": TTSTryDialog;
    }
}
