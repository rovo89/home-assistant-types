import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import { FrontendLocaleData } from "../data/translation";
import "./ha-svg-icon";
export declare class HaControlNumberButton extends LitElement {
    locale?: FrontendLocaleData;
    disabled: boolean;
    label?: string;
    step?: number;
    value?: number;
    min?: number;
    max?: number;
    unit?: string;
    formatOptions: Intl.NumberFormatOptions;
    _input: HTMLDivElement;
    private _hideUnit;
    private boundedValue;
    private get _step();
    private get _value();
    private get _tenPercentStep();
    private _handlePlusButton;
    private _handleMinusButton;
    private _increment;
    private _decrement;
    _handleKeyDown(e: KeyboardEvent): void;
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-control-number-buttons": HaControlNumberButton;
    }
}
