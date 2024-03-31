import { CSSResultGroup, LitElement, nothing, PropertyValues } from "lit";
import { TTSEngine } from "../data/tts";
import { HomeAssistant } from "../types";
import "./ha-list-item";
import "./ha-select";
export declare class HaTTSPicker extends LitElement {
    value?: string;
    label?: string;
    language?: string;
    hass: HomeAssistant;
    disabled: boolean;
    required: boolean;
    _engines?: TTSEngine[];
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    protected willUpdate(changedProperties: PropertyValues<this>): void;
    private _debouncedUpdateEngines;
    private _updateEngines;
    static get styles(): CSSResultGroup;
    private _changed;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-tts-picker": HaTTSPicker;
    }
}
