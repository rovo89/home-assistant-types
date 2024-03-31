import { LitElement, TemplateResult } from "lit";
declare class InputHelperText extends LitElement {
    protected render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-input-helper-text": InputHelperText;
    }
}
export {};
