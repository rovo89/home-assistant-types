import { LitElement, PropertyValues, TemplateResult } from "lit";
/**
 * @attribute active
 * @attribute track
 */
export declare class HatGraphNode extends LitElement {
    iconPath?: string;
    disabled: boolean;
    error: boolean;
    notEnabled: boolean;
    graphStart: boolean;
    noFocus: boolean;
    badge?: number;
    protected updated(changedProps: PropertyValues): void;
    protected render(): TemplateResult;
    static get styles(): import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hat-graph-node": HatGraphNode;
    }
}
