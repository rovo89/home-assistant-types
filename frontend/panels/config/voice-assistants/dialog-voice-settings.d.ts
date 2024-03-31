import "@material/mwc-button/mwc-button";
import { CSSResultGroup, LitElement, nothing } from "lit";
import "../../../components/ha-dialog-header";
import { HomeAssistant } from "../../../types";
import "./entity-voice-settings";
import { VoiceSettingsDialogParams } from "./show-dialog-voice-settings";
declare class DialogVoiceSettings extends LitElement {
    hass: HomeAssistant;
    private _params?;
    showDialog(params: VoiceSettingsDialogParams): void;
    closeDialog(): void;
    private _viewMoreInfo;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _entityEntryUpdated;
    private _exposedEntitiesChanged;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-voice-settings": DialogVoiceSettings;
    }
}
export {};
