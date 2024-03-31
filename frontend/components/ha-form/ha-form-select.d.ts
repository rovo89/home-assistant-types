import { LitElement, TemplateResult } from "lit";
import type { HomeAssistant } from "../../types";
import type { HaFormElement, HaFormSelectData, HaFormSelectSchema } from "./types";
import "../ha-selector/ha-selector-select";
export declare class HaFormSelect extends LitElement implements HaFormElement {
    hass: HomeAssistant;
    schema: HaFormSelectSchema;
    data: HaFormSelectData;
    label?: string;
    helper?: string;
    disabled: boolean;
    private _selectSchema;
    protected render(): TemplateResult;
    private _valueChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-form-select": HaFormSelect;
    }
}
