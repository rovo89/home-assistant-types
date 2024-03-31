import { CSSResultGroup, LitElement, nothing, PropertyValues } from "lit";
import { STTEngine } from "../data/stt";
import { HomeAssistant } from "../types";
import "./ha-list-item";
import "./ha-select";
export declare class HaSTTPicker extends LitElement {
    value?: string;
    label?: string;
    language?: string;
    hass: HomeAssistant;
    disabled: boolean;
    required: boolean;
    _engines?: STTEngine[];
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    protected willUpdate(changedProperties: PropertyValues<this>): void;
    private _debouncedUpdateEngines;
    private _updateEngines;
    static get styles(): CSSResultGroup;
    private _changed;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-stt-picker": HaSTTPicker;
    }
}
