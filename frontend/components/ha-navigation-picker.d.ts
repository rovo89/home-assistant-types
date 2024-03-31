import "@material/mwc-list/mwc-list-item";
import { LitElement, PropertyValues, TemplateResult } from "lit";
import { HomeAssistant } from "../types";
import "./ha-combo-box";
import "./ha-icon";
export declare class HaNavigationPicker extends LitElement {
    hass?: HomeAssistant;
    label?: string;
    value?: string;
    helper?: string;
    disabled: boolean;
    required: boolean;
    private _opened;
    private navigationItemsLoaded;
    private navigationItems;
    private comboBox;
    protected render(): TemplateResult;
    private _openedChanged;
    private _loadNavigationItems;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    private _valueChanged;
    private _setValue;
    private _filterChanged;
    private get _value();
    static get styles(): import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-navigation-picker": HaNavigationPicker;
    }
}
