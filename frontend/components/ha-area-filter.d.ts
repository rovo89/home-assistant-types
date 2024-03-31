import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import { HomeAssistant } from "../types";
import "./ha-icon-next";
import "./ha-svg-icon";
import "./ha-textfield";
export type AreaFilterValue = {
    hidden?: string[];
    order?: string[];
};
export declare class HaAreaPicker extends LitElement {
    hass: HomeAssistant;
    label?: string;
    value?: AreaFilterValue;
    helper?: string;
    disabled: boolean;
    required: boolean;
    protected render(): TemplateResult;
    private _edit;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-area-filter": HaAreaPicker;
    }
}
