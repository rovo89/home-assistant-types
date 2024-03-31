import "@material/mwc-button";
import "../../components/ha-dialog";
import "../../components/ha-circular-progress";
import "../../components/ha-icon";
import "../../components/ha-icon-button";
import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import { HomeAssistant } from "../../types";
declare class HaDialogShowAudioMessage extends LitElement {
    hass: HomeAssistant;
    private _currentMessage?;
    private _errorMsg?;
    private _loading;
    private _opened;
    private _blobUrl?;
    protected render(): TemplateResult;
    showDialog({ hass, message }: {
        hass: any;
        message: any;
    }): void;
    private _openDeleteDialog;
    private _deleteSelected;
    private _closeDialog;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-dialog-show-audio-message": HaDialogShowAudioMessage;
    }
}
export {};
