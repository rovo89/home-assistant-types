import { LitElement } from "lit";
import { HomeAssistant } from "../../types";
import "../ha-code-editor";
import "../ha-input-helper-text";
export declare class HaTemplateSelector extends LitElement {
    hass: HomeAssistant;
    value?: string;
    label?: string;
    helper?: string;
    disabled: boolean;
    required: boolean;
    protected render(): import("lit-html").TemplateResult<1>;
    private _handleChange;
    static get styles(): import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-template": HaTemplateSelector;
    }
}
