import { LitElement, PropertyValues, TemplateResult } from "lit";
import "../ha-svg-icon";
declare class HaDataTableIcon extends LitElement {
    tooltip: string;
    path: string;
    private _hovered;
    protected render(): TemplateResult;
    protected firstUpdated(changedProps: PropertyValues): void;
    static get styles(): import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-data-table-icon": HaDataTableIcon;
    }
}
export {};
