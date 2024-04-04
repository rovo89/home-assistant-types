import { LitElement, TemplateResult } from "lit";
export declare class HaTreeIndicator extends LitElement {
    end?: boolean;
    protected render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-tree-indicator": HaTreeIndicator;
    }
}
