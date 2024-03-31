import { CSSResultGroup, LitElement, PropertyValues } from "lit";
import "../resources/intl-polyfill";
import { HomeAssistant } from "../types";
import "./ha-list-item";
import "./ha-select";
export declare class HaLanguagePicker extends LitElement {
    value?: string;
    label?: string;
    languages?: string[];
    hass?: HomeAssistant;
    disabled: boolean;
    required: boolean;
    nativeName: boolean;
    noSort: boolean;
    _defaultLanguages: string[];
    private _select;
    protected firstUpdated(changedProps: PropertyValues): void;
    protected updated(changedProperties: PropertyValues): void;
    private _getLanguagesOptions;
    private _computeDefaultLanguageOptions;
    protected render(): import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
    private _changed;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-language-picker": HaLanguagePicker;
    }
}
