import { CSSResultGroup, LitElement, nothing } from "lit";
import "./ha-markdown-element";
export declare class HaMarkdown extends LitElement {
    content?: any;
    allowSvg: boolean;
    breaks: boolean;
    lazyImages: boolean;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-markdown": HaMarkdown;
    }
}
