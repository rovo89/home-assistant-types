import { CSSResultGroup, LitElement, PropertyValues, nothing } from "lit";
declare class HuiMarquee extends LitElement {
    text?: string;
    active: boolean;
    animating: boolean;
    protected firstUpdated(changedProps: any): void;
    protected updated(changedProperties: PropertyValues): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _onIteration;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-marquee": HuiMarquee;
    }
}
export {};
