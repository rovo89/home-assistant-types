import "@material/mwc-list/mwc-list-item";
import { LitElement, PropertyValues } from "lit";
import { MediaPlayerBrowseAction, MediaPlayerItem } from "../../data/media-player";
import { HomeAssistant } from "../../types";
import "../ha-textarea";
import "../ha-language-picker";
import "../ha-tts-voice-picker";
export interface TtsMediaPickedEvent {
    item: MediaPlayerItem;
}
declare global {
    interface HASSDomEvents {
        "tts-picked": TtsMediaPickedEvent;
    }
}
declare class BrowseMediaTTS extends LitElement {
    hass: HomeAssistant;
    item: MediaPlayerItem;
    action: MediaPlayerBrowseAction;
    private _language?;
    private _voice?;
    private _provider?;
    private _message;
    protected render(): import("lit-html").TemplateResult<1>;
    protected willUpdate(changedProps: PropertyValues): void;
    private _languageChanged;
    private _voiceChanged;
    private _ttsClicked;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-browse-media-tts": BrowseMediaTTS;
    }
}
export {};
