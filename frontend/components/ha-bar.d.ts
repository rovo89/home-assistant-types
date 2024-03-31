import { CSSResultGroup, LitElement, TemplateResult } from "lit";
export declare class HaBar extends LitElement {
    min: number;
    max: number;
    value: number;
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-bar": HaBar;
    }
}
