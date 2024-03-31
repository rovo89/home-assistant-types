import { LitElement } from "lit";
declare class HatLogbookNote extends LitElement {
    domain: string;
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hat-logbook-note": HatLogbookNote;
    }
}
export {};
