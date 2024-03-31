import { LitElement } from "lit";
import { TTSVoiceSelector } from "../../data/selector";
import { HomeAssistant } from "../../types";
import "../ha-tts-voice-picker";
export declare class HaTTSVoiceSelector extends LitElement {
    hass: HomeAssistant;
    selector: TTSVoiceSelector;
    value?: any;
    label?: string;
    helper?: string;
    disabled: boolean;
    required: boolean;
    context?: {
        language?: string;
        engineId?: string;
    };
    protected render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-tts_voice": HaTTSVoiceSelector;
    }
}
