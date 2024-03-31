import { CSSResultGroup, LitElement } from "lit";
import "../resources/intl-polyfill";
import "./ha-list-item";
import "./ha-select";
export declare class HaCurrencyPicker extends LitElement {
    language: string;
    value?: string;
    label?: string;
    required: boolean;
    disabled: boolean;
    private _getOptions;
    protected render(): import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
    private _changed;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-currency-picker": HaCurrencyPicker;
    }
}
