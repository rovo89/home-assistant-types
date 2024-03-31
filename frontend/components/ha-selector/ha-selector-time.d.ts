import { LitElement } from "lit";
import { TimeSelector } from "../../data/selector";
import { HomeAssistant } from "../../types";
import "../ha-time-input";
export declare class HaTimeSelector extends LitElement {
    hass: HomeAssistant;
    selector: TimeSelector;
    value?: string;
    label?: string;
    helper?: string;
    disabled: boolean;
    required: boolean;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-time": HaTimeSelector;
    }
}
