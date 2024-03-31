import { LitElement } from "lit";
import { FrontendLocaleData } from "../data/translation";
import "./ha-base-time-input";
export declare class HaTimeInput extends LitElement {
    locale: FrontendLocaleData;
    value?: string;
    label?: string;
    helper?: string;
    disabled: boolean;
    required: boolean;
    enableSecond: boolean;
    protected render(): import("lit-html").TemplateResult<1>;
    private _timeChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-time-input": HaTimeInput;
    }
}
