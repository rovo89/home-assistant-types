import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import "../ha-icon";
export declare class HaTileBadge extends LitElement {
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-tile-badge": HaTileBadge;
    }
}
