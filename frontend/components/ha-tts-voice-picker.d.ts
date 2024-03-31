import { CSSResultGroup, LitElement, nothing, PropertyValues } from "lit";
import { TTSVoice } from "../data/tts";
import { HomeAssistant } from "../types";
import "./ha-list-item";
import "./ha-select";
export declare class HaTTSVoicePicker extends LitElement {
    value?: string;
    label?: string;
    engineId?: string;
    language?: string;
    hass: HomeAssistant;
    disabled: boolean;
    required: boolean;
    _voices?: TTSVoice[] | null;
    private _select?;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    protected willUpdate(changedProperties: PropertyValues<this>): void;
    private _debouncedUpdateVoices;
    private _updateVoices;
    protected updated(changedProperties: PropertyValues<this>): void;
    static get styles(): CSSResultGroup;
    private _changed;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-tts-voice-picker": HaTTSVoicePicker;
    }
}
