import { CSSResultGroup, LitElement, TemplateResult } from "lit";
import "../components/ha-svg-icon";
declare class IntegrationBadge extends LitElement {
    domain: string;
    title: string;
    darkOptimizedIcon: boolean;
    clickable: boolean;
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "integration-badge": IntegrationBadge;
    }
}
export {};
