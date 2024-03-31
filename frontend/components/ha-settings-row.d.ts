import { CSSResultGroup, LitElement, TemplateResult } from "lit";
export declare class HaSettingsRow extends LitElement {
    narrow: boolean;
    threeLine: boolean;
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-settings-row": HaSettingsRow;
    }
}
