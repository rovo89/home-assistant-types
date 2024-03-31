import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import "../ha-icon";
import "../ha-svg-icon";
export declare class HaTileIcon extends LitElement {
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-tile-icon": HaTileIcon;
    }
}
