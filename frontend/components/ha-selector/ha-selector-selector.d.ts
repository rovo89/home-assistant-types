import { CSSResultGroup, LitElement, PropertyValues } from "lit";
import type { HomeAssistant } from "../../types";
import "../ha-alert";
import "../ha-form/ha-form";
export declare class HaSelectorSelector extends LitElement {
    hass: HomeAssistant;
    value?: any;
    label?: string;
    helper?: string;
    disabled: boolean;
    required: boolean;
    private _yamlMode;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    private _schema;
    protected render(): import("lit-html").TemplateResult<1>;
    private _valueChanged;
    private _computeLabelCallback;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-selector": HaSelectorSelector;
    }
}
