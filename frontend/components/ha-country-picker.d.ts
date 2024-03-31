import { CSSResultGroup, LitElement } from "lit";
import "../resources/intl-polyfill";
import "./ha-list-item";
import "./ha-select";
export declare class HaCountryPicker extends LitElement {
    language: string;
    value?: string;
    label?: string;
    countries?: string[];
    helper?: string;
    required: boolean;
    disabled: boolean;
    noSort: boolean;
    private _getOptions;
    protected render(): import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
    private _changed;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-country-picker": HaCountryPicker;
    }
}
