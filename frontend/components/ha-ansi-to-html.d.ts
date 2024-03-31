import { CSSResultGroup, LitElement, TemplateResult } from "lit";
declare class HaAnsiToHtml extends LitElement {
    content: string;
    protected render(): TemplateResult | void;
    static get styles(): CSSResultGroup;
    private _parseTextToColoredPre;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-ansi-to-html": HaAnsiToHtml;
    }
}
export {};
