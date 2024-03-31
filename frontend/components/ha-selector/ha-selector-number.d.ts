import { CSSResultGroup, LitElement, PropertyValues } from "lit";
import { NumberSelector } from "../../data/selector";
import { HomeAssistant } from "../../types";
import "../ha-input-helper-text";
import "../ha-slider";
import "../ha-textfield";
export declare class HaNumberSelector extends LitElement {
    hass: HomeAssistant;
    selector: NumberSelector;
    value?: number;
    placeholder?: number;
    label?: string;
    helper?: string;
    required: boolean;
    disabled: boolean;
    private _valueStr;
    protected willUpdate(changedProps: PropertyValues): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _handleInputChange;
    private _handleSliderChange;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-number": HaNumberSelector;
    }
}
