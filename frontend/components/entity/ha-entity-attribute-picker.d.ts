import { HassEntity } from "home-assistant-js-websocket";
import { LitElement, PropertyValues, nothing } from "lit";
import { HomeAssistant } from "../../types";
import "../ha-combo-box";
export type HaEntityPickerEntityFilterFunc = (entityId: HassEntity) => boolean;
declare class HaEntityAttributePicker extends LitElement {
    hass: HomeAssistant;
    entityId?: string;
    /**
     * List of attributes to be hidden.
     * @type {Array}
     * @attr hide-attributes
     */
    hideAttributes?: string[];
    autofocus: boolean;
    disabled: boolean;
    required: boolean;
    allowCustomValue: any;
    label?: string;
    value?: string;
    helper?: string;
    private _opened;
    private _comboBox;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected updated(changedProps: PropertyValues): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _openedChanged;
    private _valueChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-entity-attribute-picker": HaEntityAttributePicker;
    }
}
export {};
