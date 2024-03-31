import { CSSResultGroup, LitElement, TemplateResult } from "lit";
export declare class HaTileInfo extends LitElement {
    primary?: string;
    secondary?: string | TemplateResult<1>;
    protected render(): TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-tile-info": HaTileInfo;
    }
}
