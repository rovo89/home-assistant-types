import { CSSResultGroup, LitElement, TemplateResult } from "lit";
export declare class HaIconButtonGroup extends LitElement {
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-icon-button-group": HaIconButtonGroup;
    }
}
