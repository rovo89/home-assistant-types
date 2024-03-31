import { CSSResultGroup, LitElement, TemplateResult } from "lit";
export declare class HaLogoSvg extends LitElement {
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-logo-svg": HaLogoSvg;
    }
}
