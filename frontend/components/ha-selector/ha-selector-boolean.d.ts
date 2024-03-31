import { CSSResultGroup, LitElement } from "lit";
import { HomeAssistant } from "../../types";
import "../ha-formfield";
import "../ha-switch";
import "../ha-input-helper-text";
export declare class HaBooleanSelector extends LitElement {
    hass: HomeAssistant;
    value: boolean;
    label?: string;
    helper?: string;
    disabled: boolean;
    protected render(): import("lit-html").TemplateResult<1>;
    private _handleChange;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-boolean": HaBooleanSelector;
    }
}
