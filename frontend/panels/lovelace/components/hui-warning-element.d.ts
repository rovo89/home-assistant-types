import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import "../../../components/ha-svg-icon";
export declare class HuiWarningElement extends LitElement {
    label?: string;
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-warning-element": HuiWarningElement;
    }
}
