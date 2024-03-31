import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import "@material/web/ripple/ripple";
declare class HaLabel extends LitElement {
    dense: boolean;
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-label": HaLabel;
    }
}
export {};
