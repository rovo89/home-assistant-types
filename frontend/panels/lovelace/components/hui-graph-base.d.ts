import { CSSResultGroup, LitElement, PropertyValues, TemplateResult } from "lit";
export declare class HuiGraphBase extends LitElement {
    coordinates?: any;
    private _path?;
    protected render(): TemplateResult;
    willUpdate(changedProps: PropertyValues): void;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-graph-base": HuiGraphBase;
    }
}
