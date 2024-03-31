import { CSSResultGroup, LitElement, TemplateResult } from "lit";
export declare class HaControlButtonGroup extends LitElement {
    vertical: boolean;
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-control-button-group": HaControlButtonGroup;
    }
}
