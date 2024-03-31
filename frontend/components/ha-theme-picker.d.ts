import "@material/mwc-list/mwc-list-item";
import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import { HomeAssistant } from "../types";
import "./ha-select";
export declare class HaThemePicker extends LitElement {
    value?: string;
    label?: string;
    includeDefault: boolean;
    hass?: HomeAssistant;
    disabled: boolean;
    required: boolean;
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
    private _changed;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-theme-picker": HaThemePicker;
    }
}
