import { CSSResultGroup, LitElement } from "lit";
export declare class HaCard extends LitElement {
    header?: string;
    raised: boolean;
    static get styles(): CSSResultGroup;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-card": HaCard;
    }
}
