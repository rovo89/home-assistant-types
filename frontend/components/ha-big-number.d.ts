import { CSSResultGroup, LitElement } from "lit";
import { HomeAssistant } from "../types";
export declare class HaBigNumber extends LitElement {
    value: number;
    unit?: string;
    unitPosition: "top" | "bottom";
    hass?: HomeAssistant;
    formatOptions: Intl.NumberFormatOptions;
    protected render(): import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-big-number": HaBigNumber;
    }
}
