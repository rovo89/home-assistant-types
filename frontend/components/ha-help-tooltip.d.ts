import "@lrnwebcomponents/simple-tooltip/simple-tooltip";
import { LitElement, TemplateResult } from "lit";
import "./ha-svg-icon";
export declare class HaHelpTooltip extends LitElement {
    label: string;
    position: string;
    protected render(): TemplateResult;
    static get styles(): import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-help-tooltip": HaHelpTooltip;
    }
}
