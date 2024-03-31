import "@material/mwc-list/mwc-list-item";
import { LitElement } from "lit";
import "./ha-select";
import { HomeAssistant } from "../types";
export declare class HaColorPicker extends LitElement {
    label?: string;
    helper?: string;
    hass: HomeAssistant;
    value?: string;
    defaultColor: boolean;
    disabled: boolean;
    _valueSelected(ev: any): void;
    render(): import("lit-html").TemplateResult<1>;
    private renderColorCircle;
    static get styles(): import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-color-picker": HaColorPicker;
    }
}
