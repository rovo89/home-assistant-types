import { CSSResultGroup, LitElement } from "lit";
import { LabelSelector } from "../../data/selector";
import { HomeAssistant } from "../../types";
import "../ha-labels-picker";
export declare class HaLabelSelector extends LitElement {
    hass?: HomeAssistant;
    value?: string | string[];
    name?: string;
    label?: string;
    placeholder?: string;
    helper?: string;
    selector: LabelSelector;
    disabled: boolean;
    required: boolean;
    protected render(): import("lit-html").TemplateResult<1>;
    private _handleChange;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-label": HaLabelSelector;
    }
}
