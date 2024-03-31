import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import "./ha-bar";
import "./ha-settings-row";
declare class HaMetric extends LitElement {
    value: number;
    heading: string;
    tooltip?: string;
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-metric": HaMetric;
    }
}
export {};
