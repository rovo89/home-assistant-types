import { LitElement } from "lit";
import type { AreaFilterSelector } from "../../data/selector";
import { HomeAssistant } from "../../types";
import "../ha-area-filter";
export declare class HaAreaFilterSelector extends LitElement {
    hass: HomeAssistant;
    selector: AreaFilterSelector;
    value?: any;
    label?: string;
    helper?: string;
    disabled: boolean;
    required: boolean;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-area_filter": HaAreaFilterSelector;
    }
}
