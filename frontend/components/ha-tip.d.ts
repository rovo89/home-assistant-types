import { LitElement, nothing } from "lit";
import { HomeAssistant } from "../types";
import "./ha-svg-icon";
declare class HaTip extends LitElement {
    hass: HomeAssistant;
    render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-tip": HaTip;
    }
}
export {};
