import { LitElement, TemplateResult } from "lit";
import { HomeAssistant } from "../types";
import "./ha-icon-button";
export declare class HaIconButtonPrev extends LitElement {
    hass?: HomeAssistant;
    disabled: boolean;
    label?: string;
    private _icon;
    protected render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-icon-button-prev": HaIconButtonPrev;
    }
}
