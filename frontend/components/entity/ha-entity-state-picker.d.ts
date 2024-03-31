import { HassEntity } from "home-assistant-js-websocket";
import { LitElement, PropertyValues, nothing } from "lit";
import { HomeAssistant } from "../../types";
import "../ha-combo-box";
export type HaEntityPickerEntityFilterFunc = (entityId: HassEntity) => boolean;
declare class HaEntityStatePicker extends LitElement {
    hass: HomeAssistant;
    entityId?: string;
    attribute?: string;
    extraOptions?: any[];
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
    private get _value();
    private _openedChanged;
    private _valueChanged;
    private _setValue;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-entity-state-picker": HaEntityStatePicker;
    }
}
export {};
