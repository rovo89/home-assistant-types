import { LitElement, PropertyValues } from "lit";
import { HomeAssistant } from "../../types";
import "../ha-yaml-editor";
import "../ha-input-helper-text";
export declare class HaObjectSelector extends LitElement {
    hass: HomeAssistant;
    value?: any;
    label?: string;
    helper?: string;
    placeholder?: string;
    disabled: boolean;
    required: boolean;
    private _yamlEditor;
    private _valueChangedFromChild;
    protected render(): import("lit-html").TemplateResult<1>;
    protected updated(changedProps: PropertyValues): void;
    private _handleChange;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-object": HaObjectSelector;
    }
}
